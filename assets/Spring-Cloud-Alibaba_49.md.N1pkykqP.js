import{_ as a,c as i,o as s,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const t="/vitepress-java/assets/img_491.uWjQ8oJf.png",n="/vitepress-java/assets/img_492.yI_WBbyO.png",e="/vitepress-java/assets/img_493.2yqVW_9Q.png",_="/vitepress-java/assets/img_494.Dy5jYqmG.png",g="/vitepress-java/assets/img_495.2c9S72FH.png",o="/vitepress-java/assets/img_496.DxD4c955.png",r="/vitepress-java/assets/img_497.BwPibCJo.png",l="/vitepress-java/assets/img_498.Ba_L6kye.png",m="/vitepress-java/assets/img_499.DYDpZCfn.png",c="/vitepress-java/assets/img_500.CHdsbGNF.png",d="/vitepress-java/assets/img_501.CBJaS1Kr.png",v="/vitepress-java/assets/img_502.C5VQ3jRT.png",h="/vitepress-java/assets/img_503.BeotlWvh.png",P=JSON.parse('{"title":"49-Zipkin介绍和使用","description":"","frontmatter":{},"headers":[],"relativePath":"Spring-Cloud-Alibaba/49.md","filePath":"Spring-Cloud-Alibaba/49.md"}'),k={name:"Spring-Cloud-Alibaba/49.md"},z=p('<h1 id="_49-zipkin介绍和使用" tabindex="-1">49-Zipkin介绍和使用 <a class="header-anchor" href="#_49-zipkin介绍和使用" aria-label="Permalink to &quot;49-Zipkin介绍和使用&quot;">​</a></h1><p><img src="'+t+'" alt="img_491.png" loading="lazy"></p><h2 id="_1-什么是zipkin" tabindex="-1">1. 什么是Zipkin <a class="header-anchor" href="#_1-什么是zipkin" aria-label="Permalink to &quot;1. 什么是Zipkin&quot;">​</a></h2><p>Zipkin是一个分布式跟踪系统。它有助于收集解决微服务架构中的延迟问题所需的时序数据。它管理这些数据的收集和查找，为理解和优化微服务架构中的延迟问题提供支持。</p><h2 id="_2-为什么需要zipkin" tabindex="-1">2. 为什么需要Zipkin <a class="header-anchor" href="#_2-为什么需要zipkin" aria-label="Permalink to &quot;2. 为什么需要Zipkin&quot;">​</a></h2><p>在微服务架构中，一个服务通常会调用多个其他服务，如下图所示：</p><p>如果某个服务调用失败，我们很难说失败是由哪个服务引起的，因为每个服务都可能会调用其他服务。</p><p><img src="'+n+'" alt="img_492.png" loading="lazy"></p><p><img src="'+e+'" alt="img_493.png" loading="lazy"></p><p><img src="'+_+'" alt="img_494.png" loading="lazy"></p><p><img src="'+g+'" alt="img_495.png" loading="lazy"></p><p><img src="'+o+'" alt="img_496.png" loading="lazy"></p><p><img src="'+r+'" alt="img_497.png" loading="lazy"></p><p><img src="'+l+'" alt="img_498.png" loading="lazy"></p><p><img src="'+m+'" alt="img_499.png" loading="lazy"></p><p><img src="'+c+'" alt="img_500.png" loading="lazy"></p><p><img src="'+d+'" alt="img_501.png" loading="lazy"></p><p><img src="'+v+'" alt="img_502.png" loading="lazy"></p><p><img src="'+h+'" alt="img_503.png" loading="lazy"></p>',19),y=[z];function j(b,u,f,C,S,Z){return s(),i("div",null,y)}const x=a(k,[["render",j]]);export{P as __pageData,x as default};