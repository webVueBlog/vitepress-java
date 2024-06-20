import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_6.CFQJQ128.png",l="/vitepress-java/assets/img_7.P6mez-Mx.png",r="/vitepress-java/assets/img_8.C9ny6OxZ.png",i="/vitepress-java/assets/img_9.CWYz8n6l.png",t="/vitepress-java/assets/img_10.BKWpeGP8.png",c="/vitepress-java/assets/img_11.Dnb_tncu.png",u="/vitepress-java/assets/img_12.C7fxPqRG.png",b="/vitepress-java/assets/img_13.D36mYfVZ.png",o="/vitepress-java/assets/img_14.D0CEOT1M.png",m="/vitepress-java/assets/img_15.C6RauJoh.png",g="/vitepress-java/assets/img_16.D0DgJNTo.png",d="/vitepress-java/assets/img_17.wTZUPQoG.png",_="/vitepress-java/assets/img_18.djW2xr-n.png",h="/vitepress-java/assets/img_19.CcK4UTaV.png",E="/vitepress-java/assets/img_20.V34-BSGs.png",x="/vitepress-java/assets/img_21.ui0WSaIt.png",v="/vitepress-java/assets/img_22.BgAHG3Rl.png",N="/vitepress-java/assets/img_23.Bge_0n8F.png",O="/vitepress-java/assets/img_24.DIiSkvxo.png",q="/vitepress-java/assets/img_25.BBCwO-lh.png",y="/vitepress-java/assets/img_26.u86UJWFF.png",R="/vitepress-java/assets/img_27.Dm6OU-is.png",C="/vitepress-java/assets/img_28.ALZO2-fv.png",V="/vitepress-java/assets/img_29.B6IbQdN1.png",S="/vitepress-java/assets/img_30.C7M6EHvY.png",f="/vitepress-java/assets/img_31.D1bsY8pU.png",z=JSON.parse('{"title":"Nexus 运维","description":"","frontmatter":{},"headers":[],"relativePath":"soft/Nexus.md","filePath":"soft/Nexus.md"}'),L={name:"soft/Nexus.md"},$=p('<h1 id="nexus-运维" tabindex="-1">Nexus 运维 <a class="header-anchor" href="#nexus-运维" aria-label="Permalink to &quot;Nexus 运维&quot;">​</a></h1><p>Nexus 是一个强大的 Maven 仓库管理器，可以用来搭建 Maven 私服。</p><p>关键词：maven, nexus</p><p>部署环境：</p><ol><li>Nexus 3.13.0</li><li>JDK 1.8</li><li>Maven 3.5.4</li></ol><h2 id="一、nexus-安装" tabindex="-1">一、Nexus 安装 <a class="header-anchor" href="#一、nexus-安装" aria-label="Permalink to &quot;一、Nexus 安装&quot;">​</a></h2><p>进入官方下载地址 (opens new window)，选择合适版本下载。</p><p><img src="'+e+`" alt="img_6.png" loading="lazy"></p><p>本人将 Nexus 部署在 Linux 机器，所以选用的是 Unix 版本。</p><p>这里，如果想通过命令方式直接下载（比如用脚本安装），可以在官方历史发布版本页面 (opens new window)中找到合适版本，然后执行以下命令：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 个人习惯将 nexus 安装在 /opt/maven 目录下</span></span>
<span class="line"><span>wget -O /opt/maven/nexus-unix.tar.gz http://download.sonatype.com/nexus/3/nexus-3.13.0-01-unix.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>【解压】执行 tar -zxf nexus-unix.tar.gz 命令，会解压出两个目录：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nexus-&lt;version&gt; - 程序目录。包含了 Nexus 运行所需要的文件。是 Nexus 运行必须的。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nexus-&lt;version&gt;/etc - 配置目录。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nexus-&lt;version&gt;/etc/nexus.properties - nexus 核心配置文件（默认 etc 目录下有 nexus-default.properties，可以基于此修改）。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sonatype-work - 仓库目录。包含了 Nexus 生成的配置文件、日志文件、仓库文件等。当我们需要备份 Nexus 的时候默认备份此目录即可。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>[修改环境变量】执行 vim /etc/profile，在文件尾部添加以下内容：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>NEXUS_HOME=/usr/program/nexus2.11.4</span></span>
<span class="line"><span>export NEXUS_HOME</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>刷新环境变量：source /etc/profile</p><p>【检查安装是否成功】执行 nexus -version 查看是否安装成功。</p><blockquote><p>【防火墙】</p></blockquote><p>iptabes</p><ol><li>添加规则：iptables -I INPUT -p tcp -m tcp --dport 8081 -j ACCEPT</li><li>载入规则：/etc/rc.d/init.d/iptables save</li><li>重启 iptables：service iptables restart</li></ol><p>firewalld</p><ol><li>添加规则：firewall-cmd --zone=public --add-port=8081/tcp --permanent</li><li>载入规则：firewall-cmd --reload</li></ol><h2 id="二、nexus-使用" tabindex="-1">二、Nexus 使用 <a class="header-anchor" href="#二、nexus-使用" aria-label="Permalink to &quot;二、Nexus 使用&quot;">​</a></h2><h3 id="启动-停止-nexus" tabindex="-1">启动/停止 Nexus <a class="header-anchor" href="#启动-停止-nexus" aria-label="Permalink to &quot;启动/停止 Nexus&quot;">​</a></h3><p>进入 nexus-3.13.0-01/bin 目录，有一个可执行脚本 nexus。</p><p>执行 ./nexus，可以查看允许执行的参数，如下所示，含义可谓一目了然：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>$ ./nexus</span></span>
<span class="line"><span>Usage: ./nexus {start|stop|run|run-redirect|status|restart|force-reload}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol><li>启动 nexus - ./nexus start</li><li>停止 nexus - ./nexus stop</li><li>重启 nexus - ./nexus restart</li></ol><p>Nexus 的默认启动端口为 8081，启动成功后，在浏览器中访问 <code>http://&lt;ip&gt;:8081</code>，欢迎页面如下图所示：</p><p><img src="`+l+'" alt="img_7.png" loading="lazy"></p><p>点击右上角 Sign in 登录，默认用户名/密码为：admin/admin123。</p><h2 id="配置-maven-仓库" tabindex="-1">配置 maven 仓库 <a class="header-anchor" href="#配置-maven-仓库" aria-label="Permalink to &quot;配置 maven 仓库&quot;">​</a></h2><p>Nexus 中的仓库有以下类型：</p><p>hosted - 宿主仓库。主要用于部署无法从公共仓库获取的构件（如 oracle 的 JDBC 驱动）以及自己或第三方的项目构件； proxy - 代理仓库。代理公共的远程仓库； virtual - 虚拟仓库。用于适配 Maven 1； group - 仓库组。Nexus 通过仓库组的概念统一管理多个仓库，这样我们在项目中直接请求仓库组即可请求到仓库组管理的多个仓库。</p><h2 id="配置-maven-仓库-1" tabindex="-1">配置 maven 仓库 <a class="header-anchor" href="#配置-maven-仓库-1" aria-label="Permalink to &quot;配置 maven 仓库&quot;">​</a></h2><p>Nexus 中的仓库有以下类型：</p><ol><li>hosted - 宿主仓库。主要用于部署无法从公共仓库获取的构件（如 oracle 的 JDBC 驱动）以及自己或第三方的项目构件；</li><li>proxy - 代理仓库。代理公共的远程仓库；</li><li>virtual - 虚拟仓库。用于适配 Maven 1；</li><li>group - 仓库组。Nexus 通过仓库组的概念统一管理多个仓库，这样我们在项目中直接请求仓库组即可请求到仓库组管理的多个仓库。</li></ol><p><img src="'+r+'" alt="img_8.png" loading="lazy"></p><h2 id="建议配置如下" tabindex="-1">建议配置如下： <a class="header-anchor" href="#建议配置如下" aria-label="Permalink to &quot;建议配置如下：&quot;">​</a></h2><h3 id="hosted-仓库" tabindex="-1">hosted 仓库 <a class="header-anchor" href="#hosted-仓库" aria-label="Permalink to &quot;hosted 仓库&quot;">​</a></h3><ul><li>maven-releases - 存储私有仓库的发行版 jar 包</li><li>maven-snapshots - 存储私有仓库的快照版（调试版本） jar 包</li></ul><h3 id="proxy-仓库" tabindex="-1">proxy 仓库 <a class="header-anchor" href="#proxy-仓库" aria-label="Permalink to &quot;proxy 仓库&quot;">​</a></h3><ul><li>maven-central-maven - 中央库（如果没有配置 mirror，默认就从这里下载 jar 包），从 <a href="https://repo1.maven.org/maven2/" target="_blank" rel="noreferrer">https://repo1.maven.org/maven2/</a> 获取资源</li><li>maven-aliyun - 国内 maven 仓库，提高访问速度。</li></ul><h3 id="group-仓库" tabindex="-1">group 仓库 <a class="header-anchor" href="#group-仓库" aria-label="Permalink to &quot;group 仓库&quot;">​</a></h3><ul><li>maven-public - 私有仓库的公共空间，把上面三个仓库组合在一起对外提供服务，在本地 maven 基础配置 settings.xml 中使用。</li></ul><p><img src="'+i+'" alt="img_9.png" loading="lazy"></p><p>其中：</p><blockquote><p>maven-central、maven-public、maven-release、maven-snapshot 仓库是默认配置好的 maven 仓库。maven-central 配置的是 <a href="https://repo1.maven.org/maven2/" target="_blank" rel="noreferrer">https://repo1.maven.org/maven2/</a> 的代理仓库，即 maven 中央仓库地址。</p></blockquote><p>参考配置如下：</p><p><img src="'+t+'" alt="img_10.png" loading="lazy"></p><p>推荐配置的代理仓库：</p><ol><li>OSS SNAPSHOT 仓库：<a href="http://oss.jfrog.org/artifactory/oss-snapshot-local/" target="_blank" rel="noreferrer">http://oss.jfrog.org/artifactory/oss-snapshot-local/</a></li><li>aliyun 仓库（受限于国内网络，可以通过它来加速）：<a href="http://maven.aliyun.com/nexus/content/groups/public/" target="_blank" rel="noreferrer">http://maven.aliyun.com/nexus/content/groups/public/</a></li></ol><h2 id="配置-yum-仓库" tabindex="-1">配置 yum 仓库 <a class="header-anchor" href="#配置-yum-仓库" aria-label="Permalink to &quot;配置 yum 仓库&quot;">​</a></h2><p><img src="'+c+`" alt="img_11.png" loading="lazy"></p><p>推荐配置的 yum 代理仓库：</p><p>aliyun yum 仓库：<a href="http://mirrors.aliyun.com/centos" target="_blank" rel="noreferrer">http://mirrors.aliyun.com/centos</a></p><p>配置本地 yum：</p><p>（1）新增 nexus.repo 文件，内容如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[base]</span></span>
<span class="line"><span>name=Nexus</span></span>
<span class="line"><span>baseurl= http://&lt;nexus host&gt;:&lt;nexus port&gt;/repository/yum-aliyun/$releasever/os/$basearch/</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgcheck=0</span></span>
<span class="line"><span>priority=1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>（2）更新 yum 缓存，执行以下命令：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yum clean all</span></span>
<span class="line"><span>yum makecache</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="定时任务" tabindex="-1">定时任务 <a class="header-anchor" href="#定时任务" aria-label="Permalink to &quot;定时任务&quot;">​</a></h2><p>随着 jar 包越来越多，尤其是 SNAPSHOT 包由于不限制重复上传，尤其容易导致磁盘空间膨胀。所以，需要定期进行清理或修复。</p><p>Nexus 内置了多个定时任务，可以执行清理。</p><p>【示例】定期清理 SNAPSHOST</p><h2 id="三、开机自启动" tabindex="-1">三、开机自启动 <a class="header-anchor" href="#三、开机自启动" aria-label="Permalink to &quot;三、开机自启动&quot;">​</a></h2><p>作为常用服务，有必要将 Nexus 设为 systemd 服务，以便在断电恢复后自动重启。</p><p>配置方法如下：</p><p>在 /lib/systemd/system 目录下创建 nexus.service 文件，内容如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=nexus</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=forking</span></span>
<span class="line"><span>LimitNOFILE=65536 #警告处理</span></span>
<span class="line"><span>Environment=RUN_AS_USER=root</span></span>
<span class="line"><span>ExecStart=/opt/maven/nexus-3.13.0-01/bin/nexus start</span></span>
<span class="line"><span>ExecReload=/opt/maven/nexus-3.13.0-01/bin/nexus restart</span></span>
<span class="line"><span>ExecStop=/opt/maven/nexus-3.13.0-01/bin/nexus stop</span></span>
<span class="line"><span>Restart=on-failure</span></span>
<span class="line"><span>PrivateTmp=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>保存后，可以使用以下命令应用 nexus 服务：</p><ul><li>systemctl enable nexus - 启动 nexus 开机启动</li><li>systemctl disable nexus - 关闭 nexus 开机启动</li><li>systemctl start nexus - 启动 nexus 服务</li><li>systemctl stop nexus - 停止 nexus 服务</li><li>systemctl restart nexus - 重启 nexus 服务</li></ul><blockquote><p>执行 systemctl enable nexus 后，再执行 reboot 重启，重连后，可以检测是否成功开机自动重启。</p></blockquote><h2 id="四、nexus-和-maven" tabindex="-1">四、Nexus 和 Maven <a class="header-anchor" href="#四、nexus-和-maven" aria-label="Permalink to &quot;四、Nexus 和 Maven&quot;">​</a></h2><p>Nexus 是 maven 私服。现在，Nexus 服务器已经部署好了，如何配合 maven 使用呢？</p><h3 id="配置-settings-xml" tabindex="-1">配置 settings.xml <a class="header-anchor" href="#配置-settings-xml" aria-label="Permalink to &quot;配置 settings.xml&quot;">​</a></h3><p>如果要使用 Nexus，还必须在 settings.xml 和 pom.xml 中配置认证信息。</p><p>一份完整的 settings.xml：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;settings xmlns=&quot;http://maven.apache.org/SETTINGS/1.0.0&quot;</span></span>
<span class="line"><span>  xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:schemaLocation=&quot;http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd&quot;&gt;</span></span>
<span class="line"><span>  &lt;pluginGroups&gt;</span></span>
<span class="line"><span>    &lt;pluginGroup&gt;org.sonatype.plugins&lt;/pluginGroup&gt;</span></span>
<span class="line"><span>  &lt;/pluginGroups&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!--设置本地 maven 仓库--&gt;</span></span>
<span class="line"><span>  &lt;localRepository&gt;D:\\Tools\\maven\\.m2&lt;/localRepository&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!--Maven 私服账号信息--&gt;</span></span>
<span class="line"><span>  &lt;servers&gt;</span></span>
<span class="line"><span>    &lt;server&gt;</span></span>
<span class="line"><span>      &lt;id&gt;releases&lt;/id&gt;</span></span>
<span class="line"><span>      &lt;username&gt;admin&lt;/username&gt;</span></span>
<span class="line"><span>      &lt;password&gt;admin123&lt;/password&gt;</span></span>
<span class="line"><span>    &lt;/server&gt;</span></span>
<span class="line"><span>    &lt;server&gt;</span></span>
<span class="line"><span>      &lt;id&gt;snapshots&lt;/id&gt;</span></span>
<span class="line"><span>      &lt;username&gt;admin&lt;/username&gt;</span></span>
<span class="line"><span>      &lt;password&gt;admin123&lt;/password&gt;</span></span>
<span class="line"><span>    &lt;/server&gt;</span></span>
<span class="line"><span>  &lt;/servers&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!--Maven 镜像地址--&gt;</span></span>
<span class="line"><span>  &lt;mirrors&gt;</span></span>
<span class="line"><span>    &lt;mirror&gt;</span></span>
<span class="line"><span>      &lt;id&gt;public&lt;/id&gt;</span></span>
<span class="line"><span>      &lt;mirrorOf&gt;*&lt;/mirrorOf&gt;</span></span>
<span class="line"><span>      &lt;!--Nexus 服务器地址--&gt;</span></span>
<span class="line"><span>      &lt;url&gt;http://10.255.255.224:8081/repository/maven-public/&lt;/url&gt;</span></span>
<span class="line"><span>    &lt;/mirror&gt;</span></span>
<span class="line"><span>  &lt;/mirrors&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;profiles&gt;</span></span>
<span class="line"><span>    &lt;profile&gt;</span></span>
<span class="line"><span>      &lt;id&gt;zp&lt;/id&gt;</span></span>
<span class="line"><span>      &lt;repositories&gt;</span></span>
<span class="line"><span>        &lt;repository&gt;</span></span>
<span class="line"><span>          &lt;id&gt;central&lt;/id&gt;</span></span>
<span class="line"><span>          &lt;url&gt;http://central&lt;/url&gt;</span></span>
<span class="line"><span>          &lt;releases&gt;</span></span>
<span class="line"><span>            &lt;enabled&gt;true&lt;/enabled&gt;</span></span>
<span class="line"><span>          &lt;/releases&gt;</span></span>
<span class="line"><span>          &lt;snapshots&gt;</span></span>
<span class="line"><span>            &lt;enabled&gt;true&lt;/enabled&gt;</span></span>
<span class="line"><span>          &lt;/snapshots&gt;</span></span>
<span class="line"><span>        &lt;/repository&gt;</span></span>
<span class="line"><span>      &lt;/repositories&gt;</span></span>
<span class="line"><span>      &lt;pluginRepositories&gt;</span></span>
<span class="line"><span>        &lt;pluginRepository&gt;</span></span>
<span class="line"><span>          &lt;id&gt;central&lt;/id&gt;</span></span>
<span class="line"><span>          &lt;url&gt;http://central&lt;/url&gt;</span></span>
<span class="line"><span>          &lt;releases&gt;</span></span>
<span class="line"><span>            &lt;enabled&gt;true&lt;/enabled&gt;</span></span>
<span class="line"><span>          &lt;/releases&gt;</span></span>
<span class="line"><span>          &lt;snapshots&gt;</span></span>
<span class="line"><span>            &lt;enabled&gt;true&lt;/enabled&gt;</span></span>
<span class="line"><span>            &lt;updatePolicy&gt;always&lt;/updatePolicy&gt;</span></span>
<span class="line"><span>          &lt;/snapshots&gt;</span></span>
<span class="line"><span>        &lt;/pluginRepository&gt;</span></span>
<span class="line"><span>      &lt;/pluginRepositories&gt;</span></span>
<span class="line"><span>    &lt;/profile&gt;</span></span>
<span class="line"><span>  &lt;/profiles&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;activeProfiles&gt;</span></span>
<span class="line"><span>    &lt;activeProfile&gt;zp&lt;/activeProfile&gt;</span></span>
<span class="line"><span>  &lt;/activeProfiles&gt;</span></span>
<span class="line"><span>&lt;/settings&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br></div></div><h2 id="配置-pom-xml" tabindex="-1">配置 pom.xml <a class="header-anchor" href="#配置-pom-xml" aria-label="Permalink to &quot;配置 pom.xml&quot;">​</a></h2><p>在 pom.xml 中添加如下配置，这样就可以执行 mvn deploy，将本地构建的 jar、war 等包发布到私服上。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  &lt;distributionManagement&gt;</span></span>
<span class="line"><span>    &lt;repository&gt;</span></span>
<span class="line"><span>      &lt;id&gt;releases&lt;/id&gt;</span></span>
<span class="line"><span>      &lt;name&gt;Releases&lt;/name&gt;</span></span>
<span class="line"><span>      &lt;url&gt;http://10.255.255.224:8081/repository/maven-releases&lt;/url&gt;</span></span>
<span class="line"><span>    &lt;/repository&gt;</span></span>
<span class="line"><span>    &lt;snapshotRepository&gt;</span></span>
<span class="line"><span>      &lt;id&gt;snapshots&lt;/id&gt;</span></span>
<span class="line"><span>      &lt;name&gt;Snapshot&lt;/name&gt;</span></span>
<span class="line"><span>      &lt;url&gt;http://10.255.255.224:8081/repository/maven-snapshots&lt;/url&gt;</span></span>
<span class="line"><span>    &lt;/snapshotRepository&gt;</span></span>
<span class="line"><span>  &lt;/distributionManagement&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>🔔 注意：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;repository&gt; 和 &lt;snapshotRepository&gt; 的 id 必须和 settings.xml 配置文件中的 &lt;server&gt; 标签中的 id 匹配。</span></span>
<span class="line"><span>&lt;url&gt; 标签的地址需要和 maven 私服的地址匹配。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="执行-maven-构建" tabindex="-1">执行 maven 构建 <a class="header-anchor" href="#执行-maven-构建" aria-label="Permalink to &quot;执行 maven 构建&quot;">​</a></h2><p>如果要使用 settings.xml 中的私服配置，必须通过指定 -P zp 来激活 profile。</p><p>示例：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># 编译并打包 maven 项目</span></span>
<span class="line"><span>$ mvn clean package -Dmaven.skip.test=true -P zp</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 编译并上传 maven 交付件（jar 包）</span></span>
<span class="line"><span>$ mvn clean deploy -Dmaven.skip.test=true -P zp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>至此，已经可以正常向 Nexus 上传、下载 jar 包。</p><h2 id="五、备份和迁移" tabindex="-1">五、备份和迁移 <a class="header-anchor" href="#五、备份和迁移" aria-label="Permalink to &quot;五、备份和迁移&quot;">​</a></h2><p>Nexus 三个重要目录：</p><p>名称 目录名 重要配置文件</p><p>nexus 主目录 nexus-2.6.4-02 conf/nexus.properties 里面有 sonatype-work 的地址</p><p>sonatype-work 目录 sonatype-work nexus/conf/nexus.xml 里面有 storage 的地址</p><p>storage 目录 storage 里面主要是各种程序的 jar 包等</p><h1 id="备份" tabindex="-1">备份 <a class="header-anchor" href="#备份" aria-label="Permalink to &quot;备份&quot;">​</a></h1><p>Nexus 的数据都存储在 sonatype-work 目录，备份 Nexus 数据只需要将其打包即可。</p><h1 id="迁移" tabindex="-1">迁移 <a class="header-anchor" href="#迁移" aria-label="Permalink to &quot;迁移&quot;">​</a></h1><p>将原 Nexus 服务器中的 sonatype-work 目录迁移到新 Nexus 服务器的 sonatype-work 目录下。</p><h1 id="六、faq" tabindex="-1">六、FAQ <a class="header-anchor" href="#六、faq" aria-label="Permalink to &quot;六、FAQ&quot;">​</a></h1><h2 id="配置-install4j-java-home" tabindex="-1">配置 INSTALL4J_JAVA_HOME <a class="header-anchor" href="#配置-install4j-java-home" aria-label="Permalink to &quot;配置 INSTALL4J_JAVA_HOME&quot;">​</a></h2><p>我在工作中遇到 nexus systemctl 服务无法自启动的问题，通过查看状态，发现以下报错：</p><p>Please define INSTALL4J_JAVA_HOME to point to a suitable JVM</p><p>通过排查，找到原因：</p><p>即使环境上已安装 JDK，且配置了 JAVA_HOME，但 nexus 仍然无法正确找到 JDK， 需要在 /bin/nexus 中指定 INSTALL4J_JAVA_HOME_OVERRIDE=&lt;JDK安装路径&gt;</p><h1 id="maven私库nexus3安装及使用" tabindex="-1">maven私库nexus3安装及使用 <a class="header-anchor" href="#maven私库nexus3安装及使用" aria-label="Permalink to &quot;maven私库nexus3安装及使用&quot;">​</a></h1><p>一、试验环境</p><p>1、操作系统：Windows 10</p><p>2、nexus版本：nexus-3.0.1-01-win64</p><p>二、安装</p><p>1、下载地址：<a href="http://www.sonatype.com/download-oss-sonatype" target="_blank" rel="noreferrer">http://www.sonatype.com/download-oss-sonatype</a></p><p><img src="`+u+'" alt="img_12.png" loading="lazy"></p><p>2、我们下载nexus-3.0.1-01-win64.exe后双击安装即可，安装完成后默认开放8081端口。</p><p>三、使用</p><p>安装成功后有两个默认账号admin、anonymous，其中admin具有全部权限默认密码admin123；anonymous作为匿名用户，只具有查看权限。</p><p><img src="'+b+'" alt="img_13.png" loading="lazy"></p><p><img src="'+o+'" alt="img_14.png" loading="lazy"></p><p><img src="'+m+`" alt="img_15.png" loading="lazy"></p><blockquote><p>pepositories说明</p></blockquote><ul><li>maven-central：maven中央库，默认从<a href="https://repo1.maven.org/maven2/%E6%8B%89%E5%8F%96jar" target="_blank" rel="noreferrer">https://repo1.maven.org/maven2/拉取jar</a></li><li>maven-releases：私库发行版jar</li><li>maven-snapshots：私库快照（调试版本）jar</li><li>maven-public：仓库分组，把上面三个仓库组合在一起对外提供服务，在本地maven基础配置settings.xml中使用。</li></ul><h1 id="nexus-install-sh" tabindex="-1">nexus-install.sh <a class="header-anchor" href="#nexus-install-sh" aria-label="Permalink to &quot;nexus-install.sh&quot;">​</a></h1><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># -----------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span># 安装 sonatype nexus(用于搭建 maven 私服) 脚本</span></span>
<span class="line"><span># @system: 适用于所有 linux 发行版本。</span></span>
<span class="line"><span># sonatype nexus 会被安装到 /opt/maven 路径。</span></span>
<span class="line"><span># 注意：sonatype nexus 要求必须先安装 JDK</span></span>
<span class="line"><span># -----------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------------------------------------------------------------------------------ env</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Regular Color</span></span>
<span class="line"><span>export ENV_COLOR_BLACK=&quot;\\033[0;30m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_RED=&quot;\\033[0;31m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_GREEN=&quot;\\033[0;32m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_YELLOW=&quot;\\033[0;33m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_BLUE=&quot;\\033[0;34m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_MAGENTA=&quot;\\033[0;35m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_CYAN=&quot;\\033[0;36m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_WHITE=&quot;\\033[0;37m&quot;</span></span>
<span class="line"><span># Bold Color</span></span>
<span class="line"><span>export ENV_COLOR_B_BLACK=&quot;\\033[1;30m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_RED=&quot;\\033[1;31m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_GREEN=&quot;\\033[1;32m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_YELLOW=&quot;\\033[1;33m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_BLUE=&quot;\\033[1;34m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_MAGENTA=&quot;\\033[1;35m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_CYAN=&quot;\\033[1;36m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_WHITE=&quot;\\033[1;37m&quot;</span></span>
<span class="line"><span># Reset Color</span></span>
<span class="line"><span>export ENV_COLOR_RESET=&quot;$(tput sgr0)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># status</span></span>
<span class="line"><span>export ENV_YES=0</span></span>
<span class="line"><span>export ENV_NO=1</span></span>
<span class="line"><span>export ENV_SUCCEED=0</span></span>
<span class="line"><span>export ENV_FAILED=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------------------------------------------------------------------------------ functions</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 显示打印日志的时间</span></span>
<span class="line"><span>SHELL_LOG_TIMESTAMP=$(date &quot;+%Y-%m-%d %H:%M:%S&quot;)</span></span>
<span class="line"><span># 那个用户在操作</span></span>
<span class="line"><span>USER=$(whoami)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>redOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_RED} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>greenOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_B_GREEN} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yellowOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_YELLOW} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>blueOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_BLUE} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>magentaOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_MAGENTA} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cyanOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_CYAN} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>whiteOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_WHITE} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_B_GREEN}[INFO] $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printWarn() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_B_YELLOW}[WARN] $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printError() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_B_RED}[ERROR] $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>callAndLog () {</span></span>
<span class="line"><span>    $*</span></span>
<span class="line"><span>    if [[ $? -eq \${ENV_SUCCEED} ]]; then</span></span>
<span class="line"><span>        printInfo &quot;$@&quot;</span></span>
<span class="line"><span>        return \${ENV_SUCCEED}</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        printError &quot;$@ EXECUTE FAILED&quot;</span></span>
<span class="line"><span>        return \${ENV_FAILED}</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------------------------------------------------------------------------------ main</span></span>
<span class="line"><span>ENV_NEXUS_VERSION=\${ENV_NEXUS_VERSION:-3.13.0-01}</span></span>
<span class="line"><span>ENV_NEXUS_DIR=\${ENV_NEXUS_DIR:-/opt/maven}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo &quot;&gt;&gt;&gt;&gt; install nexus begin.&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p \${ENV_NEXUS_DIR}</span></span>
<span class="line"><span>printInfo &quot;download nexus&quot;</span></span>
<span class="line"><span>#由于国内网络问题，有可能下载失败</span></span>
<span class="line"><span>curl -o \${ENV_NEXUS_DIR}/nexus-unix.tar.gz https://sonatype-download.global.ssl.fastly.net/repository/repositoryManager/3/nexus-\${ENV_NEXUS_VERSION}-unix.tar.gz</span></span>
<span class="line"><span>if [[ &quot;$?&quot; != \${ENV_SUCCEED} ]]; then</span></span>
<span class="line"><span>    printError &quot;&lt;&lt;&lt;&lt; download nexus-\${ENV_NEXUS_VERSION}-unix.tar.gz failed&quot;</span></span>
<span class="line"><span>    return \${ENV_FAILED}</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>tar -zxf nexus-unix.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo &quot;&gt;&gt;&gt;&gt; setting systemd.&quot;</span></span>
<span class="line"><span>#通过设置 systemd，是的 nexus 注册为服务，开机自启动</span></span>
<span class="line"><span>touch /lib/systemd/system/nexus.service</span></span>
<span class="line"><span>cat &gt;&gt; /lib/systemd/system/nexus.service &lt;&lt; EOF</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=nexus</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=forking</span></span>
<span class="line"><span>LimitNOFILE=65536 #警告处理</span></span>
<span class="line"><span>Environment=RUN_AS_USER=root</span></span>
<span class="line"><span>ExecStart=\${ENV_NEXUS_DIR}/nexus-\${ENV_NEXUS_VERSION}/bin/nexus start</span></span>
<span class="line"><span>ExecReload=\${ENV_NEXUS_DIR}/nexus-\${ENV_NEXUS_VERSION}/bin/nexus restart</span></span>
<span class="line"><span>ExecStop=\${ENV_NEXUS_DIR}/nexus-\${ENV_NEXUS_VERSION}/bin/nexus stop</span></span>
<span class="line"><span>Restart=on-failure</span></span>
<span class="line"><span>PrivateTmp=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>systemctl enable nexus</span></span>
<span class="line"><span>systemctl start nexus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo &quot;&gt;&gt;&gt;&gt; setting firewalld.&quot;</span></span>
<span class="line"><span>firewall-cmd --zone=public --add-port=8081/tcp --permanent</span></span>
<span class="line"><span>firewall-cmd --reload</span></span>
<span class="line"><span># 如果防火墻使用的是 iptables，使用如下配置：</span></span>
<span class="line"><span>#iptables -I INPUT -p tcp -m tcp --dport 8081 -j ACCEPT</span></span>
<span class="line"><span>#/etc/rc.d/init.d/iptables save</span></span>
<span class="line"><span>#service iptables restart</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo &quot;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; install nexus success.&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br></div></div><h1 id="nexus-安装-使用说明" tabindex="-1">Nexus 安装 使用说明 <a class="header-anchor" href="#nexus-安装-使用说明" aria-label="Permalink to &quot;Nexus 安装 使用说明&quot;">​</a></h1><p>1 . 私服简介</p><p>私服是架设在局域网的一种特殊的远程仓库，目的是代理远程仓库及部署第三方构件。有了私服之后，当 Maven 需要下载构件时，直接请求私服，私服上存在则下载到本地仓库；否则，私服请求外部的远程仓库，将构件下载到私服，再提供给本地仓库下载。</p><p><img src="`+g+'" alt="img_16.png" loading="lazy"></p><p>我们可以使用专门的 Maven 仓库管理软件来搭建私服，比如：Apache Archiva，Artifactory，Sonatype Nexus。这里我们使用 Sonatype Nexus。</p><p>2 . 安装Nexus</p><p>2 . 1 . 下载Nexus</p><p>Nexus 专业版是需要付费的，这里我们下载开源版 Nexus OSS。</p><p>Nexus 提供两种安装包，一种是包含 Jetty 容器的 bundle 包，另一种是不包含容器的 war 包。下载地址：<a href="http://www.sonatype.org/nexus/go%E3%80%82" target="_blank" rel="noreferrer">http://www.sonatype.org/nexus/go。</a></p><p><img src="'+d+'" alt="img_17.png" loading="lazy"></p><p>2 . 2 . 使用bundle安装包安装Nexus</p><p>解压安装包nexus-2.8.1-bundle.zip，打开命令提示符，进入/nexus-2.8.1-01目录，键入nexus命令（为方便启动和退出Nexus，可将bin目录添加到环境变量）：</p><p><img src="'+_+'" alt="img_18.png" loading="lazy"></p><p>执行 nexus install 将Nexus安装为Windows服务。可将服务启动方式设为手动，以后通过 nexus start 即可启动Nexus ，通过 nexus stop 退出Nexus：</p><p><img src="'+h+'" alt="img_19.png" loading="lazy"></p><p><img src="'+E+'" alt="img_20.png" loading="lazy"></p><p>打开浏览器，访问：<a href="http://localhost:8081/nexus/%EF%BC%9A" target="_blank" rel="noreferrer">http://localhost:8081/nexus/：</a></p><p><img src="'+x+'" alt="img_21.png" loading="lazy"></p><p>点击右上角 Log In，使用用户名：admin ，密码：admin123 登录，可使用更多功能：</p><p><img src="'+v+'" alt="img_22.png" loading="lazy"></p><p>3 . Nexus预置的仓库</p><p>点击左侧 Repositories 链接，查看 Nexus 内置的仓库：</p><p><img src="'+N+'" alt="img_23.png" loading="lazy"></p><p>Nexus 的仓库分为这么几类：</p><ol><li>hosted 宿主仓库：主要用于部署无法从公共仓库获取的构件（如 oracle 的 JDBC 驱动）以及自己或第三方的项目构件；</li><li>proxy 代理仓库：代理公共的远程仓库；</li><li>virtual 虚拟仓库：用于适配 Maven 1；</li><li>group 仓库组：Nexus 通过仓库组的概念统一管理多个仓库，这样我们在项目中直接请求仓库组即可请求到仓库组管理的多个仓库。</li></ol><p><img src="'+O+'" alt="img_24.png" loading="lazy"></p><p>4 . 添加代理仓库</p><p>以 Sonatype 为例，添加一个代理仓库，用于代理 Sonatype 的公共远程仓库。点击菜单 Add - Proxy Repository ：</p><p><img src="'+q+'" alt="img_25.png" loading="lazy"></p><p>填写Repository ID - sonatype；Repository Name - Sonatype Repository；</p><p>Remote Storage Location - <a href="http://repository.sonatype.org/content/groups/public/" target="_blank" rel="noreferrer">http://repository.sonatype.org/content/groups/public/</a> ，save 保存：</p><p><img src="'+y+'" alt="img_26.png" loading="lazy"></p><p>将添加的 Sonatype 代理仓库加入 Public Repositories 仓库组。</p><p>选中 Public Repositories，在 Configuration 选项卡中，将 Sonatype Repository 从右侧 Available Repositories 移到左侧 Ordered Group Repositories，save 保存：</p><p><img src="'+R+'" alt="img_27.png" loading="lazy"></p><p>5 . 搜索构件</p><p>为了更好的使用 Nexus 的搜索，我们可以设置所有 proxy 仓库的 Download Remote Indexes 为 true，即允许下载远程仓库索引。</p><p><img src="'+C+'" alt="img_28.png" loading="lazy"></p><p>索引下载成功之后，在 Browse Index 选项卡下，可以浏览到所有已被索引的构件信息，包括坐标、格式、Maven 依赖的 xml 代码：</p><p><img src="'+V+'" alt="img_29.png" loading="lazy"></p><p>有了索引，我们就可以搜索了：</p><p><img src="'+S+'" alt="img_30.png" loading="lazy"></p><p>6 . 配置Maven使用私服</p><p>私服搭建成功，我们就可以配置 Maven 使用私服，以后下载构件、部署构件，都通过私服来管理。</p><p>在 settings.xml 文件中，为所有仓库配置一个镜像仓库，镜像仓库的地址即私服的地址（这儿我们使用私服公共仓库组 Public Repositories 的地址）：</p><p><img src="'+f+`" alt="img_31.png" loading="lazy"></p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    &lt;mirrors&gt;</span></span>
<span class="line"><span>            &lt;mirror&gt;</span></span>
<span class="line"><span>                &lt;id&gt;central&lt;/id&gt;</span></span>
<span class="line"><span>                &lt;mirrorOf&gt;*&lt;/mirrorOf&gt; &lt;!-- * 表示让所有仓库使用该镜像--&gt; </span></span>
<span class="line"><span>                &lt;name&gt;central-mirror&lt;/name&gt; </span></span>
<span class="line"><span>                &lt;url&gt;http://localhost:8081/nexus/content/groups/public/&lt;/url&gt;</span></span>
<span class="line"><span>            &lt;/mirror&gt; </span></span>
<span class="line"><span>    &lt;/mirrors&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>管理本地仓库</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>　　Releases:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 　　　　这里存放我们自己项目中发布的构建, 通常是Release版本的, </span></span>
<span class="line"><span>比如我们自己做了一个FTP Server的项目, 生成的构件为ftpserver.war, 我们就可以把这个构建发布到Nexus的Releases本地仓库. </span></span>
<span class="line"><span>关于符合发布后面会有介绍.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　Snapshots:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 　　　　这个仓库非常的有用, 它的目的是让我们可以发布那些非release版本, 非稳定版本, </span></span>
<span class="line"><span>比如我们在trunk下开发一个项目,在正式release之前你可能需要临时发布一个版本给你的同伴使用, </span></span>
<span class="line"><span>因为你的同伴正在依赖你的模块开发, 那么这个时候我们就可以发布Snapshot版本到这个仓库, 你的同伴就可以通过简单的命令来获取和使用这个临时版本.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　3rd Party:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>　　　　顾名思义, 第三方库, 你可能会问不是有中央仓库来管理第三方库嘛,没错, 这里的是指可以让你添加自己的第三方库, </span></span>
<span class="line"><span>比如有些构件在中央仓库是不存在的. 比如你在中央仓库找不到Oracle 的JDBC驱动, 这个时候我们就需要自己添加到3rdparty仓库。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h1 id="nexus-install-sh-1" tabindex="-1">nexus-install.sh <a class="header-anchor" href="#nexus-install-sh-1" aria-label="Permalink to &quot;nexus-install.sh&quot;">​</a></h1><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>#!/usr/bin/env bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># -----------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span># 安装 sonatype nexus(用于搭建 maven 私服) 脚本</span></span>
<span class="line"><span># @system: 适用于所有 linux 发行版本。</span></span>
<span class="line"><span># sonatype nexus 会被安装到 /opt/maven 路径。</span></span>
<span class="line"><span># 注意：sonatype nexus 要求必须先安装 JDK</span></span>
<span class="line"><span># -----------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------------------------------------------------------------------------------ env</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Regular Color</span></span>
<span class="line"><span>export ENV_COLOR_BLACK=&quot;\\033[0;30m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_RED=&quot;\\033[0;31m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_GREEN=&quot;\\033[0;32m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_YELLOW=&quot;\\033[0;33m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_BLUE=&quot;\\033[0;34m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_MAGENTA=&quot;\\033[0;35m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_CYAN=&quot;\\033[0;36m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_WHITE=&quot;\\033[0;37m&quot;</span></span>
<span class="line"><span># Bold Color</span></span>
<span class="line"><span>export ENV_COLOR_B_BLACK=&quot;\\033[1;30m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_RED=&quot;\\033[1;31m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_GREEN=&quot;\\033[1;32m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_YELLOW=&quot;\\033[1;33m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_BLUE=&quot;\\033[1;34m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_MAGENTA=&quot;\\033[1;35m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_CYAN=&quot;\\033[1;36m&quot;</span></span>
<span class="line"><span>export ENV_COLOR_B_WHITE=&quot;\\033[1;37m&quot;</span></span>
<span class="line"><span># Reset Color</span></span>
<span class="line"><span>export ENV_COLOR_RESET=&quot;$(tput sgr0)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># status</span></span>
<span class="line"><span>export ENV_YES=0</span></span>
<span class="line"><span>export ENV_NO=1</span></span>
<span class="line"><span>export ENV_SUCCEED=0</span></span>
<span class="line"><span>export ENV_FAILED=1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------------------------------------------------------------------------------ functions</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 显示打印日志的时间</span></span>
<span class="line"><span>SHELL_LOG_TIMESTAMP=$(date &quot;+%Y-%m-%d %H:%M:%S&quot;)</span></span>
<span class="line"><span># 那个用户在操作</span></span>
<span class="line"><span>USER=$(whoami)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>redOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_RED} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>greenOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_B_GREEN} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>yellowOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_YELLOW} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>blueOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_BLUE} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>magentaOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_MAGENTA} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cyanOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_CYAN} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>whiteOutput() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_WHITE} $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_B_GREEN}[INFO] $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printWarn() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_B_YELLOW}[WARN] $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printError() {</span></span>
<span class="line"><span>    echo -e &quot;\${ENV_COLOR_B_RED}[ERROR] $@\${ENV_COLOR_RESET}&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>callAndLog () {</span></span>
<span class="line"><span>    $*</span></span>
<span class="line"><span>    if [[ $? -eq \${ENV_SUCCEED} ]]; then</span></span>
<span class="line"><span>        printInfo &quot;$@&quot;</span></span>
<span class="line"><span>        return \${ENV_SUCCEED}</span></span>
<span class="line"><span>    else</span></span>
<span class="line"><span>        printError &quot;$@ EXECUTE FAILED&quot;</span></span>
<span class="line"><span>        return \${ENV_FAILED}</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ------------------------------------------------------------------------------ main</span></span>
<span class="line"><span>ENV_NEXUS_VERSION=\${ENV_NEXUS_VERSION:-3.13.0-01}</span></span>
<span class="line"><span>ENV_NEXUS_DIR=\${ENV_NEXUS_DIR:-/opt/maven}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo &quot;&gt;&gt;&gt;&gt; install nexus begin.&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>mkdir -p \${ENV_NEXUS_DIR}</span></span>
<span class="line"><span>printInfo &quot;download nexus&quot;</span></span>
<span class="line"><span>#由于国内网络问题，有可能下载失败</span></span>
<span class="line"><span>curl -o \${ENV_NEXUS_DIR}/nexus-unix.tar.gz https://sonatype-download.global.ssl.fastly.net/repository/repositoryManager/3/nexus-\${ENV_NEXUS_VERSION}-unix.tar.gz</span></span>
<span class="line"><span>if [[ &quot;$?&quot; != \${ENV_SUCCEED} ]]; then</span></span>
<span class="line"><span>    printError &quot;&lt;&lt;&lt;&lt; download nexus-\${ENV_NEXUS_VERSION}-unix.tar.gz failed&quot;</span></span>
<span class="line"><span>    return \${ENV_FAILED}</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>tar -zxf nexus-unix.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo &quot;&gt;&gt;&gt;&gt; setting systemd.&quot;</span></span>
<span class="line"><span>#通过设置 systemd，是的 nexus 注册为服务，开机自启动</span></span>
<span class="line"><span>touch /lib/systemd/system/nexus.service</span></span>
<span class="line"><span>cat &gt;&gt; /lib/systemd/system/nexus.service &lt;&lt; EOF</span></span>
<span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=nexus</span></span>
<span class="line"><span>After=network.target</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=forking</span></span>
<span class="line"><span>LimitNOFILE=65536 #警告处理</span></span>
<span class="line"><span>Environment=RUN_AS_USER=root</span></span>
<span class="line"><span>ExecStart=\${ENV_NEXUS_DIR}/nexus-\${ENV_NEXUS_VERSION}/bin/nexus start</span></span>
<span class="line"><span>ExecReload=\${ENV_NEXUS_DIR}/nexus-\${ENV_NEXUS_VERSION}/bin/nexus restart</span></span>
<span class="line"><span>ExecStop=\${ENV_NEXUS_DIR}/nexus-\${ENV_NEXUS_VERSION}/bin/nexus stop</span></span>
<span class="line"><span>Restart=on-failure</span></span>
<span class="line"><span>PrivateTmp=true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>systemctl enable nexus</span></span>
<span class="line"><span>systemctl start nexus</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo &quot;&gt;&gt;&gt;&gt; setting firewalld.&quot;</span></span>
<span class="line"><span>firewall-cmd --zone=public --add-port=8081/tcp --permanent</span></span>
<span class="line"><span>firewall-cmd --reload</span></span>
<span class="line"><span># 如果防火墻使用的是 iptables，使用如下配置：</span></span>
<span class="line"><span>#iptables -I INPUT -p tcp -m tcp --dport 8081 -j ACCEPT</span></span>
<span class="line"><span>#/etc/rc.d/init.d/iptables save</span></span>
<span class="line"><span>#service iptables restart</span></span>
<span class="line"><span></span></span>
<span class="line"><span>printInfo &quot;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; install nexus success.&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br></div></div>`,173),k=[$];function w(I,T,A,U,D,P){return a(),n("div",null,k)}const j=s(L,[["render",w]]);export{z as __pageData,j as default};
