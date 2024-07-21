import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_461.DyaqEg96.png",l="/vitepress-java/assets/img_462.D0bZXPZM.png",i="/vitepress-java/assets/img_463.CqWUfKCa.png",r="/vitepress-java/assets/img_464.DwgoWMii.png",c="/vitepress-java/assets/img_465.vE7zEJ_x.png",t="/vitepress-java/assets/img_466.BBcMdC4y.png",b="/vitepress-java/assets/img_467.BqwIRrFL.png",m="/vitepress-java/assets/img_468.CFtupy8s.png",o="/vitepress-java/assets/img_469.YhIddEY3.png",u="/vitepress-java/assets/img_470.z3au6yF2.png",g="/vitepress-java/assets/img_471.RdJu1iDI.png",d="/vitepress-java/assets/img_472.DQQvJqNr.png",_="/vitepress-java/assets/img_473.ooJ5PeQ1.png",v="/vitepress-java/assets/img_474.B7Z5kyCX.png",y="/vitepress-java/assets/img_475.DBSx4Bnx.png",G=JSON.parse('{"title":"44-网关限流-路由维度","description":"","frontmatter":{},"headers":[],"relativePath":"Spring-Cloud-Alibaba/44.md","filePath":"Spring-Cloud-Alibaba/44.md"}'),h={name:"Spring-Cloud-Alibaba/44.md"},w=p('<h1 id="_44-网关限流-路由维度" tabindex="-1">44-网关限流-路由维度 <a class="header-anchor" href="#_44-网关限流-路由维度" aria-label="Permalink to &quot;44-网关限流-路由维度&quot;">​</a></h1><p><img src="'+e+'" alt="img_461.png" loading="lazy"></p><p><img src="'+l+'" alt="img_462.png" loading="lazy"></p><p><img src="'+i+'" alt="img_463.png" loading="lazy"></p><p><img src="'+r+'" alt="img_464.png" loading="lazy"></p><p><img src="'+c+'" alt="img_465.png" loading="lazy"></p><p><img src="'+t+'" alt="img_466.png" loading="lazy"></p><p><img src="'+b+'" alt="img_467.png" loading="lazy"></p><p><img src="'+m+'" alt="img_468.png" loading="lazy"></p><p><img src="'+o+'" alt="img_469.png" loading="lazy"></p><p><img src="'+u+'" alt="img_470.png" loading="lazy"></p><p><img src="'+g+'" alt="img_471.png" loading="lazy"></p><p><img src="'+d+'" alt="img_472.png" loading="lazy"></p><p><img src="'+_+'" alt="img_473.png" loading="lazy"></p><p><img src="'+v+`" alt="img_474.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 初始化一个限流的过滤器</span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>@Order(Ordered.HIGHEST_PRECEDENCE)// 设置过滤器优先级</span></span>
<span class="line"><span>public GlobalFilter sentinelGatewayFilter() {</span></span>
<span class="line"><span>    return new SentinelGatewayFilter();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 配置初始化的限流参数</span></span>
<span class="line"><span>public void initGatewayRules() {</span></span>
<span class="line"><span>    Set&lt;GatewayFlowRule&gt; rules = new HashSet&lt;&gt;();</span></span>
<span class="line"><span>    rules.add(new GatewayFlowRule(&quot;order-service&quot;) // 针对某个路由进行限流</span></span>
<span class="line"><span>            .setCount(10) // 限流阈值</span></span>
<span class="line"><span>            .setIntervalSec(10)); // 统计时间窗口，单位是秒，默认是1秒</span></span>
<span class="line"><span>    GatewayRuleManager.loadRules(rules);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 配置限流异常处理器</span></span>
<span class="line"><span>@Bean</span></span>
<span class="line"><span>@Order(Ordered.HIGHEST_PRECEDENCE)</span></span>
<span class="line"><span>public SentinelGatewayBlockExceptionHandler sentinelGatewayBlockExceptionHandler() {</span></span>
<span class="line"><span>    return new SentinelGatewayBlockExceptionHandler(viewResolver, serverCodecConfigurer);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>  port: 10010</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  application: # 应用名称</span></span>
<span class="line"><span>    name: gateway # 应用名称</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  cloud:</span></span>
<span class="line"><span>    nacos:</span></span>
<span class="line"><span>      discovery:</span></span>
<span class="line"><span>        server-addr: localhost:8848 # nacos地址</span></span>
<span class="line"><span>    gateway:</span></span>
<span class="line"><span>      discovery: # 开启从nacos中获取服务列表的能力</span></span>
<span class="line"><span>        locator:</span></span>
<span class="line"><span>          enabled: true # 开启从nacos中获取服务列表的能力</span></span>
<span class="line"><span>      routes:</span></span>
<span class="line"><span>        - id: order-service # 路由的ID，没有固定规则但要求唯一，建议配合服务名</span></span>
<span class="line"><span>          uri: lb://order-service # 路由的目标地址，lb表示从nacos中获取服务列表</span></span>
<span class="line"><span>          predicates: # 断言，判断请求是否符合要求，符合则进行路由</span></span>
<span class="line"><span>            - Path=/order/**</span></span>
<span class="line"><span>          filters:</span></span>
<span class="line"><span>            - StripPrefix=1        </span></span>
<span class="line"><span>    sentinel:</span></span>
<span class="line"><span>      transport:</span></span>
<span class="line"><span>        dashboard: localhost:8080</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>management:</span></span>
<span class="line"><span>  endpoints:</span></span>
<span class="line"><span>    web:</span></span>
<span class="line"><span>      exposure:</span></span>
<span class="line"><span>        include: &#39;*&#39;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>logging:</span></span>
<span class="line"><span>  level:</span></span>
<span class="line"><span>    com.alibaba.csp: debug</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>eureka:</span></span>
<span class="line"><span>  client:</span></span>
<span class="line"><span>    service-url:</span></span>
<span class="line"><span>      defaultZone: http://localhost:8761/eureka</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>feign:</span></span>
<span class="line"><span>  sentinel:</span></span>
<span class="line"><span>    enabled: true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p><img src="`+y+'" alt="img_475.png" loading="lazy"></p>',18),C=[w];function E(S,z,f,j,k,B){return a(),n("div",null,C)}const D=s(h,[["render",E]]);export{G as __pageData,D as default};
