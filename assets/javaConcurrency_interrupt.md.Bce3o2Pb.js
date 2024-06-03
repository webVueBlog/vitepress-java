import{_ as e,c as a,o as t,a8 as s}from"./chunks/framework.CbRyzB36.js";const n="/vitepress-java/assets/img_10.CbtUqbyd.png",r="/vitepress-java/assets/img_11.BlKyMfC_.png",p="/vitepress-java/assets/img_12.DtchmG_2.png",i="/vitepress-java/assets/img_13.I0xjOYXz.png",o="/vitepress-java/assets/img_14.Dgh6nEEt.png",l="/vitepress-java/assets/img_15.bBnXzmYo.png",c="/vitepress-java/assets/img_16.CTJ6YPm3.png",d="/vitepress-java/assets/img_17.BswVohPX.png",j=JSON.parse('{"title":"三、中断","description":"","frontmatter":{},"headers":[],"relativePath":"javaConcurrency/interrupt.md","filePath":"javaConcurrency/interrupt.md"}'),u={name:"javaConcurrency/interrupt.md"},m=s('<h1 id="三、中断" tabindex="-1">三、中断 <a class="header-anchor" href="#三、中断" aria-label="Permalink to &quot;三、中断&quot;">​</a></h1><p>一个线程执行完毕之后会自动结束，如果在运行过程中发生异常也会提前结束。</p><h2 id="interruptedexception" tabindex="-1">InterruptedException <a class="header-anchor" href="#interruptedexception" aria-label="Permalink to &quot;InterruptedException&quot;">​</a></h2><p>通过调用一个线程的 interrupt() 来中断该线程，如果该线程处于阻塞、限期等待或者 无限期等待状态，那么就会抛出 InterruptedException，从而提前结束该线程。但是不 能中断 I/O 阻塞和 synchronized 锁阻塞。</p><p>对于以下代码，在 main() 中启动一个线程之后再中断它，由于线程中调用了 Thread.sleep() 方法，因此会抛出一个 InterruptedException，从而提前结束线程，不执 行之后的语句。</p><p><img src="'+n+'" alt="img_10.png" loading="lazy"></p><p><img src="'+r+'" alt="img_11.png" loading="lazy"></p><p><img src="'+p+'" alt="img_12.png" loading="lazy"></p><h2 id="interrupted" tabindex="-1">interrupted() <a class="header-anchor" href="#interrupted" aria-label="Permalink to &quot;interrupted()&quot;">​</a></h2><p>如果一个线程的 run() 方法执行一个无限循环，并且没有执行 sleep() 等会抛出 InterruptedException 的操作，那么调用线程的 interrupt() 方法就无法使线程提前结 束。</p><p>但是调用 interrupt() 方法会设置线程的中断标记，此时调用 interrupted() 方法会返回 true。因此可以在循环体中使用 interrupted() 方法来判断线程是否处于中断状态，从 而提前结束线程。</p><p><img src="'+i+'" alt="img_13.png" loading="lazy"></p><p><img src="'+o+'" alt="img_14.png" loading="lazy"></p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Thread end</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="executor-的中断操作" tabindex="-1">Executor 的中断操作 <a class="header-anchor" href="#executor-的中断操作" aria-label="Permalink to &quot;Executor 的中断操作&quot;">​</a></h2><p>调用 Executor 的 shutdown() 方法会等待线程都执行完毕之后再关闭，但是如果调用 的是 shutdownNow() 方法，则相当于调用每个线程的 interrupt() 方法。</p><p>以下使用 Lambda 创建线程，相当于创建了一个匿名内部线程。</p><p><img src="'+l+'" alt="img_15.png" loading="lazy"></p><p><img src="'+c+`" alt="img_16.png" loading="lazy"></p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>如果只想中断 Executor 中的一个线程，可以通过使用 submit() 方法来提交一个线</span></span>
<span class="line"><span>程，它会返回一个 Future&lt;?&gt; 对象，通过调用该对象的 cancel(true) 方法就可以中断</span></span>
<span class="line"><span>线程。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+d+'" alt="img_17.png" loading="lazy"></p>',21),g=[m];function _(h,v,b,x,y,f){return t(),a("div",null,g)}const k=e(u,[["render",_]]);export{j as __pageData,k as default};
