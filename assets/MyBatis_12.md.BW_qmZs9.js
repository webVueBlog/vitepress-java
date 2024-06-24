import{_ as e,c as a,o as s,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const m=JSON.parse('{"title":"#{}和${}的区别是什么？","description":"","frontmatter":{},"headers":[],"relativePath":"MyBatis/12.md","filePath":"MyBatis/12.md"}'),t={name:"MyBatis/12.md"},d=p('<h1 id="和-的区别是什么" tabindex="-1">#{}和${}的区别是什么？ <a class="header-anchor" href="#和-的区别是什么" aria-label="Permalink to &quot;#{}和${}的区别是什么？&quot;">​</a></h1><p>在MyBatis中，#{}和${}都是用于参数替换的标记，用于将参数值插入到SQL语句中。然而，它们在处理参数值的方式上有一些重要的区别。</p><p><code>#{}（预编译）</code>:</p><p><code>#{}</code>是用于预编译的参数标记。当使用#{}时，MyBatis会将参数值放入一个预编译的PreparedStatement中，并确保参数值被正确地转义和引用，从而防止SQL注入攻击。</p><p><code>#{}</code>适用于大多数情况，尤其是当参数值是从用户输入中获得时，因为它提供了更好的安全性和可靠性。</p><p>示例：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>SELECT * FROM users WHERE id = #{userId}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>${}（字符串替换）</code>:</p><p><code>${}</code>是用于字符串替换的参数标记。当使用${}时，MyBatis会直接将参数值嵌入到SQL语句中，不会进行预编译或转义。 这可能导致潜在的安全问题，如果不正确地处理参数值，可能会导致SQL注入攻击。</p><p><code>${}</code>适用于一些特殊情况，例如在动态表名、列名或函数调用等情况下，但要谨慎使用，确保参数值的安全性。</p><p>示例：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>SELECT * FROM ${tableName} WHERE id = ${userId}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>总结区别：</p><p><code>#{}</code>用于预编译，提供参数安全性，适合大多数情况。</p><p><code>${}</code>用于字符串替换，潜在安全风险较高，仅在特定情况下使用，确保参数值安全。</p><p>在实际使用中，推荐优先使用#{}来处理参数，以确保数据库操作的安全性和可靠性。只有在确保参数值不会引发安全问题的情况下，才应该考虑使用${}。</p>',16),i=[d];function n(o,c,r,l,u,_){return s(),a("div",null,i)}const b=e(t,[["render",n]]);export{m as __pageData,b as default};
