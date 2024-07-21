import{_ as s,c as a,o as n,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const m=JSON.parse('{"title":"redis安装部署文档","description":"","frontmatter":{},"headers":[],"relativePath":"soft/redis.md","filePath":"soft/redis.md"}'),p={name:"soft/redis.md"},l=e(`<h1 id="redis安装部署文档" tabindex="-1">redis安装部署文档 <a class="header-anchor" href="#redis安装部署文档" aria-label="Permalink to &quot;redis安装部署文档&quot;">​</a></h1><h2 id="_1安装部署" tabindex="-1">1安装部署 <a class="header-anchor" href="#_1安装部署" aria-label="Permalink to &quot;1安装部署&quot;">​</a></h2><h3 id="_1-1下载redis" tabindex="-1">1.1下载Redis <a class="header-anchor" href="#_1-1下载redis" aria-label="Permalink to &quot;1.1下载Redis&quot;">​</a></h3><p>从Redis官方网站下载Redis的最新版本：<a href="https://redis.io/download" target="_blank" rel="noreferrer">https://redis.io/download</a> redis-6.2.5.tar.gz</p><h3 id="_1-2解压redis" tabindex="-1">1.2解压Redis <a class="header-anchor" href="#_1-2解压redis" aria-label="Permalink to &quot;1.2解压Redis&quot;">​</a></h3><p>使用tar命令解压下载的Redis压缩包 tar -xzvf redis-6.2.5.tar.gz</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tar -xzvf redis-6.2.5.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_1-3编译安装redis" tabindex="-1">1.3编译安装Redis <a class="header-anchor" href="#_1-3编译安装redis" aria-label="Permalink to &quot;1.3编译安装Redis&quot;">​</a></h3><p>进入解压后的Redis目录，执行make命令编译Redis</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd redis-6.2.5</span></span>
<span class="line"><span>make PREFIX=/usr/local/redis install</span></span>
<span class="line"><span>mkdir /usr/local/redis/conf</span></span>
<span class="line"><span>cp redis.conf /usr/local/redis/conf/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-4配置redis" tabindex="-1">1.4配置redis <a class="header-anchor" href="#_1-4配置redis" aria-label="Permalink to &quot;1.4配置redis&quot;">​</a></h3><p>拷贝配置文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir /usr/local/redis/conf</span></span>
<span class="line"><span>cp redis.conf /usr/local/redis/conf/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-4-1单点模式" tabindex="-1">1.4.1单点模式 <a class="header-anchor" href="#_1-4-1单点模式" aria-label="Permalink to &quot;1.4.1单点模式&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#绑定IP</span></span>
<span class="line"><span>bind 0.0.0.0 -::1</span></span>
<span class="line"><span>#设置密码</span></span>
<span class="line"><span>requirepass dada_redis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_1-4-2主从模式" tabindex="-1">1.4.2主从模式 <a class="header-anchor" href="#_1-4-2主从模式" aria-label="Permalink to &quot;1.4.2主从模式&quot;">​</a></h3><p>主配置同单点配置</p><p>从配置如下</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>masterauth my_redis</span></span>
<span class="line"><span>slaveof 172.xx.xxx.147 6379</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_1-4-3集群模式" tabindex="-1">1.4.3集群模式 <a class="header-anchor" href="#_1-4-3集群模式" aria-label="Permalink to &quot;1.4.3集群模式&quot;">​</a></h3><p>每个节点配置</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 配置文件中必须包含以下内容</span></span>
<span class="line"><span>port 6379 # 端口号</span></span>
<span class="line"><span>cluster-enabled yes # 开启集群模式</span></span>
<span class="line"><span>cluster-config-file nodes.conf # 集群节点信息存储文件</span></span>
<span class="line"><span>cluster-node-timeout 5000 # 节点失效超时时间</span></span>
<span class="line"><span>appendonly yes # 开启持久化</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 集群配置，每个节点的配置文件都需要包含以下内容，其中IP地址和端口号需要修改为各自的节点信息</span></span>
<span class="line"><span>cluster-announce-ip 192.168.1.100</span></span>
<span class="line"><span>cluster-announce-port 6379</span></span>
<span class="line"><span>cluster-announce-bus-port 16379</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="_1-5启动redis" tabindex="-1">1.5启动Redis <a class="header-anchor" href="#_1-5启动redis" aria-label="Permalink to &quot;1.5启动Redis&quot;">​</a></h3><p>1)单点/主动/集群模式都需进入Redis安装目录，执行redis-server命令启动Redis</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nohup /usr/local/redis/bin/redis-server /usr/local/redis/conf/redis.conf &gt; redis_6379.log 2&gt;&amp;1 &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2)集群模式需创建集群</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>redis-cli --cluster create 192.168.1.100:6379 192.168.1.101:6379 192.168.1.102:6379  --cluster-replicas 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>--cluster-replicas 1 表示每个主节点对应一个从节点</p><h3 id="_1-6测试redis" tabindex="-1">1.6测试Redis <a class="header-anchor" href="#_1-6测试redis" aria-label="Permalink to &quot;1.6测试Redis&quot;">​</a></h3><p>1)单点/主从使用redis-cli命令测试Redis是否正常工作</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>redis-cli -h 192.168.1.100 -p 6379 -a dada_redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/usr/local/redis/bin/redis-cli  -h 127.0.0.1  -p 6379  -a passwd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>集群测试</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>redis-cli -c -p 6379</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>主服务效果日志</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>127.0.0.1:9379&gt; info replication</span></span>
<span class="line"><span># Replication</span></span>
<span class="line"><span>role:master</span></span>
<span class="line"><span>connected_slaves:1</span></span>
<span class="line"><span>slave0:ip=172.xx.xxx.146,port=9379,state=online,offset=28,lag=1</span></span>
<span class="line"><span>master_failover_state:no-failover</span></span>
<span class="line"><span>master_replid:4a683479e9e739ca6b453a872d040e0e9d831111</span></span>
<span class="line"><span>master_replid2:0000000000000000000000000000000000000000</span></span>
<span class="line"><span>master_repl_offset:28</span></span>
<span class="line"><span>second_repl_offset:-1</span></span>
<span class="line"><span>repl_backlog_active:1</span></span>
<span class="line"><span>repl_backlog_size:1048576</span></span>
<span class="line"><span>repl_backlog_first_byte_offset:1</span></span>
<span class="line"><span>repl_backlog_histlen:28</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="4"><li>从服务效果日志</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>127.0.0.1:9379&gt; info replication</span></span>
<span class="line"><span># Replication</span></span>
<span class="line"><span>role:slave</span></span>
<span class="line"><span>master_host:172.xx.xxx.147</span></span>
<span class="line"><span>master_port:9379</span></span>
<span class="line"><span>master_link_status:up</span></span>
<span class="line"><span>master_last_io_seconds_ago:0</span></span>
<span class="line"><span>master_sync_in_progress:0</span></span>
<span class="line"><span>slave_repl_offset:658</span></span>
<span class="line"><span>slave_priority:100</span></span>
<span class="line"><span>slave_read_only:1</span></span>
<span class="line"><span>replica_announced:1</span></span>
<span class="line"><span>connected_slaves:0</span></span>
<span class="line"><span>master_failover_state:no-failover</span></span>
<span class="line"><span>master_replid:4a683479e9e739ca6b453a872d040e0e9d831111</span></span>
<span class="line"><span>master_replid2:0000000000000000000000000000000000000000</span></span>
<span class="line"><span>master_repl_offset:658</span></span>
<span class="line"><span>second_repl_offset:-1</span></span>
<span class="line"><span>repl_backlog_active:1</span></span>
<span class="line"><span>repl_backlog_size:1048576</span></span>
<span class="line"><span>repl_backlog_first_byte_offset:1</span></span>
<span class="line"><span>repl_backlog_histlen:658</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_2运行维护" tabindex="-1">2运行维护 <a class="header-anchor" href="#_2运行维护" aria-label="Permalink to &quot;2运行维护&quot;">​</a></h2><h3 id="_2-1导出数据" tabindex="-1">2.1导出数据 <a class="header-anchor" href="#_2-1导出数据" aria-label="Permalink to &quot;2.1导出数据&quot;">​</a></h3><p>1)在命令行中使用 redis-cli 命令连接到 Redis 服务器。</p><p>2)使用 BGSAVE 命令让 Redis 服务器执行后台保存操作。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>127.0.0.1:6379&gt; BGSAVE</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这个命令会让 Redis 服务器在后台执行一个快照保存操作，将数据保存到 RDB 文件中。</p><p>3)在 Redis 配置文件中查找 dir 配置项，该配置项指定了 Redis 快照文件的保存路径。在该路径下可以找到保存的 RDB 文件。</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>dir /usr/local/redis/data</span></span>
<span class="line"><span></span></span>
<span class="line"><span>127.0.0.1:6379&gt; CONFIG GET dir</span></span>
<span class="line"><span>1) &quot;dir&quot;</span></span>
<span class="line"><span>2) &quot;/var/lib/redis&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在上面的示例中，Redis 快照文件保存在 /var/lib/redis 目录下。</p><h3 id="_2-2导入数据" tabindex="-1">2.2导入数据 <a class="header-anchor" href="#_2-2导入数据" aria-label="Permalink to &quot;2.2导入数据&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>redis-server --dbfilename redis.rdb --dir /var/lib/redis &lt; /tmp/redis.rdb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>--dbfilename指定要使用的RDB文件名，--dir指定Redis服务器数据目录的位置，&lt;符号指示将RDB文件作为标准输入输入到redis-cli中。</p><h3 id="_2-3redis命令" tabindex="-1">2.3Redis命令 <a class="header-anchor" href="#_2-3redis命令" aria-label="Permalink to &quot;2.3Redis命令&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>192.168.xxx.xxx:6379&gt;  info server   #服务端消息</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info clients   #客户端消息</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info memory   #内存消息</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info persistence   #持久化消息</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info stats   #统计消息</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info commandstats  #命令统计信息</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info cpu  #计算量统计信息</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info replication   #主从复制信息</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info Cluster   #集群</span></span>
<span class="line"><span>192.168.xxx.xxx:6379&gt;  info keyspace   #keyspace</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,51),i=[l];function r(c,t,d,o,b,u){return n(),a("div",null,i)}const v=s(p,[["render",r]]);export{m as __pageData,v as default};