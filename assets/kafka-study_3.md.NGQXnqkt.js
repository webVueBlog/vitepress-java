import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const g=JSON.parse('{"title":"Kafka 使用Java实现数据的生产和消费demo","description":"","frontmatter":{},"headers":[],"relativePath":"kafka-study/3.md","filePath":"kafka-study/3.md"}'),e={name:"kafka-study/3.md"},t=p(`<h1 id="kafka-使用java实现数据的生产和消费demo" tabindex="-1">Kafka 使用Java实现数据的生产和消费demo <a class="header-anchor" href="#kafka-使用java实现数据的生产和消费demo" aria-label="Permalink to &quot;Kafka 使用Java实现数据的生产和消费demo&quot;">​</a></h1><p>代码</p><p>那么生产者和消费者的代码如下:</p><p>生产者:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import java.util.Properties;</span></span>
<span class="line"><span>import org.apache.kafka.clients.producer.KafkaProducer;</span></span>
<span class="line"><span>import org.apache.kafka.clients.producer.ProducerRecord;</span></span>
<span class="line"><span>import org.apache.kafka.common.serialization.StringSerializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class KafkaProducerTest implements Runnable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	private final KafkaProducer&lt;String, String&gt; producer;</span></span>
<span class="line"><span>	private final String topic;</span></span>
<span class="line"><span>	public KafkaProducerTest(String topicName) {</span></span>
<span class="line"><span>		Properties props = new Properties();</span></span>
<span class="line"><span>		props.put(&quot;bootstrap.servers&quot;, &quot;master:9092,slave1:9092,slave2:9092&quot;);</span></span>
<span class="line"><span>		props.put(&quot;acks&quot;, &quot;all&quot;);</span></span>
<span class="line"><span>		props.put(&quot;retries&quot;, 0);</span></span>
<span class="line"><span>		props.put(&quot;batch.size&quot;, 16384);</span></span>
<span class="line"><span>		props.put(&quot;key.serializer&quot;, StringSerializer.class.getName());</span></span>
<span class="line"><span>		props.put(&quot;value.serializer&quot;, StringSerializer.class.getName());</span></span>
<span class="line"><span>		this.producer = new KafkaProducer&lt;String, String&gt;(props);</span></span>
<span class="line"><span>		this.topic = topicName;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void run() {</span></span>
<span class="line"><span>		int messageNo = 1;</span></span>
<span class="line"><span>		try {</span></span>
<span class="line"><span>			for(;;) {</span></span>
<span class="line"><span>				String messageStr=&quot;你好，这是第&quot;+messageNo+&quot;条数据&quot;;</span></span>
<span class="line"><span>				producer.send(new ProducerRecord&lt;String, String&gt;(topic, &quot;Message&quot;, messageStr));</span></span>
<span class="line"><span>				//生产了100条就打印</span></span>
<span class="line"><span>				if(messageNo%100==0){</span></span>
<span class="line"><span>					System.out.println(&quot;发送的信息:&quot; + messageStr);</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				//生产1000条就退出</span></span>
<span class="line"><span>				if(messageNo%1000==0){</span></span>
<span class="line"><span>					System.out.println(&quot;成功发送了&quot;+messageNo+&quot;条&quot;);</span></span>
<span class="line"><span>					break;</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>				messageNo++;</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		} catch (Exception e) {</span></span>
<span class="line"><span>			e.printStackTrace();</span></span>
<span class="line"><span>		} finally {</span></span>
<span class="line"><span>			producer.close();</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	</span></span>
<span class="line"><span>	public static void main(String args[]) {</span></span>
<span class="line"><span>		KafkaProducerTest test = new KafkaProducerTest(&quot;KAFKA_TEST&quot;);</span></span>
<span class="line"><span>		Thread thread = new Thread(test);</span></span>
<span class="line"><span>		thread.start();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>消费者:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import java.util.Arrays;</span></span>
<span class="line"><span>import java.util.Properties;</span></span>
<span class="line"><span>import org.apache.kafka.clients.consumer.ConsumerRecord;</span></span>
<span class="line"><span>import org.apache.kafka.clients.consumer.ConsumerRecords;</span></span>
<span class="line"><span>import org.apache.kafka.clients.consumer.KafkaConsumer;</span></span>
<span class="line"><span>import org.apache.kafka.common.serialization.StringDeserializer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class KafkaConsumerTest implements Runnable {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	private final KafkaConsumer&lt;String, String&gt; consumer;</span></span>
<span class="line"><span>	private ConsumerRecords&lt;String, String&gt; msgList;</span></span>
<span class="line"><span>	private final String topic;</span></span>
<span class="line"><span>	private static final String GROUPID = &quot;groupA&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	public KafkaConsumerTest(String topicName) {</span></span>
<span class="line"><span>		Properties props = new Properties();</span></span>
<span class="line"><span>		props.put(&quot;bootstrap.servers&quot;, &quot;master:9092,slave1:9092,slave2:9092&quot;);</span></span>
<span class="line"><span>		props.put(&quot;group.id&quot;, GROUPID);</span></span>
<span class="line"><span>		props.put(&quot;enable.auto.commit&quot;, &quot;true&quot;);</span></span>
<span class="line"><span>		props.put(&quot;auto.commit.interval.ms&quot;, &quot;1000&quot;);</span></span>
<span class="line"><span>		props.put(&quot;session.timeout.ms&quot;, &quot;30000&quot;);</span></span>
<span class="line"><span>		props.put(&quot;auto.offset.reset&quot;, &quot;earliest&quot;);</span></span>
<span class="line"><span>		props.put(&quot;key.deserializer&quot;, StringDeserializer.class.getName());</span></span>
<span class="line"><span>		props.put(&quot;value.deserializer&quot;, StringDeserializer.class.getName());</span></span>
<span class="line"><span>		this.consumer = new KafkaConsumer&lt;String, String&gt;(props);</span></span>
<span class="line"><span>		this.topic = topicName;</span></span>
<span class="line"><span>		this.consumer.subscribe(Arrays.asList(topic));</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	@Override</span></span>
<span class="line"><span>	public void run() {</span></span>
<span class="line"><span>		int messageNo = 1;</span></span>
<span class="line"><span>		System.out.println(&quot;---------开始消费---------&quot;);</span></span>
<span class="line"><span>		try {</span></span>
<span class="line"><span>			for (;;) {</span></span>
<span class="line"><span>					msgList = consumer.poll(1000);</span></span>
<span class="line"><span>					if(null!=msgList&amp;&amp;msgList.count()&gt;0){</span></span>
<span class="line"><span>					for (ConsumerRecord&lt;String, String&gt; record : msgList) {</span></span>
<span class="line"><span>						//消费100条就打印 ,但打印的数据不一定是这个规律的</span></span>
<span class="line"><span>						if(messageNo%100==0){</span></span>
<span class="line"><span>							System.out.println(messageNo+&quot;=======receive: key = &quot; + record.key() + &quot;, value = &quot; + record.value()+&quot; offset===&quot;+record.offset());</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>						//当消费了1000条就退出</span></span>
<span class="line"><span>						if(messageNo%1000==0){</span></span>
<span class="line"><span>							break;</span></span>
<span class="line"><span>						}</span></span>
<span class="line"><span>						messageNo++;</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>				}else{	</span></span>
<span class="line"><span>					Thread.sleep(1000);</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}		</span></span>
<span class="line"><span>		} catch (InterruptedException e) {</span></span>
<span class="line"><span>			e.printStackTrace();</span></span>
<span class="line"><span>		} finally {</span></span>
<span class="line"><span>			consumer.close();</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}  </span></span>
<span class="line"><span>	public static void main(String args[]) {</span></span>
<span class="line"><span>		KafkaConsumerTest test1 = new KafkaConsumerTest(&quot;KAFKA_TEST&quot;);</span></span>
<span class="line"><span>		Thread thread1 = new Thread(test1);</span></span>
<span class="line"><span>		thread1.start();</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div>`,7),l=[t];function r(i,c,u,b,o,m){return a(),n("div",null,l)}const q=s(e,[["render",r]]);export{g as __pageData,q as default};
