import{_ as s,c as a,o as n,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_144.DbzWMbz_.png",l="/vitepress-java/assets/img_145.PuqT8BSL.png",i="/vitepress-java/assets/img_146.C5lIvT9W.png",r="/vitepress-java/assets/img_147.BL-JxkPA.png",c="/vitepress-java/assets/img_148.BOZ0e8OY.png",t="/vitepress-java/assets/img_149.BxYUt924.png",o="/vitepress-java/assets/img_150.DtnkrhHy.png",m="/vitepress-java/assets/img_151.SUfR97hU.png",b="/vitepress-java/assets/img_152.I8FsFgJn.png",g="/vitepress-java/assets/img_153.DiZ_2r7w.png",C=JSON.parse('{"title":"9.2-Kafka高可用集群之zookeeper集群环境准备","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/40.md","filePath":"AKafka/40.md"}'),d={name:"AKafka/40.md"},u=p('<h1 id="_9-2-kafka高可用集群之zookeeper集群环境准备" tabindex="-1">9.2-Kafka高可用集群之zookeeper集群环境准备 <a class="header-anchor" href="#_9-2-kafka高可用集群之zookeeper集群环境准备" aria-label="Permalink to &quot;9.2-Kafka高可用集群之zookeeper集群环境准备&quot;">​</a></h1><p><img src="'+e+'" alt="img_144.png" loading="lazy"></p><p>2核4G</p><p><img src="'+l+`" alt="img_145.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd /usr/local/software/</span></span>
<span class="line"><span>ls</span></span>
<span class="line"><span>// 删除 rm -rf xxx</span></span>
<span class="line"><span>// 在software cd /tmp/</span></span>
<span class="line"><span>// ls 有 logs 文件</span></span>
<span class="line"><span>// rm -rf kafka-logs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 进入 cs /usr/local/software/</span></span>
<span class="line"><span>// ls</span></span>
<span class="line"><span>apache-zookeeper-3.7.0-bin.tar.gz db jdk-8u181-linux-x64.tar.gz jdk1.8 kafka_2.13-2.8.0.tgz</span></span>
<span class="line"><span>// 解压一下</span></span>
<span class="line"><span>// software  #  tar -zxvf apache-zookeeper-3.7.0-bin.tar.gz</span></span>
<span class="line"><span>// mv一下</span></span>
<span class="line"><span>// mv apache-zookeeper-3.7.0-bin zk1</span></span>
<span class="line"><span>// cd zk1</span></span>
<span class="line"><span>// cd conf/</span></span>
<span class="line"><span>// cp zoo_sample.cfg zoo.cfg</span></span>
<span class="line"><span>// vim zoo.cfg</span></span>
<span class="line"><span>// vi zoo.cfg</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 解压 tar -zxvf zookeeper-3.4.14.tar.gz -C /usr/local/server/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>tar -zxvf zookeeper-3.4.14.tar.gz -C /usr/local/server/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>zk1/conf zoo.cfg配置</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>tickTime = 2000</span></span>
<span class="line"><span>initLimit = 10</span></span>
<span class="line"><span>syncLimit = 5</span></span>
<span class="line"><span>//dataDir=/usr/local/server/zookeeper-3.4.14/data</span></span>
<span class="line"><span>dataDir = /tmp/zookeeper/1</span></span>
<span class="line"><span>clientPort = 2181</span></span>
<span class="line"><span>//server.1=192.168.6.132:2888:3888</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="`+i+`" alt="img_146.png" loading="lazy"></p><p>集群</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// cd software</span></span>
<span class="line"><span>cp -r zk1 zk2</span></span>
<span class="line"><span>cp -r zk1 zk3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+r+'" alt="img_147.png" loading="lazy"></p><p><img src="'+c+'" alt="img_148.png" loading="lazy"></p><p>笔记</p><p><img src="'+t+'" alt="img_149.png" loading="lazy"></p><p><img src="'+o+'" alt="img_150.png" loading="lazy"></p><p><img src="'+m+'" alt="img_151.png" loading="lazy"></p><p>配置集群</p><p><img src="'+b+'" alt="img_152.png" loading="lazy"></p><p><img src="'+g+'" alt="img_153.png" loading="lazy"></p>',19),_=[u];function v(k,z,h,f,y,x){return n(),a("div",null,_)}const w=s(d,[["render",v]]);export{C as __pageData,w as default};
