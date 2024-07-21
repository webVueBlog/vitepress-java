import{_ as s,c as a,o as n,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_95.Dlntzxii.png",l="/vitepress-java/assets/img_96.BaIU5Xe3.png",r="/vitepress-java/assets/img_97.Bl1hmu-i.png",i="/vitepress-java/assets/img_98.Ch-ojR17.png",c="/vitepress-java/assets/img_99.67NIg_w8.png",t="/vitepress-java/assets/img_100.DjFfFppr.png",o="/vitepress-java/assets/img_101.FodSOABC.png",z=JSON.parse('{"title":"6.2-Kafka核心API模块-producer API讲解实战","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/22.md","filePath":"AKafka/22.md"}'),u={name:"AKafka/22.md"},m=p(`<h1 id="_6-2-kafka核心api模块-producer-api讲解实战" tabindex="-1">6.2-Kafka核心API模块-producer API讲解实战 <a class="header-anchor" href="#_6-2-kafka核心api模块-producer-api讲解实战" aria-label="Permalink to &quot;6.2-Kafka核心API模块-producer API讲解实战&quot;">​</a></h1><p>封装配置属性</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public static Properties getProperties() {</span></span>
<span class="line"><span> Properties props = new Properties();</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> props.put(&quot;bootstrap.servers&quot;, &quot;112.74.55.160:9092&quot;);</span></span>
<span class="line"><span> // props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, &quot;112.74.55.160:9092&quot;);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 当producer向leader发送数据时，可以通过request.required.acks参数来设置数据可靠性的级别，分别是0，1，all。</span></span>
<span class="line"><span> props.put(&quot;acks&quot;, &quot;all&quot;);</span></span>
<span class="line"><span> // props.put(ProducerConfig.ACKS_CONFIG, &quot;all&quot;);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 请求失败，生产者会自动重试，指定是0次，如果启用重试，则会有重复消息的可能性</span></span>
<span class="line"><span> props.put(&quot;retries&quot;, 0);</span></span>
<span class="line"><span> // props.put(ProducerConfig.RETRIES_CONFIG, 0);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 生产者缓存每个分区未发送的消息，缓存的大小是通过 batch.size 配置指定的，默认值是16KB</span></span>
<span class="line"><span> props.put(&quot;batch.size&quot;, 16384);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 默认值就是0，消息是立刻发送的，即便batch.size缓冲空间还没有满</span></span>
<span class="line"><span> // 如果想减少请求的数量，可以设置 linger.ms 大于0，即消息在缓冲区保留的时间，超过设置的值就会被提交到服务端</span></span>
<span class="line"><span> // 通俗解释是，本该早就发出去的消息被迫至少等待了linger.ms时间，相对于这时间内积累了更多消息，批量发送减少请求</span></span>
<span class="line"><span> // 如果batch被填满或者linger.ms达到上限，满足其中一个就会被发送</span></span>
<span class="line"><span> props.put(&quot;linger.ms&quot;, 1);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // buffer.memory的用来约束kafka Producer能够使用的内存缓冲的大小的，默认值32KB</span></span>
<span class="line"><span> // 如果buffer.memory设置的太小，可能导致消息快速的写入内存缓冲里，但Sender线程来不及把消息发送到</span></span>
<span class="line"><span> // 会造成内存缓冲很快就被写满，而一旦被写满，就会阻塞用户线程，不让继续往Kakfa写消息了</span></span>
<span class="line"><span> // buffer.memory要大于 batch.size，否则会报申请内存不足的错误，不要超过物理内存，根据实际情况调整</span></span>
<span class="line"><span> // 需要结合实际业务情况压测进行配置</span></span>
<span class="line"><span> props.put(&quot;buffer.memory&quot;, 33554432);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // key的序列化器，将用户提供的，key和value对象ProducerRecord进行序列化处理，key.serizlizer必须被</span></span>
<span class="line"><span> // 即使消息中没有指定key，序列化器必须是一个实 org.apache.kafka.common.serialization.Serializer 接口的类。</span></span>
<span class="line"><span> // 将key序列化成字节数组</span></span>
<span class="line"><span> props.put(&quot;key.serializer&quot;, &quot;org.apache.kafka.common.serialization.StringSerializer&quot;);</span></span>
<span class="line"><span> props.put(&quot;value.serializer&quot;, &quot;org.apache.kafka.common.serialization.StringSerializer&quot;);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> return props;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p><img src="`+e+'" alt="img_95.png" loading="lazy"></p><p><img src="'+l+'" alt="img_96.png" loading="lazy"></p><p><img src="'+r+'" alt="img_97.png" loading="lazy"></p><p><img src="'+i+'" alt="img_98.png" loading="lazy"></p><p>主题-分区</p><p><img src="'+c+'" alt="img_99.png" loading="lazy"></p><p><img src="'+t+'" alt="img_100.png" loading="lazy"></p><p>逻辑</p><p><img src="'+o+'" alt="img_101.png" loading="lazy"></p>',12),b=[m];function g(_,d,f,k,q,h){return n(),a("div",null,b)}const P=s(u,[["render",g]]);export{z as __pageData,P as default};
