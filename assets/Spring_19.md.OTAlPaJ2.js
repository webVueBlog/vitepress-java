import{_ as e,c as t,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const l=JSON.parse('{"title":"JDK动态代理和CGLIB动态代理的区别","description":"","frontmatter":{},"headers":[],"relativePath":"Spring/19.md","filePath":"Spring/19.md"}'),r={name:"Spring/19.md"},o=p('<h1 id="jdk动态代理和cglib动态代理的区别" tabindex="-1">JDK动态代理和CGLIB动态代理的区别 <a class="header-anchor" href="#jdk动态代理和cglib动态代理的区别" aria-label="Permalink to &quot;JDK动态代理和CGLIB动态代理的区别&quot;">​</a></h1><p>从性能上特性对比：</p><p>JDK动态代理要求目标对象必须实现至少一个接口，因为它基于接口生成代理类。 而CGLIB动态代理不依赖于目标对象是否实现接口，可以代理没有实现接口的类，它通过继承或者代理目标对象的父类来实现代理。</p><p>从创建代理时的性能对比：</p><p>JDK动态代理通常比CGLIB动态代理创建速度更快，因为它不需要生成字节码文件。 而CGLIB动态代理的创建速度通常比较慢，因为它需要生成字节码文件。另外，JDK代理生成的代理类较小，占用较少的内存，而CGLIB生成的代理类通常较大，占用更多的内存。</p><p>从调用时的性能对比：</p><p>JDK动态代理在方法调用时需要通过反射机制来调用目标方法，因此性能略低于CGLIB， 尽管JDK动态代理在Java 8中有了性能改进，但CGLIB动态代理仍然具有更高的方法调用性能。CGLIB动态代理在方法调用时不需要通过反射， 直接调用目标方法，通常具有更高的方法调用性能，同时无需类型转换。</p><p>选择使用JDK动态代理还是CGLIB动态代理取决于具体需求。如果目标对象已经实现了接口， 并且您更关注创建性能和内存占用，那么JDK动态代理可能是一个不错的选择。如果目标对象没有实现接口，或者您更关注方法调用性能， 那么CGLIB动态代理可能更合适。综上所述，这两种代理方式各有优势，根据实际情况进行选择是明智的，<br> Spring默认情况如果目标类实现了接口用JDK代理否则用CGLIB。</p><p>而SpringBoot默认用CGLIB，所以用哪个问题都不大。</p>',9),_=[o];function n(i,c,s,d,B,C){return a(),t("div",null,_)}const G=e(r,[["render",n]]);export{l as __pageData,G as default};