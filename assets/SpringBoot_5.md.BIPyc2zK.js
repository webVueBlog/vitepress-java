import{_ as t,c as a,o as e,l as o,a as n}from"./chunks/framework.DDO5B0CJ.js";const b=JSON.parse('{"title":"为什么SpringBoot的jar可以直接运行？","description":"","frontmatter":{},"headers":[],"relativePath":"SpringBoot/5.md","filePath":"SpringBoot/5.md"}'),r={name:"SpringBoot/5.md"},s=o("h1",{id:"为什么springboot的jar可以直接运行",tabindex:"-1"},[n("为什么SpringBoot的jar可以直接运行？ "),o("a",{class:"header-anchor",href:"#为什么springboot的jar可以直接运行","aria-label":'Permalink to "为什么SpringBoot的jar可以直接运行？"'},"​")],-1),i=o("p",null,"Spring Boot的可执行JAR文件之所以可以直接运行，原因如下：",-1),p=o("p",null,"第一个关键点： Spring Boot提供了一个Maven插件（spring-boot-maven-plugin），用于将应用程序打包成可执行的JAR文件。通过执行mvn clean package等命令，可以轻松生成可执行JAR。",-1),c=o("p",null,'第二个关键点： 打包生成的JAR文件通常是"Fat JAR"或"Uber JAR"，这意味着它包含了应用程序的所有依赖项，包括第三方库和Spring Boot框架本身。这样，JAR文件就成了一个自包含的单一文件。',-1),l=o("p",null,"第三个关键点： JAR文件包含一个名为MANIFEST.MF的清单文件，其中包含了关于JAR文件的元数据信息。其中，主要的信息是Main-Class，它指定了启动应用程序的主类。",-1),_=o("p",null,"第四个关键点： Spring Boot的可执行JAR文件通常由JarLauncher类启动。JarLauncher负责创建一个类加载器（LaunchedURLClassLoader），加载boot-lib目录下的JAR文件，包括Spring Boot loader相关的类。然后，它在一个新线程中启动应用程序的Main方法，实现应用程序的启动。、",-1),d=o("p",null,"第五个关键点：当执行Main方法最终会加载Spring容器、进而创建内嵌Tomcat进行阻塞线程使我们jar包完成web应用的启动",-1),h=[s,i,p,c,l,_,d];function g(u,B,J,S,m,A){return e(),a("div",null,h)}const f=t(r,[["render",g]]);export{b as __pageData,f as default};
