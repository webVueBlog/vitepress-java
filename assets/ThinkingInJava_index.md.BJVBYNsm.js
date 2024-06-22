import{_ as a,c as n,o as e,a8 as i}from"./chunks/framework.DDO5B0CJ.js";const m=JSON.parse('{"title":"《Thinking In Java》中文版(点击查阅)","description":"","frontmatter":{},"headers":[],"relativePath":"ThinkingInJava/index.md","filePath":"ThinkingInJava/index.md"}'),h={name:"ThinkingInJava/index.md"},t=i('<h1 id="《thinking-in-java》中文版-点击查阅" tabindex="-1">《Thinking In Java》中文版(点击查阅) <a class="header-anchor" href="#《thinking-in-java》中文版-点击查阅" aria-label="Permalink to &quot;《Thinking In Java》中文版(点击查阅)&quot;">​</a></h1><h2 id="第-1-章-对象入门" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/1.html">第 1 章 对象入门</a> <a class="header-anchor" href="#第-1-章-对象入门" aria-label="Permalink to &quot;[第 1 章 对象入门](/ThinkingInJava/1.md)&quot;">​</a></h2><p>面向对象的程序设计（OOP ）的一个综述，其中包括对“什么是对象”之类的基本问题的回答，并 讲述了接口与实现、抽象与封装、消息与函数、继承与合成以及非常重要的多形性的概念。</p><h2 id="第-2-章-一切都是对象" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/2.html">第 2 章 一切都是对象</a> <a class="header-anchor" href="#第-2-章-一切都是对象" aria-label="Permalink to &quot;[第 2 章 一切都是对象](/ThinkingInJava/2.md)&quot;">​</a></h2><p>怎样创建一个对象；对基本数据类型和数组的一个介绍；作用域以及垃圾收集器清除对 象的方式；如何将 Java 中的所有东西都归为一种新数据类型（类），以及如何创建自己的类；函数、自变量 以及返回值；名字的可见度以及使用来自其他库的组件；static关键字；注释和嵌入文档等等。</p><h2 id="第-3-章-控制程序流程" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/3.html">第 3 章 控制程序流程</a> <a class="header-anchor" href="#第-3-章-控制程序流程" aria-label="Permalink to &quot;[第 3 章 控制程序流程](/ThinkingInJava/3.md)&quot;">​</a></h2><p>用if-else实现选择；用 for和while实现循环；用 break和 continue 以及Java 的标签式break和contiune（它们被认为是Java 中“不见的 gogo”）退出循环；以及用 switch 实现另一种形式的选择。</p><h2 id="第-4-章-初始化和清除" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/4.html">第 4 章 初始化和清除</a> <a class="header-anchor" href="#第-4-章-初始化和清除" aria-label="Permalink to &quot;[第 4 章 初始化和清除](/ThinkingInJava/4.md)&quot;">​</a></h2><p>用完一个对象后，通常 可以不必管它，垃圾收集器会自动介入，释放由它占据的内存。</p><h2 id="第-5-章-隐藏实施过程" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/5.html">第 5 章 隐藏实施过程</a> <a class="header-anchor" href="#第-5-章-隐藏实施过程" aria-label="Permalink to &quot;[第 5 章 隐藏实施过程](/ThinkingInJava/5.md)&quot;">​</a></h2><p>将代码封装到一起的方式，以及在库的其他部分隐藏时，为什么仍有一部分处于暴露状态。首先 要讨论的是 package和 import关键字，它们的作用是进行文件级的封装（打包）操作，并允许我们构建由类 构成的库（类库）。此时也会谈到目录路径和文件名的问题。</p><h2 id="第-6-章-类再生" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/6.html">第 6 章 类再生</a> <a class="header-anchor" href="#第-6-章-类再生" aria-label="Permalink to &quot;[第 6 章 类再生](/ThinkingInJava/6.md)&quot;">​</a></h2><p>继承的概念是几乎所有 OOP 语言中都占有重要的地位。它是对现有类加以利用，并为其添加新功能的一种有 效途径</p><p>通过继承来重复使用原有的代码时（再生），一般需要保 持“基础类”不变，只是将这儿或那儿的东西串联起来，以达到预期的效果。然而，继承并不是在现有类基 础上制造新类的唯一手段。通过“合成”，亦可将一个对象嵌入新类。</p><h2 id="第-7-章-多形性" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/7.html">第 7 章 多形性</a> <a class="header-anchor" href="#第-7-章-多形性" aria-label="Permalink to &quot;[第 7 章 多形性](/ThinkingInJava/7.md)&quot;">​</a></h2><p>若由你自己来干，可能要花9个月的时间才能发现和理解多形性的问题，这一特性实际是 OOP 一个重要的基 础。通过一些小的、简单的例子，读者可知道如何通过继承来创建一系列类型，并通过它们共有的基础类对 那个系列中的对象进行操作。通过 Java 的多形性概念，同一系列中的所有对象都具有了共通性。这意味着我 们编写的代码不必再依赖特定的类型信息。这使程序更易扩展，包容力也更强。由此，程序的构建和代码的 维护可以变得更方便，付出的代价也会更低。此外，Java 还通过“接口”提供了设置再生关系的第三种途 径。这儿所谓的“接口”是对对象物理“接口”一种纯粹的抽象。一旦理解了多形性的概念，接口的含义就 很容易解释了。</p><h2 id="第-8-章-对象的容纳" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/8.html">第 8 章 对象的容纳</a> <a class="header-anchor" href="#第-8-章-对象的容纳" aria-label="Permalink to &quot;[第 8 章 对象的容纳](/ThinkingInJava/8.md)&quot;">​</a></h2><p>对一个非常简单的程序来说，它可能只拥有一个固定数量的对象，而且对象的“生存时间”或者“存在时 间”是已知的。但是通常，我们的程序会在不定的时间创建新对象，只有在程序运行时才可了解到它们的详 情。此外，除非进入运行期，否则无法知道所需对象的数量，甚至无法得知它们确切的类型。为解决这个常 见的程序设计问题，我们需要拥有一种能力，可在任何时间、任何地点创建任何数量的对象。</p><h2 id="第-9-章-违例差错控制" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/9.html">第 9 章 违例差错控制</a> <a class="header-anchor" href="#第-9-章-违例差错控制" aria-label="Permalink to &quot;[第 9 章 违例差错控制](/ThinkingInJava/9.md)&quot;">​</a></h2><p>解释try、catch、throw、throws以及finally等关键字在 Java中的工作 原理。</p><h2 id="第-1-0-章-java-io-系统" tabindex="-1"><a href="/vitepress-java/ThinkingInJava/10.html">第 1 0 章 Java IO 系统</a> <a class="header-anchor" href="#第-1-0-章-java-io-系统" aria-label="Permalink to &quot;[第 1 0 章 Java IO 系统](/ThinkingInJava/10.md)&quot;">​</a></h2><p>理论上，我们可将任何程序分割为三部分：输入、处理和输出。这意味着 IO （输入／输出）是所有程序最为关键的部分。</p>',22),r=[t];function o(l,s,d,v,c,p){return e(),n("div",null,r)}const J=a(h,[["render",o]]);export{m as __pageData,J as default};