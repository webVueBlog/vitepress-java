import{_ as s,c as a,o as n,a8 as e}from"./chunks/framework.CbRyzB36.js";const b=JSON.parse('{"title":"Svn 运维","description":"","frontmatter":{},"headers":[],"relativePath":"soft/Svn.md","filePath":"soft/Svn.md"}'),l={name:"soft/Svn.md"},i=e(`<h1 id="svn-运维" tabindex="-1">Svn 运维 <a class="header-anchor" href="#svn-运维" aria-label="Permalink to &quot;Svn 运维&quot;">​</a></h1><blockquote><p>Svn 是 Subversion 的简称，是一个开放源代码的版本控制系统，它采用了分支管理系统。</p></blockquote><p>记录 svn 的安装、配置、使用。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="安装-svn" tabindex="-1">安装 svn <a class="header-anchor" href="#安装-svn" aria-label="Permalink to &quot;安装 svn&quot;">​</a></h3><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ yum install -y subversion</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建-svn-仓库" tabindex="-1">创建 svn 仓库 <a class="header-anchor" href="#创建-svn-仓库" aria-label="Permalink to &quot;创建 svn 仓库&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ mkdir -p /share/svn</span></span>
<span class="line"><span>$ svnadmin create /share/svn</span></span>
<span class="line"><span>$ ls /share/svn</span></span>
<span class="line"><span>conf  db  format  hooks  locks  README.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在 conf 目录下有三个重要的配置文件</p><ul><li>authz - 是权限控制文件</li><li>passwd - 是帐号密码文件</li><li>svnserve.conf - 是 SVN 服务配置文件</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><h3 id="配置-svnserve-conf" tabindex="-1">配置 svnserve.conf <a class="header-anchor" href="#配置-svnserve-conf" aria-label="Permalink to &quot;配置 svnserve.conf&quot;">​</a></h3><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ vim /share/svn/conf/svnserve.conf</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>打开下面的 5 个注释</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>anon-access = read      #匿名用户可读</span></span>
<span class="line"><span>auth-access = write     #授权用户可写</span></span>
<span class="line"><span>password-db = passwd    #使用哪个文件作为账号文件</span></span>
<span class="line"><span>authz-db = authz        #使用哪个文件作为权限文件</span></span>
<span class="line"><span>realm = /share/svn      # 认证空间名，版本库所在目录</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="配置-passwd" tabindex="-1">配置 passwd <a class="header-anchor" href="#配置-passwd" aria-label="Permalink to &quot;配置 passwd&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ vim /share/svn/conf/passwd</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加新用户的用户名/密码如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[users]</span></span>
<span class="line"><span>user1 = 123456</span></span>
<span class="line"><span>user2 = 123456</span></span>
<span class="line"><span>user3 = 123456</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>#配置 authz</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ vim /share/svn/conf/authz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>指定用户的访问权限（r 为读权限；w 为写权限）：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[/]</span></span>
<span class="line"><span>user1 = rw</span></span>
<span class="line"><span>user2 = rw</span></span>
<span class="line"><span>user3 = rw</span></span>
<span class="line"><span>*=</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="服务器管理" tabindex="-1">服务器管理 <a class="header-anchor" href="#服务器管理" aria-label="Permalink to &quot;服务器管理&quot;">​</a></h2><h3 id="启动关闭-svn" tabindex="-1">启动关闭 svn <a class="header-anchor" href="#启动关闭-svn" aria-label="Permalink to &quot;启动关闭 svn&quot;">​</a></h3><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ svnserve -d -r /share/svn # 启动 svn</span></span>
<span class="line"><span>$ killall svnserve # 关闭 svn</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="开机自启动-svn-方法" tabindex="-1">开机自启动 svn 方法 <a class="header-anchor" href="#开机自启动-svn-方法" aria-label="Permalink to &quot;开机自启动 svn 方法&quot;">​</a></h3><p>安装好 svn 服务后，默认是没有随系统启动自动启动的，而一般我们有要求 svn 服务稳定持续的提供服务。所以，有必要配置开机自启动 svn 服务。</p><h3 id="centos7-以前" tabindex="-1">Centos7 以前 <a class="header-anchor" href="#centos7-以前" aria-label="Permalink to &quot;Centos7 以前&quot;">​</a></h3><p>编辑 /etc/rc.d/rc.local 文件：</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ vi /etc/rc.d/rc.local</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输入以下内容：</p><h1 id="开机自动启动-svn-默认端口是-3690" tabindex="-1">开机自动启动 svn，默认端口是 3690 <a class="header-anchor" href="#开机自动启动-svn-默认端口是-3690" aria-label="Permalink to &quot;开机自动启动 svn，默认端口是 3690&quot;">​</a></h1><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ /usr/bin/svnserve -d -r /share/svn --listen-port 3690</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意：</p><p>我们在用终端操作的时候，可以直接使用以下命令启动 SVN：</p><p>svnserve -d -r /share/svn，但是在 /etc/rc.d/rc.local 文件中必须写上完整的路径！</p><p>如果不知道 svnserve 命令安装在哪儿，可以使用 whereis svnserve 查找。</p><h2 id="centos7" tabindex="-1">Centos7 <a class="header-anchor" href="#centos7" aria-label="Permalink to &quot;Centos7&quot;">​</a></h2><p>CentOS 7 中的 /etc/rc.d/rc.local 是没有执行权限的，系统建议创建 systemd service 启动服务。</p><p>找到 svn 的 service 配置文件 /etc/sysconfig/svnserve 编辑配置文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ vi /etc/sysconfig/svnserve</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>将 OPTIONS=&quot;-r /var/svn&quot; 改为 svn 版本库存放的目录，:wq 保存退出。</p><p>执行 systemctl enable svnserve.service</p><p>重启服务器后，执行 ps -ef | grep svn 应该可以看到 svn 服务的进程已经启动。</p><ul><li>启动一个服务 - systemctl start svnserve.service</li><li>关闭一个服务 - systemctl stop svnserve.service</li><li>重启一个服务 - systemctl restart svnserve.service</li><li>显示一个服务的状态 - systemctl status svnserve.service</li><li>在开机时启用一个服务 - systemctl enable svnserve.service</li><li>在开机时禁用一个服务 - systemctl disable svnserve.service</li></ul><h2 id="客户端使用" tabindex="-1">客户端使用 <a class="header-anchor" href="#客户端使用" aria-label="Permalink to &quot;客户端使用&quot;">​</a></h2><p>进入 svn 官方下载地址 (opens new window)，选择合适的版本，下载并安装。</p><p>新建一个目录，然后打开鼠标右键菜单，选择 SVN Checkout。</p><p>在新的窗口，输入地址 svn://&lt;你的 IP&gt; 即可，不出意外输入用户名和密码就能连接成功了</p><p>（这里的用户、密码必须在 passwd 配置文件的清单中）。默认端口 3690，如果你修改了端口，那么要记得加上端口号。如下图所示：</p>`,51),p=[i];function r(t,c,d,o,h,v){return n(),a("div",null,p)}const m=s(l,[["render",r]]);export{b as __pageData,m as default};