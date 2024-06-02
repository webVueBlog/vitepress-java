import{_ as n,c as a,o as s,a8 as p}from"./chunks/framework.CbRyzB36.js";const d=JSON.parse('{"title":"Tomcat 安装","description":"","frontmatter":{},"headers":[],"relativePath":"soft/Tomcat.md","filePath":"soft/Tomcat.md"}'),e={name:"soft/Tomcat.md"},l=p(`<h1 id="tomcat-安装" tabindex="-1">Tomcat 安装 <a class="header-anchor" href="#tomcat-安装" aria-label="Permalink to &quot;Tomcat 安装&quot;">​</a></h1><p>安装</p><p>安装步骤如下：</p><p>（1）下载并解压到本地</p><p>进入官网下载地址：<a href="https://tomcat.apache.org/download-80.cgi" target="_blank" rel="noreferrer">https://tomcat.apache.org/download-80.cgi</a> ，选择合适的版本下载。</p><p>我选择的是最新稳定版本 8.5.28：<a href="http://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.28/bin/apache-tomcat-8.5.28.tar.gz" target="_blank" rel="noreferrer">http://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.28/bin/apache-tomcat-8.5.28.tar.gz</a></p><p>我个人喜欢存放在：/opt/tomcat</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wget -O /opt/tomcat/apache-tomcat-8.5.28.tar.gz http://mirrors.tuna.tsinghua.edu.cn/apache/tomcat/tomcat-8/v8.5.28/bin/apache-tomcat-8.5.28.tar.gz</span></span>
<span class="line"><span>cd /opt/tomcat</span></span>
<span class="line"><span>tar zxvf apache-tomcat-8.5.28.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><p>启动 tomcat 服务</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd /opt/tomcat/apache-tomcat-8.5.28/bin</span></span>
<span class="line"><span>./catalina.sh start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="停止-tomcat-服务" tabindex="-1">停止 tomcat 服务 <a class="header-anchor" href="#停止-tomcat-服务" aria-label="Permalink to &quot;停止 tomcat 服务&quot;">​</a></h2><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd /opt/tomcat/apache-tomcat-8.5.28/bin</span></span>
<span class="line"><span>./catalina.sh stop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="tomcat8-install-sh" tabindex="-1">tomcat8-install.sh <a class="header-anchor" href="#tomcat8-install-sh" aria-label="Permalink to &quot;tomcat8-install.sh&quot;">​</a></h2><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###################################################################################</span></span>
<span class="line"><span># 控制台颜色</span></span>
<span class="line"><span>BLACK=&quot;\\033[1;30m&quot;</span></span>
<span class="line"><span>RED=&quot;\\033[1;31m&quot;</span></span>
<span class="line"><span>GREEN=&quot;\\033[1;32m&quot;</span></span>
<span class="line"><span>YELLOW=&quot;\\033[1;33m&quot;</span></span>
<span class="line"><span>BLUE=&quot;\\033[1;34m&quot;</span></span>
<span class="line"><span>PURPLE=&quot;\\033[1;35m&quot;</span></span>
<span class="line"><span>CYAN=&quot;\\033[1;36m&quot;</span></span>
<span class="line"><span>RESET=&quot;$(tput sgr0)&quot;</span></span>
<span class="line"><span>###################################################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${BLUE}&quot;</span></span>
<span class="line"><span>cat &lt;&lt; EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###################################################################################</span></span>
<span class="line"><span># 安装 Tomcat 脚本</span></span>
<span class="line"><span># @system: 适用于所有 linux 发行版本。</span></span>
<span class="line"><span>###################################################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>printf &quot;\${RESET}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; install tomcat begin.\${RESET}\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then</span></span>
<span class="line"><span>	printf &quot;\${PURPLE}[Hint]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t sh tomcat8-install.sh [version] [path]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t Example: sh tomcat8-install.sh 8.5.28 /opt/tomcat8\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\${RESET}\\n&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>version=8.5.28</span></span>
<span class="line"><span>if [[ -n $1 ]]; then</span></span>
<span class="line"><span>	version=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>path=/opt/tomcat</span></span>
<span class="line"><span>if [[ -n $2 ]]; then</span></span>
<span class="line"><span>	path=$2</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># install info</span></span>
<span class="line"><span>printf &quot;\${PURPLE}[Info]\\n&quot;</span></span>
<span class="line"><span>printf &quot;\\t version = \${version}\\n&quot;</span></span>
<span class="line"><span>printf &quot;\\t path = \${path}\\n&quot;</span></span>
<span class="line"><span>printf &quot;\${RESET}\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># download and decompression</span></span>
<span class="line"><span>mkdir -p \${path}</span></span>
<span class="line"><span>curl -o \${path}/apache-tomcat-\${version}.tar.gz https://archive.apache.org/dist/tomcat/tomcat-8/v\${version}/bin/apache-tomcat-\${version}.tar.gz</span></span>
<span class="line"><span>tar zxf \${path}/apache-tomcat-\${version}.tar.gz -C \${path}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; install tomcat end.\${RESET}\\n&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,15),t=[l];function i(r,c,o,b,u,m){return s(),a("div",null,t)}const g=n(e,[["render",i]]);export{d as __pageData,g as default};
