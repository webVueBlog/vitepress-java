import{_ as i,c as a,o as t,a8 as o}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img_29.D2koztLG.png",l="/vitepress-java/assets/img_30.DQKmka22.png",e="/vitepress-java/assets/img_31.CKT4G2AV.png",r="/vitepress-java/assets/img_32.DHaGASpS.png",s="/vitepress-java/assets/img_33.CnnLIatJ.png",K=JSON.parse('{"title":"3.2-重要-分布式流处理平台Kafka核心概念介绍","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/7.md","filePath":"AKafka/7.md"}'),n={name:"AKafka/7.md"},c=o('<h1 id="_3-2-重要-分布式流处理平台kafka核心概念介绍" tabindex="-1">3.2-重要-分布式流处理平台Kafka核心概念介绍 <a class="header-anchor" href="#_3-2-重要-分布式流处理平台kafka核心概念介绍" aria-label="Permalink to &quot;3.2-重要-分布式流处理平台Kafka核心概念介绍&quot;">​</a></h1><p>核心概念：</p><p>Broker</p><ul><li>Kafka 的服务端程序，可以认为一个mq节点就是一个broker</li><li>broker存储topic的数据</li></ul><p>Producer生产者</p><ul><li>创建消息Message，然后发布到MQ中</li><li>该角色将消息发布到Kafka的topic中</li></ul><p>Consumer消费者</p><ul><li>消费队列里面的消息</li></ul><p>ConsumerGroup消费者组</p><ul><li>同个topic,广播发送给不同的group，一个group中只有一个consumer可以消费消息</li></ul><p>Topic</p><ul><li>每条发布到Kafka集群的消息都有一个类别，这个类别被称为Topic，主题的以上</li></ul><p>Partition分区</p><ul><li>kafka数据存储的基本单元，topic中的数据分割为一个或多个partition，每个topic至少有一个partition，是有序的。</li><li>一个Topic的多个partitions，被分布在kafka集群中的多个server上</li><li>消费者数量 &lt;= 小于或者等于Partition数量</li></ul><blockquote><p>一个Topic的多个partitions，被分布在kafka集群中的多个server上，kafka保证同一个partition的多个replication一定不会分配在同一台broker上</p></blockquote><p>注意：在不同分区存储的消息是不同的，和副本的概念要分清楚</p><p>consumer group 下订阅的topic下的每个分区只能分配给某个group下的某一个consumer，当然该分区还可以被分配给其他group。</p><p><img src="'+p+'" alt="img_29.png" loading="lazy"></p><p><img src="'+l+'" alt="img_30.png" loading="lazy"></p><p><img src="'+e+'" alt="img_31.png" loading="lazy"></p><p>Replication副本（备胎）</p><ul><li>同个Partition会有多个副本replication，多个副本的数据是一样的，当其他broker挂掉后，系统可以主动用副本提供服务。</li><li>默认每个topic的副本都是1（默认是没有副本，节省资源），也可以在创建topic的时候指定。</li><li>如果当前kafka集群只有3个broker节点，则replication-factor最大就是3了，如果创建副本为4，则会报错</li></ul><p>ReplicationLeader，ReplicationFollower</p><ul><li>Partition有多个副本，但只有一个replicationLeader负责该Partition和生产者消费者交互</li><li>ReplicationFollower只是做一个备份，从replicationLeader进行同步</li></ul><p>ReplicationManager</p><ul><li>负责Broker所有分区副本信息，Replication副本状态切换</li></ul><p>offset</p><ul><li>每个consumer实例需要为他消费的partition维护一个记录自己消费到哪里的偏移offset</li><li>kafka把offset保存在消费端的消费者组里</li></ul><p><img src="'+r+'" alt="img_32.png" loading="lazy"></p><p><img src="'+s+'" alt="img_33.png" loading="lazy"></p>',30),_=[c];function u(k,g,m,f,d,v){return t(),a("div",null,_)}const P=i(n,[["render",u]]);export{K as __pageData,P as default};