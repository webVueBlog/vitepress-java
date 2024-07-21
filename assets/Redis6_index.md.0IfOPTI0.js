import{_ as n,c as s,o as a,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img.CFO4M_Iu.png",i="/vitepress-java/assets/img_1.CwMmEoq4.png",c="/vitepress-java/assets/img_2.Blv9sK7H.png",l="/vitepress-java/assets/img_3.B8fi8YzA.png",C=JSON.parse('{"title":"全方位Redis6.x之战超多案例","description":"","frontmatter":{},"headers":[],"relativePath":"Redis6/index.md","filePath":"Redis6/index.md"}'),r={name:"Redis6/index.md"},t=e('<h1 id="全方位redis6-x之战超多案例" tabindex="-1">全方位Redis6.x之战超多案例 <a class="header-anchor" href="#全方位redis6-x之战超多案例" aria-label="Permalink to &quot;全方位Redis6.x之战超多案例&quot;">​</a></h1><p><img src="'+p+'" alt="img.png" loading="lazy"></p><p><img src="'+i+`" alt="img_1.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//1分钟</span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>public RedisCacheManager cacheManager1Minute(RedisConnectionFactory connectionFactory) {</span></span>
<span class="line"><span>    RedisCacheConfiguration config = instanceConfig(60L);</span></span>
<span class="line"><span>    return RedisCacheManager.builder(connectionFactory).cacheDefaults(config).transactionAware(true).build();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//1小时</span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>@Primary</span></span>
<span class="line"><span>public RedisCacheManager cacheManager1Hour(RedisConnectionFactory connectionFactory) {</span></span>
<span class="line"><span>    RedisCacheConfiguration config = instanceConfig(3600L);</span></span>
<span class="line"><span>    return RedisCacheManager.builder(connectionFactory).cacheDefaults(config).transactionAware(true).build();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//1天过期</span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>public RedisCacheManager cacheManager1Day(RedisConnectionFactory connectionFactory) {</span></span>
<span class="line"><span>    RedisCacheConfiguration config = instanceConfig(3600 * 24L);</span></span>
<span class="line"><span>    return RedisCacheManager.builder(connectionFactory).cacheDefaults(config).transactionAware(true).build();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p><img src="`+c+'" alt="img_2.png" loading="lazy"></p><p><img src="'+l+'" alt="img_3.png" loading="lazy"></p>',6),o=[t];function d(u,b,m,g,_,h){return a(),s("div",null,o)}const R=n(r,[["render",d]]);export{C as __pageData,R as default};
