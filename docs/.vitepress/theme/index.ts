import DefaultTheme from 'vitepress/theme'
import './style/index.css' 

// @ts-ignore
import Video from './components/Video.vue'
// @ts-ignore
import MNavLinks from './components/MNavLinks.vue'
// @ts-ignore
import Navlink from './components/Navlink.vue'

import { h } from 'vue'
import { useData , useRoute } from 'vitepress'

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';

import giscusTalk from 'vitepress-plugin-comment-with-giscus';


export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    // 注册全局组件
    app.component('Video' , Video)
    app.component('MNavLinks' , MNavLinks)
    app.component('Navlink' , Navlink)
  },

  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
  
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // Get frontmatter and route
    const { frontmatter } = useData();


    // giscus配置
    giscusTalk({
      repo: 'webVueBlog/vitepress-java', //仓库
      repoId: 'R_kgDOL_Xo1w', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOL_Xo184CfnjL', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

  },

}