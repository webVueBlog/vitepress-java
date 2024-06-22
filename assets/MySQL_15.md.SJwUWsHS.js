import{_ as t,c as p,o as s,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const a="/vitepress-java/assets/img_81.F6Q-_jqV.png",o="/vitepress-java/assets/img_82.DNkZ2IVP.png",i="/vitepress-java/assets/img_83.CysLgHYq.png",_="/vitepress-java/assets/img_84.COuH2QD0.png",c="/vitepress-java/assets/img_85.DwPLmkqT.png",b=JSON.parse('{"title":"第 15 章 联 结 表","description":"","frontmatter":{},"headers":[],"relativePath":"MySQL/15.md","filePath":"MySQL/15.md"}'),n={name:"MySQL/15.md"},l=e('<h1 id="第-15-章-联-结-表" tabindex="-1">第 15 章 联 结 表 <a class="header-anchor" href="#第-15-章-联-结-表" aria-label="Permalink to &quot;第 15 章 联 结 表&quot;">​</a></h1><p>联结</p><p>SQL最强大的功能之一就是能在数据检索查询的执行中联结（join） 表。</p><p>关键是，相同数据出现多次决不是一件好事，此因素是关系数据库 设计的基础。关系表的设计就是要保证把信息分解成多个表，一类数据 一个表。各表通过某些常用的值互 相关联</p><p>外键（foreign key） 外键为某个表中的一列，它包含另一个表 的主键值，定义了两个表之间的关系。</p><p>可伸缩性（scale） 能够适应不断增加的工作量而不失败。设 计良好的数据库或应用程序称之为可伸缩性好（scale well）。</p><blockquote><p>如果数据存储在多个表中，怎样用单条SELECT语句检索出数据？</p></blockquote><p>答案是使用联结。</p><p>联结是一种机制，用来在一条SELECT 语句中关联表，因此称之为联结。使用特殊的语法，可以联结多个表返 回一组输出，联结在运行时关联表中正确的行。</p><p>创建联结</p><p><img src="'+a+'" alt="img_81.png" loading="lazy"></p><blockquote><p>完全限定列名 在引用的列可能出现二义性时，必须使用完 全限定列名（用一个点分隔的表名和列名）。如果引用一个 没有用表名限制的具有二义性的列名，MySQL将返回错误。</p></blockquote><blockquote><p>不要忘了WHERE子句 应该保证所有联结都有WHERE子句，否 则MySQL将返回比想要的数据多得多的数据。同理，应该保 证WHERE子句的正确性。不正确的过滤条件将导致MySQL返回 不正确的数据</p></blockquote><blockquote><p>叉联结 有时我们会听到返回称为叉联结（cross join）的笛卡 儿积的联结类型。</p></blockquote><p><img src="'+o+'" alt="img_82.png" loading="lazy"></p><p>联结多个表</p><p><img src="'+i+'" alt="img_83.png" loading="lazy"></p><blockquote><p>性能考虑 MySQL在运行时关联指定的每个表以处理联结。 这种处理可能是非常耗费资源的，因此应该仔细，不要联结 不必要的表。联结的表越多，性能下降越厉害。</p></blockquote><p><img src="'+_+'" alt="img_84.png" loading="lazy"></p><p><img src="'+c+'" alt="img_85.png" loading="lazy"></p>',20),r=[l];function g(m,d,u,k,q,S){return s(),p("div",null,r)}const v=t(n,[["render",g]]);export{b as __pageData,v as default};