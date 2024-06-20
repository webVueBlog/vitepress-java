import{_ as n,c as s,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const v=JSON.parse('{"title":"Maven 安装","description":"","frontmatter":{},"headers":[],"relativePath":"soft/Maven.md","filePath":"soft/Maven.md"}'),e={name:"soft/Maven.md"},l=p(`<h1 id="maven-安装" tabindex="-1">Maven 安装 <a class="header-anchor" href="#maven-安装" aria-label="Permalink to &quot;Maven 安装&quot;">​</a></h1><p>安装方法</p><p>安装步骤如下：</p><p>（1）下载</p><p>进入官网下载地址：<a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">https://maven.apache.org/download.cgi</a> ，选择合适的版本下载。</p><p>我选择的是最新 Maven3 版本：<a href="http://mirrors.hust.edu.cn/apache/maven/maven-3/3.5.2/binaries/apache-maven-3.5.2-bin.tar.gz" target="_blank" rel="noreferrer">http://mirrors.hust.edu.cn/apache/maven/maven-3/3.5.2/binaries/apache-maven-3.5.2-bin.tar.gz</a></p><p>（2）解压到本地</p><p>我个人喜欢存放在：/opt/maven</p><p>（3）设置环境变量</p><p>输入 vi /etc/profile ，添加环境变量如下：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># MAVEN 的根路径</span></span>
<span class="line"><span>export MAVEN_HOME=/opt/maven/apache-maven-3.5.2</span></span>
<span class="line"><span>export PATH=\\$MAVEN_HOME/bin:\\$PATH</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>执行 source /etc/profile ，立即生效</p><p>（4）检验是否安装成功，执行 mvn -v 命令</p><h1 id="脚本" tabindex="-1">脚本 <a class="header-anchor" href="#脚本" aria-label="Permalink to &quot;脚本&quot;">​</a></h1><p>以上两种安装方式，我都写了脚本去执行：maven-install.sh</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
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
<span class="line"><span># 安装 Maven3 脚本</span></span>
<span class="line"><span># Maven 会被安装到 /opt/maven 路径。</span></span>
<span class="line"><span># @system: 适用于所有 linux 发行版本。</span></span>
<span class="line"><span># 注意：Maven 要求必须先安装 JDK</span></span>
<span class="line"><span>###################################################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>printf &quot;\${RESET}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; install maven begin.\${RESET}\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>command -v java &gt; /dev/null 2&gt;&amp;1 || {</span></span>
<span class="line"><span>	printf &quot;\${RED}Require java but it&#39;s not installed.\${RESET}\\n&quot;;</span></span>
<span class="line"><span>	exit 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then</span></span>
<span class="line"><span>	printf &quot;\${PURPLE}[Hint]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t sh maven-install.sh [version] [path]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t Example: sh maven-install.sh 3.6.0 /opt/maven\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\${RESET}\\n&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>version=3.5.4</span></span>
<span class="line"><span>if [[ -n $1 ]]; then</span></span>
<span class="line"><span>	version=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>path=/opt/maven</span></span>
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
<span class="line"><span>wget --no-check-certificate --no-cookies --header &quot;Cookie: oraclelicense=accept-securebackup-cookie&quot; -O \${path}/apache-maven-\${version}-bin.tar.gz http://apache.01link.hk/maven/maven-3/\${version}/binaries/apache-maven-\${version}-bin.tar.gz</span></span>
<span class="line"><span>tar -zxvf \${path}/apache-maven-\${version}-bin.tar.gz -C \${path}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># setting env</span></span>
<span class="line"><span>path=\${path}/apache-maven-\${version}</span></span>
<span class="line"><span>cat &gt;&gt; /etc/profile &lt;&lt; EOF</span></span>
<span class="line"><span>export MAVEN_HOME=\${path}</span></span>
<span class="line"><span>export PATH=\\$MAVEN_HOME/bin:\\$PATH</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>source /etc/profile</span></span>
<span class="line"><span></span></span>
<span class="line"><span># replace mirrors in settings.xml</span></span>
<span class="line"><span>echo -e &quot;\\n&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; replace \${path}/conf/settings.xml&quot;</span></span>
<span class="line"><span>cp \${path}/conf/settings.xml \${path}/conf/settings.xml.bak</span></span>
<span class="line"><span>wget -N https://gitee.com/turnon/linux-tutorial/raw/master/codes/linux/soft/config/settings-aliyun.xml -O \${path}/conf/settings.xml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; install maven end.\${RESET}\\n&quot;</span></span>
<span class="line"><span>mvn -v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div>`,16),i=[l];function r(t,c,b,u,o,m){return a(),s("div",null,i)}const d=n(e,[["render",r]]);export{v as __pageData,d as default};
