import{_ as a,c as s,o as n,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img_104.Lto18K_T.png",f=JSON.parse('{"title":"6.4-Kafka核心API模块-producerAPI回调函数实战","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/24.md","filePath":"AKafka/24.md"}'),l={name:"AKafka/24.md"},t=e(`<h1 id="_6-4-kafka核心api模块-producerapi回调函数实战" tabindex="-1">6.4-Kafka核心API模块-producerAPI回调函数实战 <a class="header-anchor" href="#_6-4-kafka核心api模块-producerapi回调函数实战" aria-label="Permalink to &quot;6.4-Kafka核心API模块-producerAPI回调函数实战&quot;">​</a></h1><p>生产者发送消息是异步调用，怎么知道是否有异常？</p><ul><li>发送消息配置回调函数即可，该回调方法会在Producer收到ack时被调用，为异步调用。</li><li>回调函数有两个参数RecordMetadata和Exception，如果Exception是null，则消息发送成功，否则失败</li></ul><p>异步发送配置回调函数</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void testSyncSendCallback() {</span></span>
<span class="line"><span> Properties props = getProperties();</span></span>
<span class="line"><span> Producer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(props);</span></span>
<span class="line"><span> for (int i = 1; i &lt; 3; i++) {</span></span>
<span class="line"><span>  producer.send(new ProducerRecord&lt;&gt;(&quot;my-topic&quot;, &quot;xdclass-key&quot; + i, &quot;xdclass-value&quot; + i), new Callback() {</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   @Override</span></span>
<span class="line"><span>   public void onCompletion(RecordMetadata metadata, Exception exception) {</span></span>
<span class="line"><span>    if (exception == null) {</span></span>
<span class="line"><span>     System.out.println(&quot;消息发送成功：&quot; + metadata.topic() + &quot;-&quot; + metadata.partition() + &quot;-&quot; + metadata.offset());</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>     System.out.println(&quot;消息发送失败：&quot; + exception.getMessage());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> producer.close();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><img src="`+p+'" alt="img_104.png" loading="lazy"></p>',6),i=[t];function r(c,o,u,d,b,m){return n(),s("div",null,i)}const g=a(l,[["render",r]]);export{f as __pageData,g as default};
