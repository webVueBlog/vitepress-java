import{_ as s,c as n,o as a,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img_476.B5sF9Onr.png",i="/vitepress-java/assets/img_477.BS1_JZ_l.png",t="/vitepress-java/assets/img_478.YwlZFYT_.png",A=JSON.parse('{"title":"45-网关限流-API分组维度","description":"","frontmatter":{},"headers":[],"relativePath":"Spring-Cloud-Alibaba/45.md","filePath":"Spring-Cloud-Alibaba/45.md"}'),l={name:"Spring-Cloud-Alibaba/45.md"},r=e('<h1 id="_45-网关限流-api分组维度" tabindex="-1">45-网关限流-API分组维度 <a class="header-anchor" href="#_45-网关限流-api分组维度" aria-label="Permalink to &quot;45-网关限流-API分组维度&quot;">​</a></h1><p><img src="'+p+'" alt="img_476.png" loading="lazy"></p><p><img src="'+i+'" alt="img_477.png" loading="lazy"></p><p><img src="'+t+`" alt="img_478.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@PostConstruct</span></span>
<span class="line"><span>private void initCustomizedApis() {</span></span>
<span class="line"><span>    Set&lt;ApiDefinition&gt; definitions = new HashSet&lt;&gt;();</span></span>
<span class="line"><span>    ApiDefinition api1 = new ApiDefinition(&quot;product-api1&quot;)&quot;)</span></span>
<span class="line"><span>        .setPredicateItems(new HashSet&lt;ApiPredicateItem&gt;() {{</span></span>
<span class="line"><span>            add(new ApiPathPredicateItem().setPattern(&quot;/product-serv/product/api1/**&quot;));</span></span>
<span class="line"><span>        }});</span></span>
<span class="line"><span>    definitions.add(api1);</span></span>
<span class="line"><span>    ApiDefinition api2 = new ApiDefinition(&quot;product-api2&quot;)&quot;)</span></span>
<span class="line"><span>        .setPredicateItems(new HashSet&lt;ApiPredicateItem&gt;() {{</span></span>
<span class="line"><span>            add(new ApiPathPredicateItem().setPattern(&quot;/product-serv/product/api2/demo1&quot;));</span></span>
<span class="line"><span>        }});</span></span>
<span class="line"><span>    definitions.add(api2);</span></span>
<span class="line"><span>    GatewayApiDefinitionManager.loadApiDefinitions(definitions);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,5),o=[r];function c(d,u,m,_,b,g){return a(),n("div",null,o)}const f=s(l,[["render",c]]);export{A as __pageData,f as default};