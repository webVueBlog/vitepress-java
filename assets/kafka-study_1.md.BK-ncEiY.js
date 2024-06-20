import{_ as s,c as a,o as n,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img.CXujcu3F.png",l="/vitepress-java/assets/img_1.D1L7o8hj.png",r="/vitepress-java/assets/img_2.Celk8Idc.png",i="/vitepress-java/assets/img_3.c0B93pYJ.png",t="/vitepress-java/assets/img_4.Hbv9WGIi.png",q=JSON.parse('{"title":"Kafka 使用Java实现数据的生产和消费demo","description":"","frontmatter":{},"headers":[],"relativePath":"kafka-study/1.md","filePath":"kafka-study/1.md"}'),c={name:"kafka-study/1.md"},o=p('<h1 id="kafka-使用java实现数据的生产和消费demo" tabindex="-1">Kafka 使用Java实现数据的生产和消费demo <a class="header-anchor" href="#kafka-使用java实现数据的生产和消费demo" aria-label="Permalink to &quot;Kafka 使用Java实现数据的生产和消费demo&quot;">​</a></h1><h2 id="kafka的介绍" tabindex="-1">Kafka的介绍 <a class="header-anchor" href="#kafka的介绍" aria-label="Permalink to &quot;Kafka的介绍&quot;">​</a></h2><p>Kafka是一种高吞吐量的分布式发布订阅消息系统，它可以处理消费者规模的网站中的所有动作流数据。</p><p>Kafka 有如下特性：</p><ul><li>以时间复杂度为O(1)的方式提供消息持久化能力，即使对TB级以上数据也能保证常数时间复杂度的访问性能。</li><li>高吞吐率。即使在非常廉价的商用机器上也能做到单机支持每秒100K条以上消息的传输。</li><li>支持Kafka Server间的消息分区，及分布式消费，同时保证每个Partition内的消息顺序传输。</li><li>同时支持离线数据处理和实时数据处理。</li><li>Scale out：支持在线水平扩展。</li></ul><h2 id="kafka的术语" tabindex="-1">kafka的术语 <a class="header-anchor" href="#kafka的术语" aria-label="Permalink to &quot;kafka的术语&quot;">​</a></h2><ol><li>Broker：Kafka集群包含一个或多个服务器，这种服务器被称为broker。</li><li>Topic：每条发布到Kafka集群的消息都有一个类别，这个类别被称为Topic。（物理上不同Topic的消息分开存储，逻辑上一个Topic的消息虽然保存于一个或多个broker上但用户只需指定消息的Topic即可生产或消费数据而不必关心数据存于何处）</li><li>Partition：Partition是物理上的概念，每个Topic包含一个或多个Partition。</li><li>Producer：负责发布消息到Kafka broker。</li><li>Consumer：消息消费者，向Kafka broker读取消息的客户端。</li><li>Consumer Group:每个Consumer属于一个特定的Consumer Group（可为每个Consumer指定group name，若不指定group name则属于默认的group）。</li></ol><h2 id="kafka核心api" tabindex="-1">kafka核心Api <a class="header-anchor" href="#kafka核心api" aria-label="Permalink to &quot;kafka核心Api&quot;">​</a></h2><p>kafka有四个核心API</p><ul><li>应用程序使用producer API发布消息到1个或多个topic中。</li><li>应用程序使用consumer API来订阅一个或多个topic,并处理产生的消息。</li><li>应用程序使用streams API充当一个流处理器,从1个或多个topic消费输入流,并产生一个输出流到1个或多个topic,有效地将输入流转换到输出流。</li><li>connector API允许构建或运行可重复使用的生产者或消费者,将topic链接到现有的应用程序或数据系统。</li></ul><p><img src="'+e+`" alt="img.png" loading="lazy"></p><h2 id="kafka-应用场景" tabindex="-1">kafka 应用场景 <a class="header-anchor" href="#kafka-应用场景" aria-label="Permalink to &quot;kafka 应用场景&quot;">​</a></h2><ol><li>构建可在系统或应用程序之间可靠获取数据的实时流数据管道。</li><li>构建实时流应用程序，可以转换或响应数据流。</li></ol><h2 id="开发准备" tabindex="-1">开发准备 <a class="header-anchor" href="#开发准备" aria-label="Permalink to &quot;开发准备&quot;">​</a></h2><p>如果我们要开发一个kafka的程序，应该做些什么呢？</p><p>首先，在搭建好kafka环境之后，我们要考虑的是我们是生产者还是消费者，也就是消息的发送者还是接受者。</p><p>用的开发语言是Java，构建工具Maven。</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.apache.kafka&lt;/groupId&gt;</span></span>
<span class="line"><span>     &lt;artifactId&gt;kafka_2.12&lt;/artifactId&gt;</span></span>
<span class="line"><span>     &lt;version&gt;1.0.0&lt;/version&gt;</span></span>
<span class="line"><span>        &lt;scope&gt;provided&lt;/scope&gt; </span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>         &lt;groupId&gt;org.apache.kafka&lt;/groupId&gt;</span></span>
<span class="line"><span>         &lt;artifactId&gt;kafka-clients&lt;/artifactId&gt;</span></span>
<span class="line"><span>          &lt;version&gt;1.0.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.apache.kafka&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;kafka-streams&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;1.0.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="kafka-producer" tabindex="-1">Kafka Producer <a class="header-anchor" href="#kafka-producer" aria-label="Permalink to &quot;Kafka Producer&quot;">​</a></h2><p>在开发生产的时候，先简单的介绍下kafka各种配置说明：</p><ol><li>bootstrap.servers： kafka的地址。</li><li>acks:消息的确认机制，默认值是0。</li><li>acks=0：如果设置为0，生产者不会等待kafka的响应。</li><li>acks=1：这个配置意味着kafka会把这条消息写到本地日志文件中，但是不会等待集群中其他机器的成功响应。</li><li>acks=all：这个配置意味着leader会等待所有的follower同步完成。这个确保消息不会丢失，除非kafka集群中所有机器挂掉。这是最强的可用性保证。</li><li>retries：配置为大于0的值的话，客户端会在消息发送失败时重新发送。</li><li>batch.size:当多条消息需要发送到同一个分区时，生产者会尝试合并网络请求。这会提高client和生产者的效率。</li><li>key.serializer: 键序列化，默认org.apache.kafka.common.serialization.StringDeserializer。</li><li>value.deserializer:值序列化，默认org.apache.kafka.common.serialization.StringDeserializer。</li></ol><p>那么我们kafka 的producer配置如下:</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>        Properties props = new Properties();</span></span>
<span class="line"><span>        props.put(&quot;bootstrap.servers&quot;, &quot;master:9092,slave1:9092,slave2:9092&quot;);</span></span>
<span class="line"><span>        props.put(&quot;acks&quot;, &quot;all&quot;);</span></span>
<span class="line"><span>        props.put(&quot;retries&quot;, 0);</span></span>
<span class="line"><span>        props.put(&quot;batch.size&quot;, 16384);</span></span>
<span class="line"><span>        props.put(&quot;key.serializer&quot;, StringSerializer.class.getName());</span></span>
<span class="line"><span>        props.put(&quot;value.serializer&quot;, StringSerializer.class.getName());</span></span>
<span class="line"><span>        KafkaProducer&lt;String, String&gt; producer = new KafkaProducer&lt;String, String&gt;(props);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>kafka的配置添加之后，我们便开始生产数据，生产数据代码只需如下就行:</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> producer.send(new ProducerRecord&lt;String, String&gt;(topic,key,value));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>topic: 消息队列的名称，可以先行在kafka服务中进行创建。如果kafka中并未创建该topic，那么便会自动创建！</li><li>key:键值，也就是value对应的值，和Map类似。</li><li>value:要发送的数据，数据格式为String类型的。</li></ol><p>在写好生产者程序之后，那我们先来生产吧！</p><p>我这里发送的消息为:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> String messageStr=&quot;你好，这是第&quot;+messageNo+&quot;条数据&quot;;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>并且只发送1000条就退出，结果如下:</p><p><img src="`+l+'" alt="img_1.png" loading="lazy"></p><p><img src="'+r+`" alt="img_2.png" loading="lazy"></p><p>可以看到信息成功的打印了。</p><p>如果不想用程序进行验证程序是否发送成功，以及消息发送的准确性，可以在kafka服务器上使用命令查看。</p><h2 id="kafka-consumer" tabindex="-1">Kafka Consumer <a class="header-anchor" href="#kafka-consumer" aria-label="Permalink to &quot;Kafka Consumer&quot;">​</a></h2><p>kafka消费这块应该来说是重点，毕竟大部分的时候，我们主要使用的是将数据进行消费。</p><p>kafka消费的配置如下:</p><ol><li>bootstrap.servers： kafka的地址。</li><li>group.id：组名 不同组名可以重复消费。例如你先使用了组名A消费了kafka的1000条数据，但是你还想再次进行消费这1000条数据，并且不想重新去产生，那么这里你只需要更改组名就可以重复消费了。</li><li>enable.auto.commit：是否自动提交，默认为true。</li><li>auto.commit.interval.ms: 从poll(拉)的回话处理时长。</li><li>session.timeout.ms:超时时间。</li><li>max.poll.records:一次最大拉取的条数。</li><li>auto.offset.reset：消费规则，默认earliest 。</li><li>earliest: 当各分区下有已提交的offset时，从提交的offset开始消费；无提交的offset时，从头开始消费 。</li><li>latest: 当各分区下有已提交的offset时，从提交的offset开始消费；无提交的offset时，消费新产生的该分区下的数据 。</li><li>none: topic各分区都存在已提交的offset时，从offset后开始消费；只要有一个分区不存在已提交的offset，则抛出异常。</li><li>key.serializer: 键序列化，默认org.apache.kafka.common.serialization.StringDeserializer。</li><li>value.deserializer:值序列化，默认org.apache.kafka.common.serialization.StringDeserializer。</li></ol><p>那么我们kafka 的consumer配置如下:</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    Properties props = new Properties();</span></span>
<span class="line"><span>        props.put(&quot;bootstrap.servers&quot;, &quot;master:9092,slave1:9092,slave2:9092&quot;);</span></span>
<span class="line"><span>        props.put(&quot;group.id&quot;, GROUPID);</span></span>
<span class="line"><span>        props.put(&quot;enable.auto.commit&quot;, &quot;true&quot;);</span></span>
<span class="line"><span>        props.put(&quot;auto.commit.interval.ms&quot;, &quot;1000&quot;);</span></span>
<span class="line"><span>        props.put(&quot;session.timeout.ms&quot;, &quot;30000&quot;);</span></span>
<span class="line"><span>        props.put(&quot;max.poll.records&quot;, 1000);</span></span>
<span class="line"><span>        props.put(&quot;auto.offset.reset&quot;, &quot;earliest&quot;);</span></span>
<span class="line"><span>        props.put(&quot;key.deserializer&quot;, StringDeserializer.class.getName());</span></span>
<span class="line"><span>        props.put(&quot;value.deserializer&quot;, StringDeserializer.class.getName());</span></span>
<span class="line"><span>        KafkaConsumer&lt;String, String&gt; consumer = new KafkaConsumer&lt;String, String&gt;(props);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>由于我这是设置的自动提交，所以消费代码如下:</p><p>我们需要先订阅一个topic，也就是指定消费哪一个topic。</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>consumer.subscribe(Arrays.asList(topic));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>订阅之后，我们再从kafka中拉取数据:</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>ConsumerRecords&lt;String, String&gt; msgList=consumer.poll(1000);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一般来说进行消费会使用监听，这里我们就用for(;;)来进行监听， 并且设置消费1000条就退出！</p><p><img src="`+i+'" alt="img_3.png" loading="lazy"></p><p><img src="'+t+`" alt="img_4.png" loading="lazy"></p><p>可以看到我们这里已经成功消费了生产的数据了。</p><h2 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h2><p>那么生产者和消费者的代码如下:</p><p>生产者:</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import java.util.Properties;</span></span>
<span class="line"><span>import org.apache.kafka.clients.producer.KafkaProducer;</span></span>
<span class="line"><span>import org.apache.kafka.clients.producer.ProducerRecord;</span></span>
<span class="line"><span>import org.apache.kafka.common.serialization.StringSerializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class KafkaProducerTest implements Runnable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final KafkaProducer&lt;String, String&gt; producer;</span></span>
<span class="line"><span>    private final String topic;</span></span>
<span class="line"><span>    public KafkaProducerTest(String topicName) {</span></span>
<span class="line"><span>        Properties props = new Properties();</span></span>
<span class="line"><span>        props.put(&quot;bootstrap.servers&quot;, &quot;master:9092,slave1:9092,slave2:9092&quot;);</span></span>
<span class="line"><span>        props.put(&quot;acks&quot;, &quot;all&quot;);</span></span>
<span class="line"><span>        props.put(&quot;retries&quot;, 0);</span></span>
<span class="line"><span>        props.put(&quot;batch.size&quot;, 16384);</span></span>
<span class="line"><span>        props.put(&quot;key.serializer&quot;, StringSerializer.class.getName());</span></span>
<span class="line"><span>        props.put(&quot;value.serializer&quot;, StringSerializer.class.getName());</span></span>
<span class="line"><span>        this.producer = new KafkaProducer&lt;String, String&gt;(props);</span></span>
<span class="line"><span>        this.topic = topicName;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        int messageNo = 1;</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            for(;;) {</span></span>
<span class="line"><span>                String messageStr=&quot;你好，这是第&quot;+messageNo+&quot;条数据&quot;;</span></span>
<span class="line"><span>                producer.send(new ProducerRecord&lt;String, String&gt;(topic, &quot;Message&quot;, messageStr));</span></span>
<span class="line"><span>                //生产了100条就打印</span></span>
<span class="line"><span>                if(messageNo%100==0){</span></span>
<span class="line"><span>                    System.out.println(&quot;发送的信息:&quot; + messageStr);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                //生产1000条就退出</span></span>
<span class="line"><span>                if(messageNo%1000==0){</span></span>
<span class="line"><span>                    System.out.println(&quot;成功发送了&quot;+messageNo+&quot;条&quot;);</span></span>
<span class="line"><span>                    break;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                messageNo++;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } catch (Exception e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            producer.close();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String args[]) {</span></span>
<span class="line"><span>        KafkaProducerTest test = new KafkaProducerTest(&quot;KAFKA_TEST&quot;);</span></span>
<span class="line"><span>        Thread thread = new Thread(test);</span></span>
<span class="line"><span>        thread.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>消费者:</p><div class="language-angular2html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">angular2html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import java.util.Arrays;</span></span>
<span class="line"><span>import java.util.Properties;</span></span>
<span class="line"><span>import org.apache.kafka.clients.consumer.ConsumerRecord;</span></span>
<span class="line"><span>import org.apache.kafka.clients.consumer.ConsumerRecords;</span></span>
<span class="line"><span>import org.apache.kafka.clients.consumer.KafkaConsumer;</span></span>
<span class="line"><span>import org.apache.kafka.common.serialization.StringDeserializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class KafkaConsumerTest implements Runnable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final KafkaConsumer&lt;String, String&gt; consumer;</span></span>
<span class="line"><span>    private ConsumerRecords&lt;String, String&gt; msgList;</span></span>
<span class="line"><span>    private final String topic;</span></span>
<span class="line"><span>    private static final String GROUPID = &quot;groupA&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public KafkaConsumerTest(String topicName) {</span></span>
<span class="line"><span>        Properties props = new Properties();</span></span>
<span class="line"><span>        props.put(&quot;bootstrap.servers&quot;, &quot;master:9092,slave1:9092,slave2:9092&quot;);</span></span>
<span class="line"><span>        props.put(&quot;group.id&quot;, GROUPID);</span></span>
<span class="line"><span>        props.put(&quot;enable.auto.commit&quot;, &quot;true&quot;);</span></span>
<span class="line"><span>        props.put(&quot;auto.commit.interval.ms&quot;, &quot;1000&quot;);</span></span>
<span class="line"><span>        props.put(&quot;session.timeout.ms&quot;, &quot;30000&quot;);</span></span>
<span class="line"><span>        props.put(&quot;auto.offset.reset&quot;, &quot;earliest&quot;);</span></span>
<span class="line"><span>        props.put(&quot;key.deserializer&quot;, StringDeserializer.class.getName());</span></span>
<span class="line"><span>        props.put(&quot;value.deserializer&quot;, StringDeserializer.class.getName());</span></span>
<span class="line"><span>        this.consumer = new KafkaConsumer&lt;String, String&gt;(props);</span></span>
<span class="line"><span>        this.topic = topicName;</span></span>
<span class="line"><span>        this.consumer.subscribe(Arrays.asList(topic));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        int messageNo = 1;</span></span>
<span class="line"><span>        System.out.println(&quot;---------开始消费---------&quot;);</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            for (;;) {</span></span>
<span class="line"><span>                    msgList = consumer.poll(1000);</span></span>
<span class="line"><span>                    if(null!=msgList&amp;&amp;msgList.count()&gt;0){</span></span>
<span class="line"><span>                    for (ConsumerRecord&lt;String, String&gt; record : msgList) {</span></span>
<span class="line"><span>                        //消费100条就打印 ,但打印的数据不一定是这个规律的</span></span>
<span class="line"><span>                        if(messageNo%100==0){</span></span>
<span class="line"><span>                            System.out.println(messageNo+&quot;=======receive: key = &quot; + record.key() + &quot;, value = &quot; + record.value()+&quot; offset===&quot;+record.offset());</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        //当消费了1000条就退出</span></span>
<span class="line"><span>                        if(messageNo%1000==0){</span></span>
<span class="line"><span>                            break;</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                        messageNo++;</span></span>
<span class="line"><span>                    }</span></span>
<span class="line"><span>                }else{  </span></span>
<span class="line"><span>                    Thread.sleep(1000);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }       </span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            consumer.close();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>    public static void main(String args[]) {</span></span>
<span class="line"><span>        KafkaConsumerTest test1 = new KafkaConsumerTest(&quot;KAFKA_TEST&quot;);</span></span>
<span class="line"><span>        Thread thread1 = new Thread(test1);</span></span>
<span class="line"><span>        thread1.start();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div><p>注: master、slave1、slave2 是因为我在自己的环境做了关系映射，这个可以换成服务器的IP。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>简单的开发一个kafka的程序需要以下步骤:</p><ol><li>成功搭建kafka服务器，并成功启动！</li><li>得到kafka服务信息，然后在代码中进行相应的配置。</li><li>配置完成之后，监听kafka中的消息队列是否有消息产生。</li><li>将产生的数据进行业务逻辑处理！</li></ol>`,59),u=[o];function b(m,d,g,k,h,f){return n(),a("div",null,u)}const S=s(c,[["render",b]]);export{q as __pageData,S as default};
