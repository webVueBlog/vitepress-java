import{_ as e,c as a,o as t,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const Q=JSON.parse('{"title":"了解SQL DBMS（数据库管理系统）","description":"","frontmatter":{},"headers":[],"relativePath":"MySQL/index.md","filePath":"MySQL/index.md"}'),o={name:"MySQL/index.md"},r=p('<h1 id="了解sql-dbms-数据库管理系统" tabindex="-1">了解SQL DBMS（数据库管理系统） <a class="header-anchor" href="#了解sql-dbms-数据库管理系统" aria-label="Permalink to &quot;了解SQL DBMS（数据库管理系统）&quot;">​</a></h1><p>表中每一行都应该有可以唯一标识自己的一列（或一组列）。一个顾 客表可以使用顾客编号列，而订单表可以使用订单ID，雇员表可以使用 雇员ID或雇员社会保险号。</p><p>数据库（database） 保存有组织的数据的容器（通常是一个文 件或一组文件）。</p><p>表（table） 某种特定类型数据的结构化清单。</p><p>模式（schema） 关于数据库和表的布局及特性的信息</p><p>列（column） 表中的一个字段。所有表都是由一个或多个列组 成的。</p><p>数据类型（datatype） 所容许的数据的类型。每个表列都有相 应的数据类型，它限制（或容许）该列中存储的数据。</p><p>主键（primary key）一一列（或一组列），其值能够唯一区分表 中每个行。</p><p>表中的任何列都可以作为主键，只要它满足以下条件：</p><p> 任意两行都不具有相同的主键值；  每个行都必须具有一个主键值（主键列不允许NULL值）。</p><p> 不更新主键列中的值；  不重用主键列的值；  不在主键列中使用可能会更改的值。</p><p>SQL（发音为字母S-Q-L或sequel）是<strong>结构化查询语言</strong>（Structured Query Language）的缩写。SQL是一种专门用来与数据库通信的语言。</p><h2 id="sql有如下的优点" tabindex="-1">SQL有如下的优点 <a class="header-anchor" href="#sql有如下的优点" aria-label="Permalink to &quot;SQL有如下的优点&quot;">​</a></h2><p> SQL不是某个特定数据库供应商专有的语言。几乎所有重要的 DBMS都支持SQL，所以，学习此语言使你几乎能与所有数据库 打交道。</p><p> SQL简单易学。它的语句全都是由描述性很强的英语单词组成， 而且这些单词的数目不多。</p><p> SQL尽管看上去很简单，但它实际上是一种强有力的语言，灵活 使用其语言元素，可以进行非常复杂和高级的数据库操作。</p><blockquote><p>DBMS专用的SQL SQL不是一种专利语言，而且存在一个标 准委员会，他们试图定义可供所有DBMS使用的SQL语法，但 事实上任意两个DBMS实现的SQL都不完全相同。</p></blockquote>',17),s=[r];function n(S,c,d,_,i,l){return t(),a("div",null,s)}const h=e(o,[["render",n]]);export{Q as __pageData,h as default};