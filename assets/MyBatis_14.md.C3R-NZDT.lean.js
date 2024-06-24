import{_ as a,c as s,o as e,l as t,a as o}from"./chunks/framework.DDO5B0CJ.js";const f=JSON.parse('{"title":"为什么说 Mybatis 是半ORM 映射工具？","description":"","frontmatter":{},"headers":[],"relativePath":"MyBatis/14.md","filePath":"MyBatis/14.md"}'),i={name:"MyBatis/14.md"},n=t("h1",{id:"为什么说-mybatis-是半orm-映射工具",tabindex:"-1"},[o("为什么说 Mybatis 是半ORM 映射工具？ "),t("a",{class:"header-anchor",href:"#为什么说-mybatis-是半orm-映射工具","aria-label":'Permalink to "为什么说 Mybatis 是半ORM 映射工具？"'},"​")],-1),r=t("p",null,"首先，Mybatis被称为半ORM框架是因为它在数据库操作方面提供了一些对象关系映射的功能，但相对于全ORM框架，它更加灵活和轻量级。 在Mybatis中，我们需要手动编写SQL来执行数据库操作，这跟传统的JDBC方式有点类似。 但是，Mybatis通过映射文件来实现Java对象与数据库表之间的映射，这就是它的ORM特性。",-1),c=t("p",null,"区别的话，全ORM框架通常更加自动化，它会完全代替你来生成SQL语句，进行数据库操作。 这在某些情况下能够提高开发效率，因为你不需要写太多的SQL代码。但是，全ORM框架也可能在性能方面略有影响，因为它们可能会生成复杂的SQL语句，导致查询效率下降。",-1),_=t("p",null,"相比之下，Mybatis更加灵活，你可以精确地控制要执行的SQL语句，这对于需要优化查询性能的场景很有帮助。 另外，Mybatis在映射文件中可以明确指定每个字段的映射关系，这样你能更好地控制数据库表和Java对象之间的对应关系。",-1),M=t("p",null,"最后再来总结一下，Mybatis被称为半ORM框架，是因为它结合了ORM的部分特性，但相对于全ORM框架，更注重灵活性和精确控制。 在选择使用哪种方式时，需要根据具体的项目需求和性能要求来考虑。",-1),l=[n,r,c,_,M];function d(p,h,m,y,b,O){return e(),s("div",null,l)}const u=a(i,[["render",d]]);export{f as __pageData,u as default};
