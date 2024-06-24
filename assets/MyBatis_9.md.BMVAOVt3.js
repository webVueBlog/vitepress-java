import{_ as s,c as a,o as n,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const g=JSON.parse('{"title":"MyBatis中的动态SQL是什么？","description":"","frontmatter":{},"headers":[],"relativePath":"MyBatis/9.md","filePath":"MyBatis/9.md"}'),p={name:"MyBatis/9.md"},t=e(`<h1 id="mybatis中的动态sql是什么" tabindex="-1">MyBatis中的动态SQL是什么？ <a class="header-anchor" href="#mybatis中的动态sql是什么" aria-label="Permalink to &quot;MyBatis中的动态SQL是什么？&quot;">​</a></h1><p>MyBatis是一个流行的Java持久化框架，它允许你将数据库查询语句与Java代码分离，使得代码更加清晰易读。 动态SQL是MyBatis中一个强大的特性，它允许你根据不同的条件在运行时构建不同的SQL查询语句。</p><p>举个例子来说明动态SQL的概念。假设你有一个搜索页面，用户可以根据不同的条件来搜索商品，比如商品名、价格范围和分类。 使用动态SQL，你可以构建一个灵活的查询语句，只在用户提供相关条件时包含这些条件。</p><p>在MyBatis中，你可以使用<code>&lt;if&gt;</code>、<code>&lt;choose&gt;</code>、<code>&lt;when&gt;</code>、<code>&lt;otherwise&gt;</code>等标签来构建动态SQL。以下是一个简单的例子，假设你要根据用户的选择来动态构建查询语句：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;select id=&quot;searchProducts&quot; resultType=&quot;Product&quot;&gt;</span></span>
<span class="line"><span>  SELECT * FROM products</span></span>
<span class="line"><span>  &lt;where&gt;</span></span>
<span class="line"><span>    &lt;if test=&quot;productName != null&quot;&gt;</span></span>
<span class="line"><span>      AND name = #{productName}</span></span>
<span class="line"><span>    &lt;/if&gt;</span></span>
<span class="line"><span>    &lt;if test=&quot;minPrice != null&quot;&gt;</span></span>
<span class="line"><span>      AND price &gt;= #{minPrice}</span></span>
<span class="line"><span>    &lt;/if&gt;</span></span>
<span class="line"><span>    &lt;if test=&quot;maxPrice != null&quot;&gt;</span></span>
<span class="line"><span>      AND price &lt;= #{maxPrice}</span></span>
<span class="line"><span>    &lt;/if&gt;</span></span>
<span class="line"><span>    &lt;if test=&quot;category != null&quot;&gt;</span></span>
<span class="line"><span>      AND category = #{category}</span></span>
<span class="line"><span>    &lt;/if&gt;</span></span>
<span class="line"><span>  &lt;/where&gt;</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>在这个例子中，如果用户输入了商品名、价格范围或分类，对应的条件会被包含在查询语句中。 如果用户没有提供某个条件，那么相应的<code>&lt;if&gt;</code>块就会被忽略，从而构建出适合的查询语句。</p><p>动态SQL使得构建灵活的、适应不同情况的查询变得非常方便。这可以减少重复代码，提高代码的可维护性和可读性。</p>`,7),l=[t];function i(c,r,o,u,d,b){return n(),a("div",null,l)}const _=s(p,[["render",i]]);export{g as __pageData,_ as default};
