import{_ as a,c as e,o as s,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const o="/vitepress-java/assets/img_168.0nqZEbl5.png",t="/vitepress-java/assets/img_169.DK5jawDJ.png",i="/vitepress-java/assets/img_170.CMVky7ak.png",n="/vitepress-java/assets/img_171.CHjBKyAc.png",c="/vitepress-java/assets/img_172.KAB0Vvqu.png",b=JSON.parse('{"title":"9.5-Kafka高可用集群搭建实战+SpringBoot项目测试","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/43.md","filePath":"AKafka/43.md"}'),r={name:"AKafka/43.md"},l=p('<h1 id="_9-5-kafka高可用集群搭建实战-springboot项目测试" tabindex="-1">9.5-Kafka高可用集群搭建实战+SpringBoot项目测试 <a class="header-anchor" href="#_9-5-kafka高可用集群搭建实战-springboot项目测试" aria-label="Permalink to &quot;9.5-Kafka高可用集群搭建实战+SpringBoot项目测试&quot;">​</a></h1><p><img src="'+o+`" alt="img_168.png" loading="lazy"></p><p>启动kafka实战</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./kafka-server-start.sh -daemon ../config/server.properties &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>创建topic</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>./kafka-topics.sh --create --zookeeper 112.74.55.160:2181, 112.74.55.160:2182, 112.74.55.160:2183</span></span>
<span class="line"><span>--replication-factor 3 --partitions 6 --topic xdclass-cluster-topic</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+t+'" alt="img_169.png" loading="lazy"></p><p><img src="'+i+'" alt="img_170.png" loading="lazy"></p><p><img src="'+n+'" alt="img_171.png" loading="lazy"></p><p><img src="'+c+'" alt="img_172.png" loading="lazy"></p><p>命令分解及注解 <code>./kafka-topics.sh</code></p><p>这是 Kafka 提供的用于管理主题的脚本。通过它可以创建、删除、列出主题等。 <code>--create</code></p><p>这个参数指定了要执行的操作是创建一个新的主题。 <code>--zookeeper 112.74.55.160:2181,112.74.55.160:2182,112.74.55.160:2183</code></p><p>这个参数指定了 ZooKeeper 的连接字符串，ZooKeeper 是 Kafka 用来管理元数据和集群状态的服务。 <code>112.74.55.160:2181，112.74.55.160:2182，112.74.55.160:2183</code> 是 ZooKeeper 集群的三个节点的地址和端口。 <code>--replication-factor 3</code></p><p>这个参数指定了主题的副本因子，也就是每个分区会有几个副本。 在这里，副本因子是 3，意味着每个分区的数据会有 3 份副本，分布在不同的 Kafka broker 上，以提高容错能力和可用性。 <code>--partitions 6</code></p><p>这个参数指定了主题的分区数量。 在这里，分区数量是 6，意味着这个主题的数据会被分布到 6 个分区中。更多的分区可以提高并行处理能力，但也会增加管理的复杂性。 <code>--topic xdclass-cluster-topic</code></p><p>这个参数指定了要创建的主题的名称。 在这里，主题的名称是 <code>xdclass-cluster-topic</code>。</p><p>总结</p><p>该命令的作用是：</p><p>在 <code>ZooKeeper</code> 集群（包含三个节点）上管理的 <code>Kafka</code> 集群中创建一个名为 xdclass-cluster-topic 的新主题。 该主题包含 6 个分区，并且每个分区有 3 个副本，以确保数据的高可用性和容错性。</p><p>这个设置适用于需要高可用性和并行处理能力的 Kafka 应用场景。</p>',21),d=[l];function _(g,m,k,u,h,f){return s(),e("div",null,d)}const K=a(r,[["render",_]]);export{b as __pageData,K as default};