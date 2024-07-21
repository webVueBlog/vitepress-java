import{_ as s,c as a,o as n,a8 as e,l as p}from"./chunks/framework.DDO5B0CJ.js";const g=JSON.parse('{"title":"echarts + echarts-gl - 使用geo3d + map3d + scatter3D做3d地图","description":"","frontmatter":{},"headers":[],"relativePath":"CSS/3.md","filePath":"CSS/3.md"}'),l={name:"CSS/3.md"},r=e(`<h1 id="echarts-echarts-gl-使用geo3d-map3d-scatter3d做3d地图" tabindex="-1">echarts + echarts-gl - 使用geo3d + map3d + scatter3D做3d地图 <a class="header-anchor" href="#echarts-echarts-gl-使用geo3d-map3d-scatter3d做3d地图" aria-label="Permalink to &quot;echarts + echarts-gl - 使用geo3d + map3d + scatter3D做3d地图&quot;">​</a></h1><p>echarts@5.2.2、echarts-gl@2.0.8、jquery;jquery 是使用ajax加载json文件的。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// javascript引入示例</span></span>
<span class="line"><span>&lt;script src=&quot;echarts.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script src=&quot;map/js/china.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>var chart = echarts.init(document.getElementById(&#39;main&#39;));</span></span>
<span class="line"><span>chart.setOption({</span></span>
<span class="line"><span>    series: [{</span></span>
<span class="line"><span>        type: &#39;map&#39;,</span></span>
<span class="line"><span>        map: &#39;china&#39;</span></span>
<span class="line"><span>    }]</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// json引入示例</span></span>
<span class="line"><span>$.get(&#39;map/json/china.json&#39;, function (chinaJson) {</span></span>
<span class="line"><span>    echarts.registerMap(&#39;china&#39;, chinaJson);</span></span>
<span class="line"><span>    var chart = echarts.init(document.getElementById(&#39;main&#39;));</span></span>
<span class="line"><span>    chart.setOption({</span></span>
<span class="line"><span>        series: [{</span></span>
<span class="line"><span>            type: &#39;map&#39;,</span></span>
<span class="line"><span>            map: &#39;china&#39;</span></span>
<span class="line"><span>        }]</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><br>`,4),t=p("iframe",{id:"iframe",height:"600",width:"100%",frameborder:"0",allowfullscreen:"true",src:"/vitepress-java/demo/map3d.html"},null,-1),c=[r,t];function i(m,o,b,d,h,u){return n(),a("div",null,c)}const f=s(l,[["render",i]]);export{g as __pageData,f as default};
