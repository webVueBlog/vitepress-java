import { defineConfig } from 'vitepress'

//命令集：pnpm add -D vitepress vue less sass @mdit-vue/shared vitepress-markdown-timeline medium-zoom vitepress-plugin-comment-with-giscus

import timeline from "vitepress-markdown-timeline"; 

export default defineConfig({
  ignoreDeadLinks: true,
  lang: 'zh-CN',
  title: "Java",
  description: "我的Java文档是一个 Java 核心技术教程。",

  // #region fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  // #endregion fav

  base: '/vitepress-java/', //网站部署到github

  //cleanUrls:true, //开启纯净链接无html

  //启用深色模式
  appearance:'dark',

  //多语言
  // locales: {
  //   root: {
  //     label: '简体中文',
  //     lang: 'Zh_CN',
  //   },
  //   en: {
  //     label: 'English',
  //     lang: 'en',
  //     link: '/en/',
  //   },
  //   fr: {
  //     label: 'French',
  //     lang: 'fr',
  //     link: '/fr/',
  //   }
  // },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true, 

    //时间线 
    config: (md) => {
      // @ts-ignore
      md.use(timeline);
    },

    // 开启图片懒加载
    image: {
      lazyLoading: true
    },

  },

  //主题配置
  themeConfig: {
    //左上角logo
    //logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '软件安装配置',
        items: [
          {
            text: '开发环境',
            items: [
              {text: 'JDK 安装', link: '/soft/JDK'},
              {text: 'Maven 安装', link: '/soft/Maven'},
              {text: 'Nodejs 安装', link: '/soft/Nodejs'},
            ],
          },
          {
            text: '开发工具',
            items: [
              {text: 'Nexus 运维', link: '/soft/Nexus'},
              {text: 'Gitlab 运维', link: '/soft/Gitlab'},
              {text: 'Jenkins 运维', link: '/soft/Jenkins'},
              {text: 'Svn 运维', link: '/soft/Svn'},
              {text: 'YApi 运维', link: '/soft/YApi'},
            ],
          },
          {
            text: '中间件服务',
            items: [
              {text: 'Elastic 运维', link: '/soft/Elastic'},
              {text: 'RocketMQ 运维', link: '/soft/RocketMQ'},
              {text: 'Nacos 运维', link: '/soft/Nacos'},
            ],
          },
          {
            text: '服务器',
            items: [
              {text: 'Tomcat 运维', link: '/soft/Tomcat'},
            ],
          },
          {
            text: '大数据服务',
            items: [
              {text: 'Kafka 运维', link: '/soft/Kafka'},
            ],
          },
        ],
      },
      {
        text: '日志',
        items: [
          {
            text: 'Nginx 极简教程',
            items: [
              {text: 'Nginx 快速教程', link: '/nginx-tutorial/nginx-quickstart'},
              {text: 'Nginx 运维', link: '/nginx-tutorial/nginx-ops'},
              {text: 'Nginx 配置', link: '/nginx-tutorial/nginx-configuration'},
              {text: 'Nginx 问题', link: '/nginx-tutorial/nginx-faq'},
            ],
          },
        ],
      },
      // {
      //   text: '🍉指南',
      //   items: [
      //     {
      //       // 分组标题1
      //       text: '介绍',
      //       items: [
      //         { text: '前言', link: '/preface' },
      //       ],
      //     },
      //     {
      //       // 分组标题2
      //       text: '基础设置',
      //       items: [
      //         { text: '快速上手', link: '/getting-started' },
      //         { text: '配置', link: '/configuration' },
      //         { text: '页面', link: '/page' },
      //         { text: 'Frontmatter', link: '/frontmatter' },
      //       ],
      //     },
      //     {
      //       // 分组标题3
      //       text: '进阶玩法',
      //       items: [
      //         { text: 'Markdown', link: '/markdown' },
      //         { text: '团队', link: '/team' },
      //         { text: '静态部署', link: '/assets' },
      //         { text: '样式美化', link: '/style' },
      //         { text: '组件', link: '/components' },
      //         { text: '布局插槽', link: '/layout' },
      //         { text: '插件', link: '/plugin' },
      //         { text: '更新及卸载', link: '/update' },
      //         { text: '搭建导航', link: '/nav/' },
      //       ],
      //     },
      //   ],
      // },
      // { text: 'VitePress', link: 'https://vitepress.dev/zh/',noIcon: true },
      {
        text: '1.0.0',
        items: [
          { text: '更新日志', link: '/changelog.md' },
        ],
      },
    ],


    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: '介绍',
        collapsed: false,
        items: [
          { text: '其他博客框架', link: '/preface' },
        ],
      },
      {
        //分组标题2
        text: 'Java 基础',
        collapsed: false,
        items: [
          { text: '一、数据类型', link: '/java/data-types' },
          { text: '二、String', link: '/java/string' },
          { text: '三、运算', link: '/java/by' },
          { text: '四、关键字', link: '/java/key-value' },
          { text: '五、Object 通用方法', link: '/java/Object' },
          { text: '六、继承', link: '/java/extend' },
          { text: '七、反射', link: '/java/reflection' },
          { text: '八、异常', link: '/java/exception' },
          { text: '九、泛型', link: '/java/T' },
          { text: '十、注解', link: '/java/annotation' },
          { text: '十一、特性', link: '/java/Inference' }
        ],
      },
      // {
      //   //分组标题3
      //   text: '进阶玩法',
      //   collapsed: false,
      //   items: [
      //     { text: 'Markdown', link: '/markdown' },
      //     { text: '团队', link: '/team' },
      //     { text: '静态部署', link: '/assets' },
      //     { text: '样式美化', link: '/style' },
      //     { text: '组件', link: '/components' },
      //     { text: '布局插槽', link: '/layout' },
      //     { text: '插件', link: '/plugin' },
      //     { text: '更新及卸载', link: '/update' },
      //     { text: '搭建导航', link: '/nav/' },
      //   ],
      // },
      // {
      //   //分组标题3
      //   text: '其他站点',
      //   collapsed: false,
      //   items: [
      //     { text: 'VuePress', link: 'https://vuepress.yiov.top/' },
      //     { text: '劝学录教程', link: 'https://yiov.top/' },
      //     { text: '个人主页', link: 'https://yingyayi.com/' },
      //   ],
      // },
    ],

    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

    //社交链接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/xxx/doc' },
      // { icon: 'twitter', link: 'https://twitter.com/' },
      // { icon: 'discord', link: 'https://chat.vitejs.dev/' },
      {
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
        },
        link: 'https://weixin.qq.com/',
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: 'wechat'
      }
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    //页脚
    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present Jeskson',
    },

    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',

    //大纲显示2-3级标题
    outline: {
      level: [2,3],
      label: '当前页大纲'
    },

    //编辑本页
    //editLink: {
    //  pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
    //  text: '在GitHub编辑本页'
    //},

    //自定义上下页名
    docFooter: {
      prev: '上一页', 
      next: '下一页', 
    },

  },

})
