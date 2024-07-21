import{_ as s,c as a,o as n,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_108.Dap0tDlo.png",i="/vitepress-java/assets/img_109.CzTpr6rl.png",l="/vitepress-java/assets/img_110.D8p0_wG8.png",t="/vitepress-java/assets/img_111.lDFRSXdZ.png",r="/vitepress-java/assets/img_112.DnL-7_zE.png",f=JSON.parse('{"title":"6.6-【高级篇】Kafka生产者自定义partition分区规则实战","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/26.md","filePath":"AKafka/26.md"}'),c={name:"AKafka/26.md"},o=p(`<h1 id="_6-6-【高级篇】kafka生产者自定义partition分区规则实战" tabindex="-1">6.6-【高级篇】Kafka生产者自定义partition分区规则实战 <a class="header-anchor" href="#_6-6-【高级篇】kafka生产者自定义partition分区规则实战" aria-label="Permalink to &quot;6.6-【高级篇】Kafka生产者自定义partition分区规则实战&quot;">​</a></h1><p>kafka生产者自定义partition分区规则实战</p><p>源码解读默认分区器</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>org.apache.kafka.clients.producer.internals.DefaultPartitioner</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>自定义分区规则</p><ul><li>创建类，实现Partitioner接口，重写方法</li><li>配置partitioner.class指定类即可</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class XdclassPartitioner implements Partitioner {</span></span>
<span class="line"><span> @Overrride</span></span>
<span class="line"><span> public int partition(String topic, Object key, byte[] keyBytes, Object value, byte[] valueBytes, Cluster, cluster) {</span></span>
<span class="line"><span>  List&lt;PartitionInfo&gt; partitions = cluster.partitionsForTopic(topic);</span></span>
<span class="line"><span>  int numPartitions = partitions.size();</span></span>
<span class="line"><span>  if (&quot;xdclass&quot;.equals(key)) {</span></span>
<span class="line"><span>   return 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  //使用hash值取模，确定分区（默认的也是这个方式）</span></span>
<span class="line"><span>  return Utils.toPositive(Utils.murmur2(keyBytes)) % numPartitions;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> @Override</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> public void close() {</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> @Override</span></span>
<span class="line"><span> public void configure(Map&lt;String, ?&gt; configs) {</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><img src="`+e+'" alt="img_108.png" loading="lazy"></p><p><img src="'+i+'" alt="img_109.png" loading="lazy"></p><p><img src="'+l+'" alt="img_110.png" loading="lazy"></p><p>自定义分区</p><p><img src="'+t+'" alt="img_111.png" loading="lazy"></p><p><img src="'+r+'" alt="img_112.png" loading="lazy"></p>',13),b=[o];function m(u,d,_,g,v,h){return n(),a("div",null,b)}const y=s(c,[["render",m]]);export{f as __pageData,y as default};
