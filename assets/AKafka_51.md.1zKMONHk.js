import{_ as a,c as p,o as s,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const n="/vitepress-java/assets/img_158.Dy17duQ4.png",i="/vitepress-java/assets/img_159.C65ErYjA.png",t="/vitepress-java/assets/img_160.ARbUfQX3.png",S=JSON.parse('{"title":"10.4-关于 Kafka的其他特性和技术选型建议","description":"","frontmatter":{},"headers":[],"relativePath":"AKafka/51.md","filePath":"AKafka/51.md"}'),l={name:"AKafka/51.md"},o=e('<h1 id="_10-4-关于-kafka的其他特性和技术选型建议" tabindex="-1">10.4-关于 Kafka的其他特性和技术选型建议 <a class="header-anchor" href="#_10-4-关于-kafka的其他特性和技术选型建议" aria-label="Permalink to &quot;10.4-关于 Kafka的其他特性和技术选型建议&quot;">​</a></h1><p><img src="'+n+'" alt="img_158.png" loading="lazy"></p><p><img src="'+i+'" alt="img_159.png" loading="lazy"></p><p>Java高级开发工程师/技术专家</p><p><img src="'+t+`" alt="img_160.png" loading="lazy"></p><p>独立负责过多个系统架构，处理过日均访问过千万的服务，带过10人小团队</p><p>个人技能：</p><p>技能分类 以及 掌握情况</p><ol><li>编程语言：熟练掌握后端java/Python/C/Sql等语言，掌握JDK8-13新特性，掌握前端HTML/CSS/JS基础，VUE等框架</li><li>底层源码：掌握JVM内存模型，垃圾回收机制，JDK集合框架源码等，读过部分Spring/RocketMQ/Netty核心源码，掌握多种设计模式</li><li>并发编程：熟悉Java多线程，Java并发和同步，多种锁机制，线程池等，熟练AQS和多个JUC源码，熟练掌握多线程在项目中的实践</li><li>框架技能：熟练掌握Spring/Mybatis/SpringBoot/Cloud全家桶核心知识；熟练掌握Redis，消息队列在项目中的使用；经常使用Dubbo，ElasticSearch，Netty等 等多个框架进行项目开发</li><li>分布式和微服务：熟悉分布式架构，集群和负载均衡算法，熟悉分布式事务等，搭建搜索引擎，Redis和RabbitMQ集群，LVS+Nginx 有4年微服务架构和分布式系统的经验 熟悉Rancher云平台和容器编排技术，自动化扩容和监控体系搭建</li><li>开发和管理工具：熟练掌握IDEA，Git，Maven/Jenkins等工具使用</li><li>数据库：熟练掌握MySql，掌握多种索引使用和原理，能独立分析需求设计数据库，有一定的sql优化和重构经验。</li><li>Linux服务器：熟悉Linux常用命令，Shell脚本，Awk等编写，掌握常用软件部署，集群搭建和性能监控，掌握Docker容器化技术和生产应用</li></ol><p>工作经历：</p><p>公司：广州xxx电商有限公司（300人） 时间：2019年4月～2021年2月 岗位：高级后端工程师</p><p>项目：xxx电商平台</p><p>综合描述： xxx电商平台是一个自营化妆品垂直类电商平台，涵盖众多服务，C端业务商品中心，用户中心，营销中心，支付中心，物流中心，仓储中心等；还有数据AI中台 包括画像分析，数仓建设，推荐系统，整个系统架构采用是阿里P8带队，经过多个版本迭代，用户量过千万，团队组成基本是大厂出身。</p><blockquote><p>项目一：电商平台用户中心 + 优惠券中心开发</p></blockquote><p>项目描述：用户中心+优惠券中心是C端业务核心内容，支持用户多通道注册，防刷和恶意登录破解，个人资料，收获地址维护，黑名单控制等功能；优惠券支持多类型配置， 无门槛，满减，新人卷，支持高并发下领劵和释放，支持一体化监控-自动化扩容等等功能。</p><p>项目技术栈：SpringBoot+AlibabaCloud全家桶+Redis+RabbitMQ +阿里云OSS</p><p>开发部署环境：Mac+IDEA+Gitlab+Jenkins+Docker+Rancher容器编排</p><p>个人职责：核心开发/开发主程</p><p>负责用户微服务注册-登录模块开发，支持多渠道验证码发送，具有防刷恶意注册，越权设计等；封装OSS文件上传组件，支持灵活的截取和清晰度压缩配置；对接新用户 拉新福利模块，采用MQ消息解耦，保证数据最终一致性和可靠性投递模块开发</p><p>负责优惠券微服务设计，支持多种规则配置，无门槛券-满减券-福利券，限领张数等配置。 采用redisson分布式锁解决高并发下单用户超领，和乐观锁解决优惠券超发问题。 对接订单中心，改造优惠券核销和释放功能，采用延迟队列+本地Task解决分布式事务问题。 （之前方案是采用Seata解决分布式事务，后采用MQ延迟队列+Task支持更高的并发）</p><blockquote><p>项目难点：</p></blockquote><p>1）优惠券服务-领取和释放需要支持高并发保证安全防止超发超领。</p><p>2）需要防止灰产恶意注册和领券造成公司活动资损。</p><p>解决方式：</p><p>1）在优惠券释放这块没采用seata框架，使用MQ+Task解决分布式事务问题，支持更高的并发，细粒度的分布式锁解决超领问题，结合Sentinel配置限流和熔断，Jmeter 压测单机 领券接口可以到达1万QPS。</p><p>2）提出业务监控需求并参加设计：传统的监控不能直接发现业务数据异常，基于Nginx+业务容器日志，设计支持业务数据埋点的监控告警平台，支持自定义时间轴的 同比环比监控</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>项目二：数据中台画像分析模块开发</span></span>
<span class="line"><span></span></span>
<span class="line"><span>项目描述：数据中台画像分析模块，主要对用户行为数据，用户属性数据，用户购买数据，用户浏览数据，用户评论数据，用户收藏数据，用户订单数据，</span></span>
<span class="line"><span>用户优惠券数据，用户积分数据，用户活动数据，用户支付数据，用户售后数据，用户退款数据，用户评价数据</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>项目二：订单支付中心项目和商品中心</p></blockquote><p>项目描述：商品中心和订单中心是团队核心服务，分C端和B端管理后台，商品服务日均访问过千万，采用多粒度缓存设计，支持公司最前沿的业务，包括众多功能 商品上下架，库存管理，多维度数据统计，优惠券设计等</p><p>订单服务是核心模块，最重要的是提高支付成功率以及数据的安全性和可用性，需要对接公司多个业务的支付功能，如商品购买，秒杀，团购业务等，支持多通道支付/ 超时关单/明细管理等多个功能。</p><p>项目技术栈：SpringBoot+AlibabaCloud全家桶+Redis+RabbitMQ +阿里云OSS</p><p>开发部署环境：Mac+IDEA+Gitlab+Jenkins+Docker+Rancher容器编排</p><p>个人职责：核心开发/开发主程</p><p>负责订单交易中心的下单接口开发，包括验价，锁定优惠券，商品库存等模块，还有多通道聚合支付设计，支付宝支付对接，订单超时自动关单功能等功能开发。</p><p>负责商品中心下单锁库存和超时释放库存的设计和开发，购物车设计实现</p><blockquote><p>项目难点：</p></blockquote><p>1）下单模块最复杂，需要包括验价，购物车商品清空，优惠券锁定，商品库存锁定等操作，链路复杂且涉及分布式事务问题</p><p>2）需要支持多通道支付，支付宝，微信，苹果支付还有未来更多平台，比如抖音支付等</p><p>解决方式：</p><p>1） 链路调用采用线程池异步化调用：购物车商品清空，优惠券锁定，商品库存锁定等都是采用无锁自释放设计，定时关单采用MQ延迟消息+Task任务解决。</p><p>2）多通道聚合支付采用了策略模式+工厂模式，可以更加灵活支持多种平台接入和多端使用APP，H5，PC。</p><blockquote><p>其他项目-公司技术架构成员</p></blockquote><p>项目描述：负责公司技术创新，架构升级，规范整理，新人成长，管理者培训，内部技术培训，核心是关注公司业务发展，通过技术反哺业务从而更快更稳发展。</p><p>个人职责：输出公司后端编码规范，新人成长培训，内部技术培训，推动公司DevOps规范流程落地，服务全面升级容器化部署和上云，和运维组同事，搭建了公司的DevOps 发布平台，引入Rancher支持多环境隔离和一站式发布，应对突发流量可以实现微服务自动化扩容</p>`,44),c=[o];function r(b,_,d,k,u,g){return s(),p("div",null,c)}const h=a(l,[["render",r]]);export{S as __pageData,h as default};
