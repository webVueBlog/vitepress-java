import{_ as s,c as a,o as e,a8 as i}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img_43.Bq5vf0pm.png",t="/vitepress-java/assets/img_44.C8hpa4PC.png",n="/vitepress-java/assets/img_45.H1UezMvQ.png",g="/vitepress-java/assets/img_46.CaXX1emr.png",r="/vitepress-java/assets/img_47.DZADZUm6.png",l="/vitepress-java/assets/img_48.CsOJmcli.png",o="/vitepress-java/assets/img_49.FSg6DzIQ.png",m="/vitepress-java/assets/img_50.C6skPYD5.png",_="/vitepress-java/assets/img_51.BdiWxMXS.png",c="/vitepress-java/assets/img_52.DZ6RhvrY.png",d="/vitepress-java/assets/img_53.BRwODWTi.png",v="/vitepress-java/assets/img_54.DBDoM-zg.png",u="/vitepress-java/assets/img_55.BToh_tfp.png",h="/vitepress-java/assets/img_56.DPe0tcrB.png",k="/vitepress-java/assets/img_57.Bn86klZ7.png",b="/vitepress-java/assets/img_58._PkhGg6C.png",y="/vitepress-java/assets/img_59.Dyl0tUa2.png",z="/vitepress-java/assets/img_60.CrATBx89.png",f="/vitepress-java/assets/img_61.e-87KXpl.png",j="/vitepress-java/assets/img_62.DuhPAoj2.png",C="/vitepress-java/assets/img_63.Deid5KW9.png",D="/vitepress-java/assets/img_64.CMCg9Zbd.png",$=JSON.parse('{"title":"3.5-Linux环境下Zookeeper和Kafka安装启动","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/10.md","filePath":"AKafka/10.md"}'),x={name:"AKafka/10.md"},B=i('<h1 id="_3-5-linux环境下zookeeper和kafka安装启动" tabindex="-1">3.5-Linux环境下Zookeeper和Kafka安装启动 <a class="header-anchor" href="#_3-5-linux环境下zookeeper和kafka安装启动" aria-label="Permalink to &quot;3.5-Linux环境下Zookeeper和Kafka安装启动&quot;">​</a></h1><p><img src="'+p+'" alt="img_43.png" loading="lazy"></p><p><img src="'+t+'" alt="img_44.png" loading="lazy"></p><p><img src="'+n+'" alt="img_45.png" loading="lazy"></p><p><img src="'+g+'" alt="img_46.png" loading="lazy"></p><p><img src="'+r+'" alt="img_47.png" loading="lazy"></p><p>启动zookeeper</p><p><img src="'+l+'" alt="img_48.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./zkServer.sh start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置文件</p><p><img src="'+o+'" alt="img_49.png" loading="lazy"></p><p><img src="'+m+'" alt="img_50.png" loading="lazy"></p><p><img src="'+_+`" alt="img_51.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//查看日志</span></span>
<span class="line"><span>tail -f zookeeper_audit.log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>yum install -y lsof</p><p><img src="`+c+'" alt="img_52.png" loading="lazy"></p><p><img src="'+d+'" alt="img_53.png" loading="lazy"></p><p><img src="'+v+'" alt="img_54.png" loading="lazy"></p><p><img src="'+u+'" alt="img_55.png" loading="lazy"></p><p><img src="'+h+'" alt="img_56.png" loading="lazy"></p><p><img src="'+k+'" alt="img_57.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./kafka-server-start.sh -daemon config/server.properties</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./kafka-server-start.sh ../config/server.properties &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+b+'" alt="img_58.png" loading="lazy"></p><p><img src="'+y+'" alt="img_59.png" loading="lazy"></p><p><img src="'+z+'" alt="img_60.png" loading="lazy"></p><p><img src="'+f+'" alt="img_61.png" loading="lazy"></p><p><img src="'+j+'" alt="img_62.png" loading="lazy"></p><p><img src="'+C+'" alt="img_63.png" loading="lazy"></p><p><img src="'+D+'" alt="img_64.png" loading="lazy"></p>',30),P=[B];function A(T,K,S,Z,w,M){return e(),a("div",null,P)}const q=s(x,[["render",A]]);export{$ as __pageData,q as default};
