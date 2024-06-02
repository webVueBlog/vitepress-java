import{_ as i,c as a,o as s,a8 as e}from"./chunks/framework.CbRyzB36.js";const b=JSON.parse('{"title":"Nginx 问题集","description":"","frontmatter":{},"headers":[],"relativePath":"nginx-tutorial/nginx-faq.md","filePath":"nginx-tutorial/nginx-faq.md"}'),n={name:"nginx-tutorial/nginx-faq.md"},l=e(`<h1 id="nginx-问题集" tabindex="-1">Nginx 问题集 <a class="header-anchor" href="#nginx-问题集" aria-label="Permalink to &quot;Nginx 问题集&quot;">​</a></h1><h2 id="nginx-出现大量-time-wait" tabindex="-1">Nginx 出现大量 TIME_WAIT <a class="header-anchor" href="#nginx-出现大量-time-wait" aria-label="Permalink to &quot;Nginx 出现大量 TIME_WAIT&quot;">​</a></h2><h3 id="检测time-wait状态的语句" tabindex="-1">检测TIME_WAIT状态的语句 <a class="header-anchor" href="#检测time-wait状态的语句" aria-label="Permalink to &quot;检测TIME_WAIT状态的语句&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> awk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SYN_RECV</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ESTABLISHED</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 756</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FIN_WAIT1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 21</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SYN_SENT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TIME_WAIT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>状态解析：</p><ul><li><code>CLOSED</code> - 无连接是活动的或正在进行</li><li><code>LISTEN</code> - 服务器在等待进入呼叫</li><li><code>SYN_RECV</code> - 一个连接请求已经到达，等待确认</li><li><code>SYN_SENT</code> - 应用已经开始，打开一个连接</li><li><code>ESTABLISHED</code> - 正常数据传输状态</li><li><code>FIN_WAIT1</code> - 应用说它已经完成</li><li><code>FIN_WAIT2</code> - 另一边已同意释放</li><li><code>ITMED_WAIT</code> - 等待所有分组死掉</li><li><code>CLOSING</code> - 两边同时尝试关闭</li><li><code>TIME_WAIT</code> - 另一边已初始化一个释放</li><li><code>LAST_ACK</code> - 等待所有分组死掉</li></ul><h3 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h3><p>执行 <code>vim /etc/sysctl.conf</code>，并添加下面字段</p><div class="language-properties vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">net.ipv4.tcp_syncookies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">net.ipv4.tcp_tw_reuse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">net.ipv4.tcp_tw_recycle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">net.ipv4.tcp_fin_timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 30</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>执行 /<code>sbin/sysctl -p</code> 让修改生效。</p><h2 id="上传文件大小限制" tabindex="-1">上传文件大小限制 <a class="header-anchor" href="#上传文件大小限制" aria-label="Permalink to &quot;上传文件大小限制&quot;">​</a></h2><h3 id="问题现象" tabindex="-1">问题现象 <a class="header-anchor" href="#问题现象" aria-label="Permalink to &quot;问题现象&quot;">​</a></h3><p>显示错误信息：<strong>413 Request Entity Too Large</strong>。</p><p>意思是请求的内容过大，浏览器不能正确显示。常见的情况是发送 <code>POST</code> 请求来上传大文件。</p><h3 id="解决方法-1" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法-1" aria-label="Permalink to &quot;解决方法&quot;">​</a></h3><ul><li>可以在 <code>http</code> 模块中设置：<code>client_max_body_size 20m;</code></li><li>可以在 <code>server</code> 模块中设置：<code>client_max_body_size 20m;</code></li><li>可以在 <code>location</code> 模块中设置：<code>client_max_body_size 20m;</code></li></ul><p>三者区别是：</p><ul><li>如果文大小限制设置在 <code>http</code> 模块中，则对所有 Nginx 收到的请求。</li><li>如果文大小限制设置在 <code>server</code> 模块中，则只对该 <code>server</code> 收到的请求生效。</li><li>如果文大小限制设置在 <code>location</code> 模块中，则只对匹配了 <code>location</code> 路由规则的请求生效。</li></ul><h2 id="请求时间限制" tabindex="-1">请求时间限制 <a class="header-anchor" href="#请求时间限制" aria-label="Permalink to &quot;请求时间限制&quot;">​</a></h2><h3 id="问题现象-1" tabindex="-1">问题现象 <a class="header-anchor" href="#问题现象-1" aria-label="Permalink to &quot;问题现象&quot;">​</a></h3><p>请求时间较长，链接被重置页面刷新。常见的情况是：上传、下载大文件。</p><h3 id="解决方法-2" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法-2" aria-label="Permalink to &quot;解决方法&quot;">​</a></h3><p>修改超时时间</p>`,23),t=[l];function p(o,r,h,d,c,k){return s(),a("div",null,t)}const g=i(n,[["render",p]]);export{b as __pageData,g as default};
