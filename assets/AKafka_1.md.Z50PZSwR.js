import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_5.Cy5qjd-K.png",l="/vitepress-java/assets/img_7.BvDuZx1y.png",i="/vitepress-java/assets/img_8.8bENk7Pr.png",r="/vitepress-java/assets/img_9.CuqvOp28.png",c="/vitepress-java/assets/img_10.DbvnAoOy.png",t="/vitepress-java/assets/img_6.DIioWM7f.png",b="/vitepress-java/assets/img_11.B5kb9vDO.png",u="/vitepress-java/assets/img_12.Dkt13-AR.png",o="/vitepress-java/assets/img_13.B_6sukGs.png",y=JSON.parse('{"title":"1.2-分布式流处理平台Kafka专题课程大纲速览","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/1.md","filePath":"AKafka/1.md"}'),m={name:"AKafka/1.md"},d=p(`<h1 id="_1-2-分布式流处理平台kafka专题课程大纲速览" tabindex="-1">1.2-分布式流处理平台Kafka专题课程大纲速览 <a class="header-anchor" href="#_1-2-分布式流处理平台kafka专题课程大纲速览" aria-label="Permalink to &quot;1.2-分布式流处理平台Kafka专题课程大纲速览&quot;">​</a></h1><p>kafkaAdminTest</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class KafkaAdminTest {</span></span>
<span class="line"><span> private static final String TOPIC_NAME = &quot;user.register.topic&quot;;</span></span>
<span class="line"><span> /**</span></span>
<span class="line"><span>    设置admin客户端</span></span>
<span class="line"><span> **/</span></span>
<span class="line"><span> public static AdminClient initAdminClient() {</span></span>
<span class="line"><span>  Properties properties = new Properties();</span></span>
<span class="line"><span>  Properties.setProperty(AdminClientConfig.BOOTSTRAP_SERVERS_CONFIG, &quot;xxx:9092,xxx:9093,xxx.9094&quot;);</span></span>
<span class="line"><span>  AdminClient adminClient = AdminClient.create(properties);</span></span>
<span class="line"><span>  return adminClient;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //创建topic</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span> public void createTopicTest() {</span></span>
<span class="line"><span>  AdminClient adminClient = initAdminClient();</span></span>
<span class="line"><span>  //指定分区数量，副本数量</span></span>
<span class="line"><span>  NewTopic newTopic = new NewTopic(TOPIC_NAME, 6, (short) 3);</span></span>
<span class="line"><span>  CreateTopicsResult createTopicsResult = adminClient.createTopics(Arrays.asList(newTopic));</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>   createTopicsResult.all().get();</span></span>
<span class="line"><span>  } catch (InterruptedException | ExecutionException e) {</span></span>
<span class="line"><span>   e.printStackTrace();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //列举topic列表</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span> public void listTopicTest() throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span>  AdminClient adminClient = initAdminClient();</span></span>
<span class="line"><span>  //是否查看内部的topic，可以不用</span></span>
<span class="line"><span>  ListTopicsOptions options = new ListTopicsOptions();</span></span>
<span class="line"><span>  options.listInternal(true);</span></span>
<span class="line"><span>  ListTopicsResult listTopicsResult = adminClient.listTopics(options);</span></span>
<span class="line"><span>  Set&lt;String&gt; topics = listTopicsResult.names().get();</span></span>
<span class="line"><span>  for(String name: topics) {</span></span>
<span class="line"><span>   System.err.println(name);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 删除topic</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span> public void delTopicTest() throws ExcecutionException, InterruptedException {</span></span>
<span class="line"><span>  AdminClient adminClient = initAdminClient();</span></span>
<span class="line"><span>  DeleteTopicsResult deleteTopicsResult = adminClient.deleteTopics(Arrays.asList(&quot;user.register.topic&quot;));</span></span>
<span class="line"><span>  deleteTopicsResult.all().get();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 查看某个topic详情</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span> public void detailTopicTest() throws ExecutionException, InterruptedException {</span></span>
<span class="line"><span>  AdminClient adminClient = initAdminClient();</span></span>
<span class="line"><span>  DescribeTopicsResult describeTopicsResult = adminClient.describeTopics(Arrays.asList(TOPIC_NMAE));</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span> Map&lt;String, TopicDescription&gt; topicDescriptionMap = describeTopicsResult.all().get();</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> for(Map.Entry&lt;String, TopicDescription&gt; entry: topicDescriptionMap.entrySet()) {</span></span>
<span class="line"><span> System.err.println(entry.getKey() + &quot; &quot; + entry.getValue());</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p><img src="`+e+'" alt="img_5.png" loading="lazy"></p><p>KafkaConsumerTest</p><p><img src="'+l+'" alt="img_7.png" loading="lazy"></p><p><img src="'+i+'" alt="img_8.png" loading="lazy"></p><p><img src="'+r+'" alt="img_9.png" loading="lazy"></p><p><img src="'+c+'" alt="img_10.png" loading="lazy"></p><p>KafkaProducerTest</p><p><img src="'+t+`" alt="img_6.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public class KafkaProducerTest {</span></span>
<span class="line"><span> public static final String TOPIC_NAME = &quot;class-topic-test-cluster&quot;;</span></span>
<span class="line"><span> public static Properties getProperties() {</span></span>
<span class="line"><span>  Properties properties = new Properties();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span> properties.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, &quot;192.168.6.132:9092,192.168.6.133:9092,192.168.6.134:9092&quot;);</span></span>
<span class="line"><span> //properties.put(&quot;bootstrap.servers&quot;, &quot;&quot;);</span></span>
<span class="line"><span> //当producer向leader发送数据时，可以通过request.required.acks参数来设置数据可靠性的级别，分别是0，1，all。</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> properties.put(ProducerConfig.ACKS_CONFIG, &quot;all&quot;);</span></span>
<span class="line"><span> //properties.put(&quot;acks&quot;, &quot;all&quot;);</span></span>
<span class="line"><span> //请求失败，生产者会自动重试，指定是0次，如果启用重试，则会有重复消息的可能性。</span></span>
<span class="line"><span> props.put(&quot;retries&quot;, 0);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //producer可以用来缓存records，并批量发送，以减少请求数，该参数指定了缓存的大小，单位是字节，默认是33554432，即32MB。</span></span>
<span class="line"><span> properties.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);</span></span>
<span class="line"><span> //生产者缓存每个分区未发送的消息，缓存的大小是通过batch.size配置指定的，默认值是16kb</span></span>
<span class="line"><span> props.put(&quot;batch.size&quot;, 16384);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //默认值就是0，消息是立刻发送的，即使batch.size缓冲空间还没有满</span></span>
<span class="line"><span> //如果想减少请求的数量，可以设置 linger.ms 大于0，即消息在缓冲区保留的时间，超过设置的值就会被提交到服务端</span></span>
<span class="line"><span> //通俗解释是，本该早就发出去的消息被迫至少等待来linger.ms时间，相对于这时间内积累来更多消息，批量发送减少请求</span></span>
<span class="line"><span> //如果batch被填满或者linger.ms达到上限，满足某中一个就会被发送</span></span>
<span class="line"><span> props.put(&quot;linger.ms&quot;, 5);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //生产者使用的压缩类型，默认是none，可选的有gzip、snappy、lz4</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //buffer.memory的用来约束kafka Producer能够使用的内存缓冲的大小的，默认值32MB。</span></span>
<span class="line"><span> //如果buffer.memory设置的太小，可能导致消息快速的写入内存缓冲里，但Sender线程来不及把消息发送到kafka服务器</span></span>
<span class="line"><span> //会造成内存缓冲很快就被写满，而一旦被写满，就会阻塞用户线程，不让继续往kafka写消息来</span></span>
<span class="line"><span> // buffer.memory要大于batch.size，否则会报申请内存不足的错误，不要超过物理内存，根据实践情况调整</span></span>
<span class="line"><span> props.put(&quot;buffer.memory&quot;, 33554432);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //key的序列化器，将用户提供的key和value对象ProducerRecord进行序列化处理，key.serizlizer必须被设置，</span></span>
<span class="line"><span> //即使消息中没有指定key，序列化器必须是一个实</span></span>
<span class="line"><span> //org.apache.kafka.common.serizlization.Serializer接口的类，</span></span>
<span class="line"><span> //将key序列化成字节数组。</span></span>
<span class="line"><span> props.put(&quot;key.serializer&quot;, &quot;org.apache.kafka.common.serialization.StringSerializer&quot;);</span></span>
<span class="line"><span> props.put(&quot;value.serializer&quot;, &quot;org.apache.kafka.common.serialization.StringSerializer&quot;);</span></span>
<span class="line"><span> return props;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //send()方法是异步的，添加消息到缓冲区等待发送，并立即返回</span></span>
<span class="line"><span> //生产者将单个消息批量在一起发送来提高效率，即 batch.size 和 linger.ms 结合</span></span>
<span class="line"><span> //实现同步发送：一条消息发送之后，会阻塞当前线程，直至返回ack，发送消息后返回的一个Future对象，调用get即可。</span></span>
<span class="line"><span> //消息发送主要是两个线程：一个是Main用户主线程，一个是Sender线程</span></span>
<span class="line"><span> //a.main线程发送消息到RecordAccumulator即返回</span></span>
<span class="line"><span> //b.sender线程从RecordAccumulator拉取消息发送到broker</span></span>
<span class="line"><span> //c.batch.size和linger.ms两个参数可以影响sender线程发送次数</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span> public void testSend() {</span></span>
<span class="line"><span>    Properties properties = getProperties();</span></span>
<span class="line"><span>    Producer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(properties);</span></span>
<span class="line"><span>    for( ini i = 0; i &lt; 3; i++) {</span></span>
<span class="line"><span>        Future&lt;RecordMetadata&gt; future = producer.send(new ProducerRecord&lt;&gt;(TOPIC_NAME, &quot;key-test-&quot; + i, );</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>         //不关系结果则不用写这些内容</span></span>
<span class="line"><span>         RecordMetadata recordMetadata = future.get();</span></span>
<span class="line"><span>         //topic - 分区编号</span></span>
<span class="line"><span>         System.out.println(&quot;发送状态:&quot;+recordMetadata.toString());</span></span>
<span class="line"><span>        } catch(InterruptedException e) {</span></span>
<span class="line"><span>         e.printStackTrace();</span></span>
<span class="line"><span>        } catch(ExecutionException e) {</span></span>
<span class="line"><span>         e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    producer.close();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> // 发送消息携带回调函数</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span> public void testSendWithCallback() {</span></span>
<span class="line"><span>  Properties properties = getProperties();</span></span>
<span class="line"><span>  Producer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(properties);</span></span>
<span class="line"><span>  for(int i = 0; i &lt; 9; i++) {</span></span>
<span class="line"><span>   producer.send(new ProducerRecord&lt;&gt;(TOPIC_NAME, &quot;class-key&quot;+i, &quot;class-value&quot;+i), new Callback() {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onCompletion(RecordMetadata metadata, Exception exception) {</span></span>
<span class="line"><span>        if (exception == null) {</span></span>
<span class="line"><span>            System.err.println(&quot;发送状态“ + metadata.toString());</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            exception.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  producer.close();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //发送消息携带回调函数，指定某个分区</span></span>
<span class="line"><span> //实现顺序消息</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span> public void testSendWithCallbackAndPartition() {</span></span>
<span class="line"><span>    Properties properties = getProperties();</span></span>
<span class="line"><span>    Producer&lt;String, String&gt; producer = new KafkaProducer&lt;&gt;(prpperties);</span></span>
<span class="line"><span>    for(int i = 0; i &lt; 10; i++) {</span></span>
<span class="line"><span>        producer.send(new ProducerRecord&lt;&gt;(&quot;sp-topic-test&quot;, 4, &quot;class-key&quot; + i, &quot;class-value&quot;), new Callback() {</span></span>
<span class="line"><span>            @Override</span></span>
<span class="line"><span>            public void onCompletion(RecordMetadata metadata, Exception exception) {</span></span>
<span class="line"><span>                if (exception == null) {</span></span>
<span class="line"><span>                 System.err.println(&quot;发送状态:&quot; + metadata.toString());</span></span>
<span class="line"><span>                } else {</span></span>
<span class="line"><span>                 exception.printStackTrace();</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        });</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    producer.close();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br></div></div><p>KafkaApplicationTest</p><p><img src="`+b+'" alt="img_11.png" loading="lazy"></p><p><img src="'+u+'" alt="img_12.png" loading="lazy"></p><p><img src="'+o+'" alt="img_13.png" loading="lazy"></p>',16),g=[d];function _(k,T,q,f,v,C){return a(),n("div",null,g)}const h=s(m,[["render",_]]);export{y as __pageData,h as default};
