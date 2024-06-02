import{_ as n,c as s,o as a,a8 as p}from"./chunks/framework.CbRyzB36.js";const h=JSON.parse('{"title":"Nodejs 安装","description":"","frontmatter":{},"headers":[],"relativePath":"soft/Nodejs.md","filePath":"soft/Nodejs.md"}'),e={name:"soft/Nodejs.md"},l=p(`<h1 id="nodejs-安装" tabindex="-1">Nodejs 安装 <a class="header-anchor" href="#nodejs-安装" aria-label="Permalink to &quot;Nodejs 安装&quot;">​</a></h1><p>安装方法</p><h2 id="先安装-nvm" tabindex="-1">先安装 nvm <a class="header-anchor" href="#先安装-nvm" aria-label="Permalink to &quot;先安装 nvm&quot;">​</a></h2><p>推荐安装 nvm(Node Version Manager) ，来管理 node.js 版本。</p><p>安装步骤如下：</p><p>（1）执行安装脚本</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>rm -rf ~/.nvm</span></span>
<span class="line"><span>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash</span></span>
<span class="line"><span>. ~/.nvm/nvm.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>（2）检验是否安装成功</p><p>执行 nvm --version 命令。</p><p>注意：如果出现 nvm: command not found ，关闭终端，然后再打开终端试试。</p><h2 id="安装-nodejs" tabindex="-1">安装 Nodejs <a class="header-anchor" href="#安装-nodejs" aria-label="Permalink to &quot;安装 Nodejs&quot;">​</a></h2><p>安装步骤如下：</p><p>（1）使用 nvm 安装 nodejs 指定版本</p><p>执行以下命令：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nvm install 8.9.4</span></span>
<span class="line"><span>nvm use 8.9.4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>（2）检验是否安装成功</p><p>执行 node --version 命令。</p><p>注意：如果出现 node: command not found ，关闭终端，然后再打开终端试试。</p><h2 id="nodejs-install-sh" tabindex="-1">nodejs-install.sh <a class="header-anchor" href="#nodejs-install-sh" aria-label="Permalink to &quot;nodejs-install.sh&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
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
<span class="line"><span># 通过 nvm 安装 Nodejs 脚本</span></span>
<span class="line"><span># @system: 适用于所有 linux 发行版本。</span></span>
<span class="line"><span>###################################################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>printf &quot;\${RESET}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; install nodejs begin.\${RESET}\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then</span></span>
<span class="line"><span>	printf &quot;\${PURPLE}[Hint]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t sh nodejs-install.sh [version]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t Example: sh nodejs-install.sh 10.15.2\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\${RESET}\\n&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>version=10.15.2</span></span>
<span class="line"><span>if [[ -n $1 ]]; then</span></span>
<span class="line"><span>	version=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span># install info</span></span>
<span class="line"><span>printf &quot;\${PURPLE}[Info]\\n&quot;</span></span>
<span class="line"><span>printf &quot;\\t version = \${version}\\n&quot;</span></span>
<span class="line"><span>printf &quot;\${RESET}\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># install nvm</span></span>
<span class="line"><span>printf &quot;\${GREEN}&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; install nvm.\${RESET}\\n&quot;</span></span>
<span class="line"><span>rm -rf ~/.nvm</span></span>
<span class="line"><span>mkdir -p ~/.nvm</span></span>
<span class="line"><span>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash</span></span>
<span class="line"><span>. ~/.nvm/nvm.sh</span></span>
<span class="line"><span>nvm --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; install nodejs by nvm.\${RESET}\\n&quot;</span></span>
<span class="line"><span>nvm install \${version}</span></span>
<span class="line"><span>nvm use \${version}</span></span>
<span class="line"><span>node --version</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; install nodejs end.\${RESET}\\n&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div>`,21),i=[l];function r(t,c,o,u,b,m){return a(),s("div",null,i)}const v=n(e,[["render",r]]);export{h as __pageData,v as default};
