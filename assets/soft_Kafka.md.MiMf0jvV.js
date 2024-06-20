import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const h=JSON.parse('{"title":"Kafka 安装部署","description":"","frontmatter":{},"headers":[],"relativePath":"soft/Kafka.md","filePath":"soft/Kafka.md"}'),e={name:"soft/Kafka.md"},l=p(`<h1 id="kafka-安装部署" tabindex="-1">Kafka 安装部署 <a class="header-anchor" href="#kafka-安装部署" aria-label="Permalink to &quot;Kafka 安装部署&quot;">​</a></h1><p>环境要求：</p><p>JDK8</p><p>ZooKeeper</p><h2 id="下载解压" tabindex="-1">下载解压 <a class="header-anchor" href="#下载解压" aria-label="Permalink to &quot;下载解压&quot;">​</a></h2><p>进入官方下载地址：<a href="http://kafka.apache.org/downloads%EF%BC%8C%E9%80%89%E6%8B%A9%E5%90%88%E9%80%82%E7%89%88%E6%9C%AC%E3%80%82" target="_blank" rel="noreferrer">http://kafka.apache.org/downloads，选择合适版本。</a></p><p>解压到本地：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; tar -xzf kafka_2.11-1.1.0.tgz</span></span>
<span class="line"><span>&gt; cd kafka_2.11-1.1.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>现在您已经在您的机器上下载了最新版本的 Kafka。</p><h2 id="启动服务器" tabindex="-1">启动服务器 <a class="header-anchor" href="#启动服务器" aria-label="Permalink to &quot;启动服务器&quot;">​</a></h2><p>由于 Kafka 依赖于 ZooKeeper，所以运行前需要先启动 ZooKeeper</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; bin/zookeeper-server-start.sh config/zookeeper.properties</span></span>
<span class="line"><span>[2013-04-22 15:01:37,495] INFO Reading configuration from: config/zookeeper.properties (org.apache.zookeeper.server.quorum.QuorumPeerConfig)</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>然后，启动 Kafka</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>&gt; bin/kafka-server-start.sh config/server.properties</span></span>
<span class="line"><span>[2013-04-22 15:01:47,028] INFO Verifying properties (kafka.utils.VerifiableProperties)</span></span>
<span class="line"><span>[2013-04-22 15:01:47,051] INFO Property socket.send.buffer.bytes is overridden to 1048576 (kafka.utils.VerifiableProperties)</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="停止服务器" tabindex="-1">停止服务器 <a class="header-anchor" href="#停止服务器" aria-label="Permalink to &quot;停止服务器&quot;">​</a></h2><p>执行所有操作后，可以使用以下命令停止服务器</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ bin/kafka-server-stop.sh config/server.properties</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="创建主题" tabindex="-1">创建主题 <a class="header-anchor" href="#创建主题" aria-label="Permalink to &quot;创建主题&quot;">​</a></h2><p>创建一个名为 test 的 Topic，这个 Topic 只有一个分区以及一个备份：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="生产者生产消息" tabindex="-1">生产者生产消息 <a class="header-anchor" href="#生产者生产消息" aria-label="Permalink to &quot;生产者生产消息&quot;">​</a></h2><p>运行生产者，然后可以在控制台中输入一些消息，这些消息会发送到服务器：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test</span></span>
<span class="line"><span>This is a message</span></span>
<span class="line"><span>This is another message</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="消费者消费消息" tabindex="-1">消费者消费消息 <a class="header-anchor" href="#消费者消费消息" aria-label="Permalink to &quot;消费者消费消息&quot;">​</a></h2><p>启动消费者，然后获得服务器中 Topic 下的消息：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning</span></span>
<span class="line"><span>This is a message</span></span>
<span class="line"><span>This is another message</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="集群部署" tabindex="-1">集群部署 <a class="header-anchor" href="#集群部署" aria-label="Permalink to &quot;集群部署&quot;">​</a></h2><p>复制配置为多份（Windows 使用 copy 命令代理）：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; cp config/server.properties config/server-1.properties</span></span>
<span class="line"><span>&gt; cp config/server.properties config/server-2.properties</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>修改配置：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>config/server-1.properties:</span></span>
<span class="line"><span>    broker.id=1</span></span>
<span class="line"><span>    listeners=PLAINTEXT://:9093</span></span>
<span class="line"><span>    log.dir=/tmp/kafka-logs-1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>config/server-2.properties:</span></span>
<span class="line"><span>    broker.id=2</span></span>
<span class="line"><span>    listeners=PLAINTEXT://:9094</span></span>
<span class="line"><span>    log.dir=/tmp/kafka-logs-2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>其中，broker.id 这个参数必须是唯一的。</p><p>端口故意配置的不一致，是为了可以在一台机器启动多个应用节点。</p><p>根据这两份配置启动三个服务器节点：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; bin/kafka-server-start.sh config/server.properties &amp;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&gt; bin/kafka-server-start.sh config/server-1.properties &amp;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>&gt; bin/kafka-server-start.sh config/server-2.properties &amp;</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>创建一个新的 Topic 使用 三个备份：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 3 --partitions 1 --topic my-replicated-topic</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看主题：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&gt; bin/kafka-topics.sh --describe --zookeeper localhost:2181 --topic my-replicated-topic</span></span>
<span class="line"><span>Topic:my-replicated-topic   PartitionCount:1    ReplicationFactor:3 Configs:</span></span>
<span class="line"><span>Topic: my-replicated-topic  Partition: 0    Leader: 1   Replicas: 1,2,0 Isr: 1,2,0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>leader - 负责指定分区的所有读取和写入的节点。每个节点将成为随机选择的分区部分的领导者。</p><p>replicas - 是复制此分区日志的节点列表，无论它们是否为领导者，或者即使它们当前处于活动状态。</p><p>isr - 是“同步”复制品的集合。这是副本列表的子集，该列表当前处于活跃状态并且已经被领导者捕获。</p><h2 id="zookeeper-install-sh" tabindex="-1">zookeeper-install.sh <a class="header-anchor" href="#zookeeper-install-sh" aria-label="Permalink to &quot;zookeeper-install.sh&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
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
<span class="line"><span># 安装 ZooKeeper 脚本</span></span>
<span class="line"><span># @system: 适用于所有 linux 发行版本。</span></span>
<span class="line"><span>###################################################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>printf &quot;\${RESET}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; install zookeeper begin.\${RESET}\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then</span></span>
<span class="line"><span>	printf &quot;\${PURPLE}[Hint]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t sh zookeeper-install.sh [version] [path]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t Example: sh zookeeper-install.sh 3.4.12 /opt/zookeeper\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\${RESET}\\n&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>version=3.4.12</span></span>
<span class="line"><span>if [[ -n $1 ]]; then</span></span>
<span class="line"><span>	version=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>path=/opt/zookeeper</span></span>
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
<span class="line"><span>curl -o \${path}/zookeeper-\${version}.tar.gz http://mirrors.hust.edu.cn/apache/zookeeper/zookeeper-\${version}/zookeeper-\${version}.tar.gz</span></span>
<span class="line"><span>tar zxf \${path}/zookeeper-\${version}.tar.gz -C \${path}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; install zookeeper end.\${RESET}\\n&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="kafka-install-sh" tabindex="-1">kafka-install.sh <a class="header-anchor" href="#kafka-install-sh" aria-label="Permalink to &quot;kafka-install.sh&quot;">​</a></h2><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
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
<span class="line"><span># 安装 Kafka 脚本</span></span>
<span class="line"><span># @system: 适用于所有 linux 发行版本。</span></span>
<span class="line"><span>###################################################################################</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>printf &quot;\${RESET}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt; install kafka begin.\${RESET}\\n&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>command -v java &gt; /dev/null 2&gt;&amp;1 || {</span></span>
<span class="line"><span>	printf &quot;\${RED}Require java but it&#39;s not installed.\${RESET}\\n&quot;;</span></span>
<span class="line"><span>	exit 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [[ $# -lt 1 ]] || [[ $# -lt 2 ]]; then</span></span>
<span class="line"><span>	printf &quot;\${PURPLE}[Hint]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t sh kafka-install.sh [version] [path]\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\\t Example: sh kafka-install.sh 2.2.0 /opt/kafka\\n&quot;</span></span>
<span class="line"><span>	printf &quot;\${RESET}\\n&quot;</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>version=2.2.0</span></span>
<span class="line"><span>if [[ -n $1 ]]; then</span></span>
<span class="line"><span>	version=$1</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>path=/opt/kafka</span></span>
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
<span class="line"><span>curl -o \${path}/kafka_2.12-\${version}.tgz http://mirrors.tuna.tsinghua.edu.cn/apache/kafka/\${version}/kafka_2.12-\${version}.tgz</span></span>
<span class="line"><span>tar zxf \${path}/kafka_2.12-\${version}.tgz -C \${path}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printf &quot;\${GREEN}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; install kafka end.\${RESET}\\n&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div>`,46),i=[l];function r(t,c,o,b,u,m){return a(),n("div",null,i)}const g=s(e,[["render",r]]);export{h as __pageData,g as default};
