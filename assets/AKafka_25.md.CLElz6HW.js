import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_105.Bi-wzRgc.png",l="/vitepress-java/assets/img_106.DSJdbyGD.png",i="/vitepress-java/assets/img_107.Bnc_4por.png",v=JSON.parse('{"title":"6.5-producer生产者发送指定分区实战","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/25.md","filePath":"AKafka/25.md"}'),r={name:"AKafka/25.md"},t=p(`<h1 id="_6-5-producer生产者发送指定分区实战" tabindex="-1">6.5-producer生产者发送指定分区实战 <a class="header-anchor" href="#_6-5-producer生产者发送指定分区实战" aria-label="Permalink to &quot;6.5-producer生产者发送指定分区实战&quot;">​</a></h1><p>producer生产者发送指定分区实战</p><ul><li>创建topic，配置5个分区，1个副本</li><li>发送代码</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Test</span></span>
<span class="line"><span>public void testSendWidthCallbackAndPartition() {</span></span>
<span class="line"><span> Properties props = getProperties();</span></span>
<span class="line"><span> Producer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(props);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> for (int i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>  producer.send(new ProducerRecord&lt;&gt;(&quot;my-topic&quot;, i, &quot;xdclass-key&quot; + i, &quot;xdclass-value&quot; + i), new Callback() {</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   @Override</span></span>
<span class="line"><span>   public void onCompletion(RecordMetadata metadata, Exception exception) {</span></span>
<span class="line"><span>    if (exception == null) {</span></span>
<span class="line"><span>     System.out.println(&quot;发送成功：&quot; + metadata);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>     System.out.println(&quot;发送失败：&quot; + exception);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  System.out.println(i)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  producer.close();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><img src="`+e+'" alt="img_105.png" loading="lazy"></p><p><img src="'+l+'" alt="img_106.png" loading="lazy"></p><p>实现顺序消息</p><p><img src="'+i+'" alt="img_107.png" loading="lazy"></p>',8),c=[t];function o(u,d,b,m,_,g){return a(),n("div",null,c)}const f=s(r,[["render",o]]);export{v as __pageData,f as default};
