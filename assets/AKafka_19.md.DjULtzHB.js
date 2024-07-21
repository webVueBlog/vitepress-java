import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const h=JSON.parse('{"title":"5.3-Kafka使用JavaAPI-AdminClient删除和列举topic","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/19.md","filePath":"AKafka/19.md"}'),e={name:"AKafka/19.md"},i=p(`<h1 id="_5-3-kafka使用javaapi-adminclient删除和列举topic" tabindex="-1">5.3-Kafka使用JavaAPI-AdminClient删除和列举topic <a class="header-anchor" href="#_5-3-kafka使用javaapi-adminclient删除和列举topic" aria-label="Permalink to &quot;5.3-Kafka使用JavaAPI-AdminClient删除和列举topic&quot;">​</a></h1><p>kafka使用JavaAPI+adminclient创建和列举topic</p><p>list列举</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//获取</span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void listTopic() throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span> AdminClient adminClient = initAdminClient();</span></span>
<span class="line"><span> //是否查看内部的topic，可以不用</span></span>
<span class="line"><span> ListTopicsOptions options = new ListTopicsOptions();</span></span>
<span class="line"><span> options.listInternal(true);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> ListTopicsResult listTopics = adminClient.listTopics(options);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> Set&lt;String&gt; topics = listTopics.names().get();</span></span>
<span class="line"><span> for (String topic : topics) {</span></span>
<span class="line"><span>  System.err.println(topic);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>删除topic</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//删除</span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void delTopicTest() {</span></span>
<span class="line"><span> AdminClient adminClient = initAdminClient();</span></span>
<span class="line"><span> DeleteTopicsResult deleteTopicsResult = adminClient.deleteTopics(Arrays.asList(&quot;test&quot;));</span></span>
<span class="line"><span> try {</span></span>
<span class="line"><span>  deleteTopicsResult.all().get();</span></span>
<span class="line"><span> } catch (InterruptedException e) {</span></span>
<span class="line"><span>  e.printStackTrace();</span></span>
<span class="line"><span> } catch (ExecutionException e) {</span></span>
<span class="line"><span>  e.printStackTrace();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,6),l=[i];function t(c,r,o,b,d,m){return a(),n("div",null,l)}const _=s(e,[["render",t]]);export{h as __pageData,_ as default};
