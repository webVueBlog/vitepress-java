import{_ as s,c as a,o as n,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img_206.MKlB9HlV.png",t="/vitepress-java/assets/img_207.BytEhy8X.png",i="/vitepress-java/assets/img_208.CS72DNYY.png",l="/vitepress-java/assets/img_209.C6U93MZz.png",r="/vitepress-java/assets/img_210.CIhDK_YP.png",S=JSON.parse('{"title":"9.3-案例实战之SortedSet开发用户积分实时榜单最佳实践","description":"","frontmatter":{},"headers":[],"relativePath":"Redis6/46.md","filePath":"Redis6/46.md"}'),c={name:"Redis6/46.md"},o=e('<h1 id="_9-3-案例实战之sortedset开发用户积分实时榜单最佳实践" tabindex="-1">9.3-案例实战之SortedSet开发用户积分实时榜单最佳实践 <a class="header-anchor" href="#_9-3-案例实战之sortedset开发用户积分实时榜单最佳实践" aria-label="Permalink to &quot;9.3-案例实战之SortedSet开发用户积分实时榜单最佳实践&quot;">​</a></h1><p><img src="'+p+'" alt="img_206.png" loading="lazy"></p><p><img src="'+t+`" alt="img_207.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public boolean equals(Object o) {</span></span>
<span class="line"><span> if (this == 0) return true,</span></span>
<span class="line"><span> if (o == null || getClass() != o.getClass()) return false;</span></span>
<span class="line"><span> UserPointVO that = (UserPointVO) o;</span></span>
<span class="line"><span> return Objects.equals(username, that.username) &amp;&amp; Objects.equals(phone, that.phone);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public int hashCode() {</span></span>
<span class="line"><span> return Objects.hash(username, phone);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="`+i+'" alt="img_208.png" loading="lazy"></p><p><img src="'+l+'" alt="img_209.png" loading="lazy"></p><p><img src="'+r+'" alt="img_210.png" loading="lazy"></p>',7),m=[o];function _(d,u,b,g,h,v){return n(),a("div",null,m)}const C=s(c,[["render",_]]);export{S as __pageData,C as default};
