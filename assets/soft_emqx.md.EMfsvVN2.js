import{_ as s,c as n,o as a,a8 as e}from"./chunks/framework.CbRyzB36.js";const h=JSON.parse('{"title":"EMQX Docker安装","description":"","frontmatter":{},"headers":[],"relativePath":"soft/emqx.md","filePath":"soft/emqx.md"}'),p={name:"soft/emqx.md"},l=e(`<h1 id="emqx-docker安装" tabindex="-1">EMQX Docker安装 <a class="header-anchor" href="#emqx-docker安装" aria-label="Permalink to &quot;EMQX Docker安装&quot;">​</a></h1><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h2><p>通过 Docker 运行单个 EMQX 节点</p><p>以前往 EMQX 下载页面。<a href="https://www.emqx.com/zh/try?product=enterprise" target="_blank" rel="noreferrer">https://www.emqx.com/zh/try?product=enterprise</a></p><p>运行以下命令获取 Docker 镜像：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker pull emqx/emqx:5.7.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>运行以下命令启动 Docker 容器。</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -d --name emqx -p 1883:1883 -p 8083:8083 -p 8084:8084 -p 8883:8883 -p 18083:18083 emqx/emqx:5.7.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="docker-部署注意事项" tabindex="-1">Docker 部署注意事项 <a class="header-anchor" href="#docker-部署注意事项" aria-label="Permalink to &quot;Docker 部署注意事项&quot;">​</a></h2><p>如果需要持久 Docker 容器 ，请将以下目录挂载到容器外部，这样即使容器被删除数据也不会丢失：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>/opt/emqx/data</span></span>
<span class="line"><span>/opt/emqx/log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>启动容器并挂载目录：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker run -d --name emqx \\</span></span>
<span class="line"><span>  -p 1883:1883 -p 8083:8083 \\</span></span>
<span class="line"><span>  -p 8084:8084 -p 8883:8883 \\</span></span>
<span class="line"><span>  -p 18083:18083 \\</span></span>
<span class="line"><span>  -v $PWD/data:/opt/emqx/data \\</span></span>
<span class="line"><span>  -v $PWD/log:/opt/emqx/log \\</span></span>
<span class="line"><span>  emqx/emqx:5.7.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Docker 内的 localhost 或 127.0.0.1 指向的是容器内部地址，如需访问宿主机地址请使用宿主机的真实 IP 或使用 host 网络模式。 如果您使用的是 Docker for Mac 或 Docker for Windows，可以使用 host.docker.internal 作为宿主机地址。</p><p>由于 EMQX 使用 <code>data/mnesia/&lt;节点名&gt;</code> 作为数据存储目录，请使用 hostname 或者 FQDN 等固定的信息作为节点名，避免因为节点名称变动导致数据丢失。</p><h2 id="通过-docker-compose-构建-emqx-集群" tabindex="-1">通过 Docker Compose 构建 EMQX 集群 <a class="header-anchor" href="#通过-docker-compose-构建-emqx-集群" aria-label="Permalink to &quot;通过 Docker Compose 构建 EMQX 集群&quot;">​</a></h2><p>Docker Compose 是一个用于编排和运行多容器的工具，下面将指导您通过 Docker Compose 创建简单的 EMQX 静态集群用于测试。</p><p>在任意目录创建 docker-compose.yml 文件，内容如下：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>version: &#39;3&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  emqx1:</span></span>
<span class="line"><span>    image: emqx:5.7.0</span></span>
<span class="line"><span>    container_name: emqx1</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>    - &quot;EMQX_NODE_NAME=emqx@node1.emqx.io&quot;</span></span>
<span class="line"><span>    - &quot;EMQX_CLUSTER__DISCOVERY_STRATEGY=static&quot;</span></span>
<span class="line"><span>    - &quot;EMQX_CLUSTER__STATIC__SEEDS=[emqx@node1.emqx.io,emqx@node2.emqx.io]&quot;</span></span>
<span class="line"><span>    healthcheck:</span></span>
<span class="line"><span>      test: [&quot;CMD&quot;, &quot;/opt/emqx/bin/emqx&quot;, &quot;ctl&quot;, &quot;status&quot;]</span></span>
<span class="line"><span>      interval: 5s</span></span>
<span class="line"><span>      timeout: 25s</span></span>
<span class="line"><span>      retries: 5</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      emqx-bridge:</span></span>
<span class="line"><span>        aliases:</span></span>
<span class="line"><span>        - node1.emqx.io</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 1883:1883</span></span>
<span class="line"><span>      - 8083:8083</span></span>
<span class="line"><span>      - 8084:8084</span></span>
<span class="line"><span>      - 8883:8883</span></span>
<span class="line"><span>      - 18083:18083 </span></span>
<span class="line"><span>    # volumes:</span></span>
<span class="line"><span>    #   - $PWD/emqx1_data:/opt/emqx/data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  emqx2:</span></span>
<span class="line"><span>    image: emqx:5.7.0</span></span>
<span class="line"><span>    container_name: emqx2</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>    - &quot;EMQX_NODE_NAME=emqx@node2.emqx.io&quot;</span></span>
<span class="line"><span>    - &quot;EMQX_CLUSTER__DISCOVERY_STRATEGY=static&quot;</span></span>
<span class="line"><span>    - &quot;EMQX_CLUSTER__STATIC__SEEDS=[emqx@node1.emqx.io,emqx@node2.emqx.io]&quot;</span></span>
<span class="line"><span>    healthcheck:</span></span>
<span class="line"><span>      test: [&quot;CMD&quot;, &quot;/opt/emqx/bin/emqx&quot;, &quot;ctl&quot;, &quot;status&quot;]</span></span>
<span class="line"><span>      interval: 5s</span></span>
<span class="line"><span>      timeout: 25s</span></span>
<span class="line"><span>      retries: 5</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      emqx-bridge:</span></span>
<span class="line"><span>        aliases:</span></span>
<span class="line"><span>        - node2.emqx.io</span></span>
<span class="line"><span>    # volumes:</span></span>
<span class="line"><span>    #   - $PWD/emqx2_data:/opt/emqx/data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  emqx-bridge:</span></span>
<span class="line"><span>    driver: bridge</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><p>通过命令行切换 docker-compose.yml 文件所在目录，然后输入以下命令启动 EMQX 集群：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看集群状态</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker exec -it emqx1 sh -c &quot;emqx ctl cluster status&quot;</span></span>
<span class="line"><span>Cluster status: #{running_nodes =&gt; [&#39;emqx@node1.emqx.com&#39;,&#39;emqx@node2.emqx.com&#39;],</span></span>
<span class="line"><span>                  stopped_nodes =&gt; []}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,23),r=[l];function i(c,t,o,m,u,b){return a(),n("div",null,r)}const q=s(p,[["render",i]]);export{h as __pageData,q as default};
