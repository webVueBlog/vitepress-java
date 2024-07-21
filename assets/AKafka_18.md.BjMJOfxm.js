import{_ as n,c as s,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_87.BZzuxfST.png",i="/vitepress-java/assets/img_88.CxgKk63Y.png",l="/vitepress-java/assets/img_89.BRZVG2ai.png",T=JSON.parse('{"title":"5.2-SpringBoot2.x整合Kafka客户端+adminApi单元测试","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/18.md","filePath":"AKafka/18.md"}'),t={name:"AKafka/18.md"},r=p('<h1 id="_5-2-springboot2-x整合kafka客户端-adminapi单元测试" tabindex="-1">5.2-SpringBoot2.x整合Kafka客户端+adminApi单元测试 <a class="header-anchor" href="#_5-2-springboot2-x整合kafka客户端-adminapi单元测试" aria-label="Permalink to &quot;5.2-SpringBoot2.x整合Kafka客户端+adminApi单元测试&quot;">​</a></h1><p><img src="'+e+`" alt="img_87.png" loading="lazy"></p><p>单元测试：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//设置admin 客户端</span></span>
<span class="line"><span>public static AdminClient initAdminClient() {</span></span>
<span class="line"><span>    Properties properties = new Properties();</span></span>
<span class="line"><span>    properties.setProperty(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, &quot;112.74.55.160:9092&quot;);</span></span>
<span class="line"><span>    AdminClient adminClient = AdminClient.create(properties);</span></span>
<span class="line"><span>    return adminClient;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//创建</span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void createTopic() throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span>    //设置admin 客户端</span></span>
<span class="line"><span>    AdminClient adminClient = initAdminClient();</span></span>
<span class="line"><span>    //创建topic 2个分区，1个副本</span></span>
<span class="line"><span>    NewTopic newTopic = new NewTopic(TOPIC_NAME, 2, (short) 1);</span></span>
<span class="line"><span>    CreateTopicsResult createTopicsResult = adminClient.createTopics(Collections.singleton(newTopic));</span></span>
<span class="line"><span>    // Collections.singleton(newTopic) == Arrays.asList(newTopic)</span></span>
<span class="line"><span>    createTopicsResult.all().get();</span></span>
<span class="line"><span>    adminClient.close();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除</span></span>
<span class="line"><span>@Test</span></span>
<span class="line"><span>public void deleteTopic() throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span>    //设置admin 客户端</span></span>
<span class="line"><span>    AdminClient adminClient = initAdminClient();</span></span>
<span class="line"><span>    //删除topic</span></span>
<span class="line"><span>    DeleteTopicsResult deleteTopicsResult = adminClient</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="`+i+'" alt="img_88.png" loading="lazy"></p><p><img src="'+l+'" alt="img_89.png" loading="lazy"></p>',6),c=[r];function o(m,b,d,u,_,g){return a(),s("div",null,c)}const h=n(t,[["render",o]]);export{T as __pageData,h as default};
