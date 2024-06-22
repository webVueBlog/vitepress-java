import{_ as e,c as i,o as n,a8 as a}from"./chunks/framework.DDO5B0CJ.js";const S=JSON.parse('{"title":"Spring是如何解决Bean的循环依赖？","description":"","frontmatter":{},"headers":[],"relativePath":"Spring/21.md","filePath":"Spring/21.md"}'),l={name:"Spring/21.md"},t=a('<h1 id="spring是如何解决bean的循环依赖" tabindex="-1">Spring是如何解决Bean的循环依赖？ <a class="header-anchor" href="#spring是如何解决bean的循环依赖" aria-label="Permalink to &quot;Spring是如何解决Bean的循环依赖？&quot;">​</a></h1><p>Spring是如何解决的循环依赖： 采用三级缓存解决的 就是三个Map ； 关键： 一定要有一个缓存保存它的早期对象作为死循环的出口</p><ul><li>1、一级缓存singletonObjects存放可以使用的单例。</li><li>2、二级缓存earlySingletonObjects存放的是早期的bean，即半成品，此时还无法使用。</li><li>3、三级缓存singletonFactories是一个对象工厂，用于创建对象并放入二级缓存中。同时，如果对象有Aop代理，则对象工厂返回代理对象。</li></ul><p>面试官还可能问：</p><p>二级缓存能不能解决循环依赖？</p><ul><li>如果只是循环依赖导致的死循环的问题： 一级缓存就可以解决 ，但是解决在并发下获取不完整的Bean。</li><li>二级缓存完全解决循环依赖： 只是需要在实例化后就创建动态代理，不优化也不符合spring生命周期规范。</li></ul><p>Spring有没有解决多例Bean的循环依赖？</p><ul><li>多例不会使用缓存进行存储（多例Bean每次使用都需要重新创建）</li><li>不缓存早期对象就无法解决循环</li></ul><p>Spring有没有解决构造函数参数Bean的循环依赖？</p><ul><li>构造函数的循环依赖也是会报错</li><li>可以通过人工进行解决：<code>@Lazy</code></li></ul><p>就不会立即创建依赖的bean了</p><p>而是等到用到才通过动态代理进行创建</p>',12),p=[t];function r(o,s,_,c,d,g){return n(),i("div",null,p)}const h=e(l,[["render",r]]);export{S as __pageData,h as default};