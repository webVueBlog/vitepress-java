import{_ as a,c as e,o as s,a8 as n}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img_102.CZqLmiom.png",r="/vitepress-java/assets/img_103.BHWP9iv9.png",b=JSON.parse('{"title":"6.3-【面试】 ProducerRecord介绍和key的作用","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/23.md","filePath":"AKafka/23.md"}'),i={name:"AKafka/23.md"},t=n(`<h1 id="_6-3-【面试】-producerrecord介绍和key的作用" tabindex="-1">6.3-【面试】 ProducerRecord介绍和key的作用 <a class="header-anchor" href="#_6-3-【面试】-producerrecord介绍和key的作用" aria-label="Permalink to &quot;6.3-【面试】 ProducerRecord介绍和key的作用&quot;">​</a></h1><p>简介：ProducerRecord（检查PR）</p><p>发送给kafka Broker的key/value值对，封装基础数据信息</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>-- Topic 名字</span></span>
<span class="line"><span>-- Partition 分区号</span></span>
<span class="line"><span>-- Key 可选的 key</span></span>
<span class="line"><span>-- Value 可选的 value</span></span>
<span class="line"><span>-- Headers 可选的 key-value 对</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><img src="`+p+'" alt="img_102.png" loading="lazy"></p><p><img src="'+r+'" alt="img_103.png" loading="lazy"></p><p>实现顺序消息：</p><p>key默认是null，大多数应用程序会用到key</p><p>如果key为空，kafka使用默认的partitioner，使用RoundRonbin算法将消息均衡地分布在各个partition上</p><p>如果key不为空，kafka会使用key的hash值来选择partition，key相同的消息会被发送到同一个partition上</p>',10),o=[t];function c(l,d,_,u,k,m){return s(),e("div",null,o)}const g=a(i,[["render",c]]);export{b as __pageData,g as default};
