import{_ as s,c as a,o as n,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img_237.BHJlQcP8.png",t="/vitepress-java/assets/img_238.DydoKfe3.png",i="/vitepress-java/assets/img_239.BfkxNhTH.png",P=JSON.parse('{"title":"10.4-SpringBoot+MybatisPlus开发商品分页接口","description":"","frontmatter":{},"headers":[],"relativePath":"Redis6/51.md","filePath":"Redis6/51.md"}'),l={name:"Redis6/51.md"},r=e('<h1 id="_10-4-springboot-mybatisplus开发商品分页接口" tabindex="-1">10.4-SpringBoot+MybatisPlus开发商品分页接口 <a class="header-anchor" href="#_10-4-springboot-mybatisplus开发商品分页接口" aria-label="Permalink to &quot;10.4-SpringBoot+MybatisPlus开发商品分页接口&quot;">​</a></h1><p><img src="'+p+`" alt="img_237.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public Map&lt;String, Object&gt; page(int page, int size) {</span></span>
<span class="line"><span>    Page&lt;Product&gt; productPage = new Page&lt;&gt;(page, size);</span></span>
<span class="line"><span>    IPage&lt;Product&gt; productIPage = productMapper.selectPage(productPage, null);</span></span>
<span class="line"><span>    Map&lt;String, Object&gt; map = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>    map.put(&quot;total&quot;, productIPage.getTotal());</span></span>
<span class="line"><span>    map.put(&quot;list&quot;, productIPage.getRecords());</span></span>
<span class="line"><span>    return map;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="`+t+'" alt="img_238.png" loading="lazy"></p><p><img src="'+i+'" alt="img_239.png" loading="lazy"></p>',5),o=[r];function c(g,d,u,m,_,b){return n(),a("div",null,o)}const v=s(l,[["render",c]]);export{P as __pageData,v as default};
