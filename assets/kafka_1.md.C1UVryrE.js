import{_ as a,c as e,o as s,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const i="/vitepress-java/assets/img_162.DtNr4rsb.png",t="/vitepress-java/assets/img_163.BUJ0-UpG.png",n="/vitepress-java/assets/img_164.Ca-RUoSX.png",r="/vitepress-java/assets/img_166.0dMNQQO1.png",c="/vitepress-java/assets/img_165.wafTAb4K.png",o="/vitepress-java/assets/img_167.DlgaBnrJ.png",l="/vitepress-java/assets/img_168.BPGxMLUQ.png",g="/vitepress-java/assets/img_169.DehYjyaq.png",_="/vitepress-java/assets/img_170.BxJnpqcL.png",M=JSON.parse('{"title":"Kafka的顺序写、磁盘的物理结构、MMAP零拷贝机制","description":"","frontmatter":{},"headers":[],"relativePath":"kafka/1.md","filePath":"kafka/1.md"}'),m={name:"kafka/1.md"},d=p('<h1 id="kafka的顺序写、磁盘的物理结构、mmap零拷贝机制" tabindex="-1">Kafka的顺序写、磁盘的物理结构、MMAP零拷贝机制 <a class="header-anchor" href="#kafka的顺序写、磁盘的物理结构、mmap零拷贝机制" aria-label="Permalink to &quot;Kafka的顺序写、磁盘的物理结构、MMAP零拷贝机制&quot;">​</a></h1><p>kafka在发送消息时如何利用顺序写机制向硬盘上高速写数据</p><ol><li>什么是顺序写，追加写就是顺序写吗？</li><li>顺序写就一定保证所有的数据都挨着吗？</li><li>顺序写为什么会比随机写快？</li><li>磁盘的物理结构是什么样的？</li><li>kafka发送消息时用到的MMAP是什么？</li><li>kafka是如何利用顺序写提高吞吐量的。</li></ol><p><img src="'+i+'" alt="img_162.png" loading="lazy"></p><p>首先将消息 追加到ProducerBatch中，注意由于我们这里采用的是sticky，粘性分区策略，所以能够尽量的做到，把每个ProducerBatch，填满数据， 填满数据的好处就是（可以减少磁盘的寻址次数，因为磁盘的寻址次数是影响磁盘IO性能的）可以增加批量发送消息的吞吐量， 这个时候就是由（顺序写来提高磁盘的IO性能的。）network thread线程，负责把ProducerBatch发送到broker，端的 Socket Receive Buffer中 注意这个发送过程，是一个批量发送消息的 过程，批量发送消息的另外一个好处就是，在服务端解析报文的时候，它解析一个报文，里面可能会包含多条消息。 相当于解析起来更加方便。</p><p>现在数据已经被发送到了 Socket Receive Buffer中。</p><p>什么是MMAP呢，是<strong>内存映射</strong>，它把磁盘上的文件映射到内存中，它有什么作用，作用就是减少磁盘的IO性能。</p><p><img src="'+t+'" alt="img_163.png" loading="lazy"></p><p><img src="'+n+'" alt="img_164.png" loading="lazy"></p><p>ProducerBatch已经被发送到Socket Receive Buffer中，然后network thread线程，负责把ProducerBatch发送到broker， 如何把这个数据发送到PageCache中呢？</p><p>MMAP是把内核缓冲区的虚拟地址，和用户缓冲区的虚拟地址，映射到了同一块物理内存上。 这样做的好处是，就可以实现内核缓冲区（PageCache）和用户缓冲区（Socket Receive Buffer）之间的数据共享。 (共享一块内存)</p><p>因此这个时候，就可以在内核中直接传输数据了。相当于可以把Socket Receive Buffer中的数据，拷贝到PageCache，注意这里利用的CPU copy拷贝</p><p><img src="'+r+'" alt="img_166.png" loading="lazy"></p><p><img src="'+c+'" alt="img_165.png" loading="lazy"></p><p>把数据从Socket Receive Buffer拷贝到PageCache，(然后操作系统的后台线程，会异步的把PageCache上的数据，写到硬盘上) 然后PageCache中的数据，就可以被内核直接传输到网卡了。</p><p><img src="'+o+'" alt="img_167.png" loading="lazy"></p><h2 id="内存映射" tabindex="-1">内存映射 <a class="header-anchor" href="#内存映射" aria-label="Permalink to &quot;内存映射&quot;">​</a></h2><p>内存映射最大的好处是省去了要先把数据拷贝到用户缓冲区</p><p>传统的拷贝，减少一次拷贝，就被称为零拷贝</p><p><img src="'+l+'" alt="img_168.png" loading="lazy"></p><h2 id="kafka发送原理" tabindex="-1">kafka发送原理 <a class="header-anchor" href="#kafka发送原理" aria-label="Permalink to &quot;kafka发送原理&quot;">​</a></h2><p>MMAP是内核缓冲区，和用户缓冲区之间建立映射关系，紧接着就是在内核中拷贝数据了。然后把数据拷贝到PageCache，注意， PageCache是操作系统内核缓冲区，它和用户缓冲区之间建立映射关系，然后内核就可以直接把数据传输到网卡了。</p><p>一旦数据被拷贝到PageCache上，相应的ProducerBatch，这个空间就会被释放带哦，</p><p><img src="'+g+'" alt="img_169.png" loading="lazy"></p><p><img src="'+_+`" alt="img_170.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1./proc/sys/vm/dirty_expire_centisecs “脏”数据留存时间30s</span></span>
<span class="line"><span>2../proc/sys/vm/dirty_writeback_centisecs 检查间隔5s</span></span>
<span class="line"><span>3./proc/sys/vm/dirty_ratio 同步刷盘20%</span></span>
<span class="line"><span>4../proc/sys/vm/dirty_background_ratio 异步刷盘10%</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,26),k=[d];function h(f,v,u,P,b,y){return s(),e("div",null,k)}const C=a(m,[["render",h]]);export{M as __pageData,C as default};