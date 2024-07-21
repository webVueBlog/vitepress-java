import{_ as s,c as a,o as n,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_122.BVbnwoJY.png",r="/vitepress-java/assets/img_123.DD5yxRta.png",t="/vitepress-java/assets/img_124.BetrEI7S.png",k=JSON.parse('{"title":"7.5-Kafka消费者Consumer消费消息配置实战","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/31.md","filePath":"AKafka/31.md"}'),o={name:"AKafka/31.md"},i=p(`<h1 id="_7-5-kafka消费者consumer消费消息配置实战" tabindex="-1">7.5-Kafka消费者Consumer消费消息配置实战 <a class="header-anchor" href="#_7-5-kafka消费者consumer消费消息配置实战" aria-label="Permalink to &quot;7.5-Kafka消费者Consumer消费消息配置实战&quot;">​</a></h1><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public static Properties getProperties() {</span></span>
<span class="line"><span>  Properties props = new Properties();</span></span>
<span class="line"><span>  props.put(&quot;bootstrap.servers&quot;, &quot;192.168.6.132:9092,192.168.6.133:9092,192.168.6.134:9092&quot;);</span></span>
<span class="line"><span>  props.put(&quot;group.id&quot;, &quot;test&quot;);</span></span>
<span class="line"><span>  props.put(&quot;enable.auto.commit&quot;, &quot;true&quot;);</span></span>
<span class="line"><span>  props.put(&quot;auto.commit.interval.ms&quot;, &quot;1000&quot;);</span></span>
<span class="line"><span>  props.put(&quot;key.deserializer&quot;, &quot;org.apache.kafka.common.serialization.StringDeserializer&quot;);</span></span>
<span class="line"><span>  props.put(&quot;value.deserializer&quot;, &quot;org.apache.kafka.common.serialization.StringDeserializer&quot;);</span></span>
<span class="line"><span>  return props;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  Properties props = new Properties();</span></span>
<span class="line"><span>  //broker地址</span></span>
<span class="line"><span>  props.put(&quot;bootstrap.servers&quot;, &quot;112.74.55.160:9092&quot;);</span></span>
<span class="line"><span>  //消费者分组id，分组内的消费者只能消费该消息一次，不同分组内的消费者可以重复消费该消息</span></span>
<span class="line"><span>  props.put(&quot;group.id&quot;, &quot;xdclass-gl&quot;);</span></span>
<span class="line"><span>  //开启自动提交offset</span></span>
<span class="line"><span>  props.put(&quot;enable.auto.commit&quot;, &quot;true&quot;);</span></span>
<span class="line"><span>  //自动提交offset延迟时间</span></span>
<span class="line"><span>  props.put(&quot;auto.commit.interval.ms&quot;, &quot;1000&quot;);</span></span>
<span class="line"><span>  //反序列化</span></span>
<span class="line"><span>  props.put(&quot;key.deserializer&quot;, &quot;org.apache.kafka.common.serialization.StringDeserailizer&quot;);</span></span>
<span class="line"><span>  props.put(&quot;value.deserializer&quot;, &quot;org.apache.kafka.common.serialization.StringDeserailizer&quot;);</span></span>
<span class="line"><span>  return props;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>tip</p><p><img src="`+e+'" alt="img_122.png" loading="lazy"></p><p>拉取</p><p><img src="'+r+'" alt="img_123.png" loading="lazy"></p><p><img src="'+t+'" alt="img_124.png" loading="lazy"></p>',7),l=[i];function u(c,m,b,q,_,d){return n(),a("div",null,l)}const f=s(o,[["render",u]]);export{k as __pageData,f as default};
