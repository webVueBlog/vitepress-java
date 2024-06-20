import{_ as n,c as s,o as a,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const h=JSON.parse('{"title":"RocketMQ 安装部署","description":"","frontmatter":{},"headers":[],"relativePath":"soft/RocketMQ.md","filePath":"soft/RocketMQ.md"}'),p={name:"soft/RocketMQ.md"},l=e(`<h1 id="rocketmq-安装部署" tabindex="-1">RocketMQ 安装部署 <a class="header-anchor" href="#rocketmq-安装部署" aria-label="Permalink to &quot;RocketMQ 安装部署&quot;">​</a></h1><h2 id="环境要求" tabindex="-1">环境要求 <a class="header-anchor" href="#环境要求" aria-label="Permalink to &quot;环境要求&quot;">​</a></h2><ol><li>推荐 64 位操作系统：Linux/Unix/Mac</li><li>64bit JDK 1.8+</li><li>Maven 3.2.x</li><li>Git</li></ol><h2 id="下载解压" tabindex="-1">下载解压 <a class="header-anchor" href="#下载解压" aria-label="Permalink to &quot;下载解压&quot;">​</a></h2><p>进入官方下载地址：<a href="https://rocketmq.apache.org/dowloading/releases/%EF%BC%8C%E9%80%89%E6%8B%A9%E5%90%88%E9%80%82%E7%89%88%E6%9C%AC" target="_blank" rel="noreferrer">https://rocketmq.apache.org/dowloading/releases/，选择合适版本</a></p><p>建议选择 binary 版本。</p><p>解压到本地：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; unzip rocketmq-all-4.2.0-source-release.zip</span></span>
<span class="line"><span>&gt; cd rocketmq-all-4.2.0/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="启动-name-server" tabindex="-1">启动 Name Server <a class="header-anchor" href="#启动-name-server" aria-label="Permalink to &quot;启动 Name Server&quot;">​</a></h2><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; nohup sh bin/mqnamesrv &amp;</span></span>
<span class="line"><span>&gt; tail -f ~/logs/rocketmqlogs/namesrv.log</span></span>
<span class="line"><span>The Name Server boot success...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="启动-broker" tabindex="-1">启动 Broker <a class="header-anchor" href="#启动-broker" aria-label="Permalink to &quot;启动 Broker&quot;">​</a></h2><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; nohup sh bin/mqbroker -n localhost:9876 -c conf/broker.conf &amp;</span></span>
<span class="line"><span>&gt; tail -f ~/logs/rocketmqlogs/broker.log</span></span>
<span class="line"><span>The broker[%s, 172.30.30.233:10911] boot success...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="收发消息" tabindex="-1">收发消息 <a class="header-anchor" href="#收发消息" aria-label="Permalink to &quot;收发消息&quot;">​</a></h2><p>执行收发消息操作之前，不许告诉客户端命名服务器的位置。在 RocketMQ 中有多种方法来实现这个目的。这里，我们使用最简单的方法——设置环境变量 NAMESRV_ADDR ：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; export NAMESRV_ADDR=localhost:9876</span></span>
<span class="line"><span>&gt; sh bin/tools.sh org.apache.rocketmq.example.quickstart.Producer</span></span>
<span class="line"><span>SendResult [sendStatus=SEND_OK, msgId= ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; sh bin/tools.sh org.apache.rocketmq.example.quickstart.Consumer</span></span>
<span class="line"><span>ConsumeMessageThread_%d Receive New Messages: [MessageExt...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="关闭服务器" tabindex="-1">关闭服务器 <a class="header-anchor" href="#关闭服务器" aria-label="Permalink to &quot;关闭服务器&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; sh bin/mqshutdown broker</span></span>
<span class="line"><span>The mqbroker(36695) is running...</span></span>
<span class="line"><span>Send shutdown request to mqbroker(36695) OK</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; sh bin/mqshutdown namesrv</span></span>
<span class="line"><span>The mqnamesrv(36664) is running...</span></span>
<span class="line"><span>Send shutdown request to mqnamesrv(36664) OK</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h2><h3 id="connect-to-172-17-0-1-10909-failed" tabindex="-1">connect to &lt;172.17.0.1:10909&gt; failed <a class="header-anchor" href="#connect-to-172-17-0-1-10909-failed" aria-label="Permalink to &quot;connect to &lt;172.17.0.1:10909&gt; failed&quot;">​</a></h3><p>启动后，生产者客户端连接 RocketMQ 时报错：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>org.apache.rocketmq.remoting.exception.RemotingConnectException: connect to &lt;172.17.0.1:10909&gt; failed</span></span>
<span class="line"><span>    at org.apache.rocketmq.remoting.netty.NettyRemotingClient.invokeSync(NettyRemotingClient.java:357)</span></span>
<span class="line"><span>    at org.apache.rocketmq.client.impl.MQClientAPIImpl.sendMessageSync(MQClientAPIImpl.java:343)</span></span>
<span class="line"><span>    at org.apache.rocketmq.client.impl.MQClientAPIImpl.sendMessage(MQClientAPIImpl.java:327)</span></span>
<span class="line"><span>    at org.apache.rocketmq.client.impl.MQClientAPIImpl.sendMessage(MQClientAPIImpl.java:290)</span></span>
<span class="line"><span>    at org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl.sendKernelImpl(DefaultMQProducerImpl.java:688)</span></span>
<span class="line"><span>    at org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl.sendSelectImpl(DefaultMQProducerImpl.java:901)</span></span>
<span class="line"><span>    at org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl.send(DefaultMQProducerImpl.java:878)</span></span>
<span class="line"><span>    at org.apache.rocketmq.client.impl.producer.DefaultMQProducerImpl.send(DefaultMQProducerImpl.java:873)</span></span>
<span class="line"><span>    at org.apache.rocketmq.client.producer.DefaultMQProducer.send(DefaultMQProducer.java:369)</span></span>
<span class="line"><span>    at com.emrubik.uc.mdm.sync.utils.MdmInit.sendMessage(MdmInit.java:62)</span></span>
<span class="line"><span>    at com.emrubik.uc.mdm.sync.utils.MdmInit.main(MdmInit.java:2149)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>原因：RocketMQ 部署在虚拟机上，内网 ip 为 10.10.30.63，该虚拟机一个 docker0 网卡，ip 为 172.17.0.1。RocketMQ broker 启动时默认使用了 docker0 网卡，生产者客户端无法连接 172.17.0.1，造成以上问题。</p><p>解决方案</p><p>（1）干掉 docker0 网卡或修改网卡名称</p><p>（2）停掉 broker，修改 broker 配置文件，重启 broker。</p><p>修改 conf/broker.conf，增加两行来指定启动 broker 的 IP：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>namesrvAddr = 10.10.30.63:9876</span></span>
<span class="line"><span>brokerIP1 = 10.10.30.63</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>启动时需要指定配置文件</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nohup sh bin/mqbroker -n localhost:9876 -c conf/broker.conf &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="rocketmq-install-sh" tabindex="-1">rocketmq-install.sh <a class="header-anchor" href="#rocketmq-install-sh" aria-label="Permalink to &quot;rocketmq-install.sh&quot;">​</a></h2><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
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
<span class="line"><span># 安装 rocketmq 脚本</span></span>
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
<span class="line"><span>	printf &quot;\\t sh rocketmq-install.sh [version] [path]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t Example: sh rocketmq-install.sh 4.5.0 /opt/rocketmq\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\${RESET}\\n&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>version=4.5.0</span></span>
<span class="line"><span>if [[ -n $1 ]]; then</span></span>
<span class="line"><span>	version=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>path=/opt/rocketmq</span></span>
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
<span class="line"><span>curl -o \${path}/rocketmq-all-\${version}-bin-release.zip http://mirrors.tuna.tsinghua.edu.cn/apache/rocketmq/\${version}/rocketmq-all-\${version}-bin-release.zip</span></span>
<span class="line"><span>unzip -o \${path}/rocketmq-all-\${version}-bin-release.zip -d \${path}/rocketmq-all-\${version}/</span></span>
<span class="line"><span>mv \${path}/rocketmq-all-\${version}/rocketmq-all-\${version}-bin-release/* \${path}/rocketmq-all-\${version}</span></span>
<span class="line"><span>rm -rf \${path}/rocketmq-all-\${version}/rocketmq-all-\${version}-bin-release</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; install rocketmq end.\${RESET}\\n&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,31),r=[l];function i(t,c,o,u,b,m){return a(),s("div",null,r)}const g=n(p,[["render",i]]);export{h as __pageData,g as default};
