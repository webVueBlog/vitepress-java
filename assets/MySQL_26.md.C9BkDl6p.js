import{_ as a,c as s,o as t,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const i="/vitepress-java/assets/img_134.C5DbD2Mh.png",p="/vitepress-java/assets/img_128.C_H2_car.png",n="/vitepress-java/assets/img_129.DzTE9fQf.png",o="/vitepress-java/assets/img_130.BsuhjtiF.png",r="/vitepress-java/assets/img_131.DDNV6d7v.png",l="/vitepress-java/assets/img_132.DaG21Bme.png",c="/vitepress-java/assets/img_133.Ck5GB4E3.png",y=JSON.parse('{"title":"第 26 章 管理事务处理","description":"","frontmatter":{},"headers":[],"relativePath":"MySQL/26.md","filePath":"MySQL/26.md"}'),m={name:"MySQL/26.md"},_=e('<h1 id="第-26-章-管理事务处理" tabindex="-1">第 26 章 管理事务处理 <a class="header-anchor" href="#第-26-章-管理事务处理" aria-label="Permalink to &quot;第 26 章 管理事务处理&quot;">​</a></h1><p>什么是事务处理以及如何利用COMMIT和ROLLBACK语句来管 理事务处理。</p><p>事务处理（transaction processing）可以用来维护数据库的完整性，它 保证成批的MySQL操作要么完全执行，要么完全不执行。</p><h2 id="使用commit" tabindex="-1">使用COMMIT <a class="header-anchor" href="#使用commit" aria-label="Permalink to &quot;使用COMMIT&quot;">​</a></h2><p><img src="'+i+'" alt="img_134.png" loading="lazy"></p><p>事务（transaction）指一组SQL语句；</p><p>回退（rollback）指撤销指定SQL语句的过程；</p><p>提交（commit）指将未存储的SQL语句结果写入数据库表；</p><p>保留点（savepoint）指事务处理中设置的临时占位符（placeholder），你可以对它发布回退（与回退整个事务处理不同）。</p><p><img src="'+p+'" alt="img_128.png" loading="lazy"></p><p>start transaction</p><h2 id="使用rollback" tabindex="-1">使用ROLLBACK <a class="header-anchor" href="#使用rollback" aria-label="Permalink to &quot;使用ROLLBACK&quot;">​</a></h2><p><img src="'+n+'" alt="img_129.png" loading="lazy"></p><p><img src="'+o+'" alt="img_130.png" loading="lazy"></p><p>一般的MySQL语句都是直接针对数据库表执行和编写的。这就是 所谓的隐含提交（implicit commit），即提交（写或保存）操作是自动 进行的。</p><p>但是，在事务处理块中，提交不会隐含地进行。为进行明确的提交， 使用COMMIT语句，如下所示：</p><p><img src="'+r+'" alt="img_131.png" loading="lazy"></p><p>为了支持回退部分事务处理，必须能在事务处理块中合适的位置放 置占位符。这样，如果需要回退，可以回退到某个占位符。 这些占位符称为保留点。</p><p><img src="'+l+'" alt="img_132.png" loading="lazy"></p><p><img src="'+c+'" alt="img_133.png" loading="lazy"></p><p>释放保留点 保留点在事务处理完成（执行一条ROLLBACK或 COMMIT）后自动释放。自MySQL 5以来，也可以用RELEASE SAVEPOINT明确地释放保留点。</p><p>为指示MySQL不自动提交更改，需要使用以下语句：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>set autocommit=0;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',23),g=[_];function d(h,u,v,L,b,M){return t(),s("div",null,g)}const C=a(m,[["render",d]]);export{y as __pageData,C as default};
