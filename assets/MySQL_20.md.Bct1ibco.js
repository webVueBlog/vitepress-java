import{_ as a,c as t,o as s,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const i="/vitepress-java/assets/img_108.Df8y-RpI.png",p="/vitepress-java/assets/img_109.CYerR489.png",_="/vitepress-java/assets/img_110.I91_rGKb.png",o="/vitepress-java/assets/img_111.DQvGyrdn.png",L=JSON.parse('{"title":"第 20 章 更新和删除数据","description":"","frontmatter":{},"headers":[],"relativePath":"MySQL/20.md","filePath":"MySQL/20.md"}'),n={name:"MySQL/20.md"},r=e('<h1 id="第-20-章-更新和删除数据" tabindex="-1">第 20 章 更新和删除数据 <a class="header-anchor" href="#第-20-章-更新和删除数据" aria-label="Permalink to &quot;第 20 章 更新和删除数据&quot;">​</a></h1><p>如何利用UPDATE和DELETE语句进一步操纵表数据。</p><p>为了更新（修改）表中的数据，可使用UPDATE语句。可采用两种方 式使用UPDATE：</p><ul><li>更新表中特定行；</li><li>更新表中所有行。</li><li>要更新的表；</li><li>列名和它们的新值；</li></ul><p><img src="'+i+'" alt="img_108.png" loading="lazy"></p><p><img src="'+p+'" alt="img_109.png" loading="lazy"></p><p>在UPDATE语句中使用子查询 UPDATE语句中可以使用子查 询，使得能用SELECT语句检索出的数据更新列数据。</p><p>为了删除某个列的值，可设置它为NULL（假如表定义允许NULL值）。</p><p><img src="'+_+'" alt="img_110.png" loading="lazy"></p><p>为了从一个表中删除（去掉）数据，使用DELETE语句。</p><p><img src="'+o+'" alt="img_111.png" loading="lazy"></p><blockquote><p>小心使用 MySQL没有撤销（undo）按钮。应该非常小心地 使用UPDATE和DELETE，否则你会发现自己更新或删除了错误 的数据。</p></blockquote>',12),l=[r];function c(m,g,d,E,T,D){return s(),t("div",null,l)}const h=a(n,[["render",c]]);export{L as __pageData,h as default};
