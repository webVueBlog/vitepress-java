import{_ as a,c as o,o as t,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const B=JSON.parse('{"title":"SpringBoot为什么默认使用CGLIB","description":"","frontmatter":{},"headers":[],"relativePath":"SpringBoot/9.md","filePath":"SpringBoot/9.md"}'),r={name:"SpringBoot/9.md"},i=e('<h1 id="springboot为什么默认使用cglib" tabindex="-1">SpringBoot为什么默认使用CGLIB <a class="header-anchor" href="#springboot为什么默认使用cglib" aria-label="Permalink to &quot;SpringBoot为什么默认使用CGLIB&quot;">​</a></h1><p>SpringBoot默认使用CGLIB 原因如下：</p><h2 id="无需接口" tabindex="-1">无需接口： <a class="header-anchor" href="#无需接口" aria-label="Permalink to &quot;无需接口：&quot;">​</a></h2><p>CGLIB能够代理那些没有实现接口的类，而JDK动态代理只能代理实现了接口的类。这使得Spring Boot可以更灵活地使用代理，而无需依赖于接口。</p><h2 id="aop支持" tabindex="-1">AOP支持： <a class="header-anchor" href="#aop支持" aria-label="Permalink to &quot;AOP支持：&quot;">​</a></h2><p>Spring Boot广泛使用AOP（面向切面编程）来处理日志、事务、安全性等横切关注点。CGLIB更适合创建AOP代理， 因为它可以代理普通的类而不仅仅是接口，在开发中如果通过反射获得代理目标方法的注解，如果用JDK动态代理将导致无法获取。</p><h2 id="可以代理本类方法" tabindex="-1">可以代理本类方法： <a class="header-anchor" href="#可以代理本类方法" aria-label="Permalink to &quot;可以代理本类方法：&quot;">​</a></h2><p>这意味着即使在同一个类中调用了另一个方法，仍然可以触发代理的行为。 这对于某些特定的AOP需求非常有用，因为它允许您在同一类中的方法之间应用切面。这种能力被称为&quot;自我调用&quot;或&quot;内部调用&quot;的代理。</p><h2 id="方法调用性能" tabindex="-1">方法调用性能： <a class="header-anchor" href="#方法调用性能" aria-label="Permalink to &quot;方法调用性能：&quot;">​</a></h2><p>一旦代理对象创建完成，实际的方法调用性能可能会因代理方式而异。</p><p>在JDK 1.8之后，JDK动态代理的方法调用性能相对较好，但CGLIB仍然可能更快， 因为CGlib是直接调用父类方法即目标方法，无需像JDK代理还要通过反射进行内部方法栈调用才能到目标方法。</p>',11),n=[i];function p(s,l,c,h,d,_){return t(),o("div",null,n)}const b=a(r,[["render",p]]);export{B as __pageData,b as default};