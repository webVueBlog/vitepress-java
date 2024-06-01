---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Java
  text: "快速上手"
  tagline: 我的Java文档是一个 Java 核心技术教程
  image:
    src: /logo.png
    alt: Java
  actions:
    - theme: brand
      text: 开始
      link: /getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/webVueBlog/vitepress-java
    - theme: sponsor
      text: 搭建导航
      link: /nav/

features:
  - icon: 📖
    title: 后端工程师
    details: 整理知识点体系<small>（面试八股文）</small><br />如有异议按你的理解为主
    linkText: Java知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    linkText: 源码阅读
  - icon: 
      dark: /vitepress.png
      light: /vitepress-light.png
    title: 享受Vite DX
    details: 即时服务器启动，闪电般快速的热更新，并利用 Vite 生态插件。
    link: https://vitejs.cn/
    linkText: Vite
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    linkText: 提效工具
  - icon: 💡
    title: 工作日常
    details: 记录工作中一切，避免踩坑<small>（常用库/工具/奇淫技巧等）</small><br />
    linkText: 常用工作库
  - icon: 🚀
    title: 吾志所向，一往无前。
    details: 一个人可以走的很快，但是一群人却可以走的更远。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);


  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
