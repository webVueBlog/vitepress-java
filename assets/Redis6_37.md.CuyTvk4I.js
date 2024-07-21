import{_ as n,c as s,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_158.xrt3iiI_.png",l="/vitepress-java/assets/img_159.nRfzjUU2.png",i="/vitepress-java/assets/img_160.BpxhEbmJ.png",r="/vitepress-java/assets/img_161.CB8tE_KN.png",c="/vitepress-java/assets/img_162.BycPN8wq.png",o="/vitepress-java/assets/img_163.eAnIcxFk.png",u="/vitepress-java/assets/img_164.Cs6DFQx9.png",t="/vitepress-java/assets/img_165.C8ZzUTD_.png",b="/vitepress-java/assets/img_166.CvNeRQCr.png",m="/vitepress-java/assets/img_167.BkOjHev7.png",g="/vitepress-java/assets/img_168.CWjxseOz.png",d="/vitepress-java/assets/img_169.pkfeqlfy.png",_="/vitepress-java/assets/img_170.DSPZVLYQ.png",q="/vitepress-java/assets/img_171.Bz4K4K0a.png",R=JSON.parse('{"title":"7.4-手把手教你彻底掌握分布式锁lua脚本+redis原生代码编写","description":"","frontmatter":{},"headers":[],"relativePath":"Redis6/37.md","filePath":"Redis6/37.md"}'),C={name:"Redis6/37.md"},O=p('<h1 id="_7-4-手把手教你彻底掌握分布式锁lua脚本-redis原生代码编写" tabindex="-1">7.4-手把手教你彻底掌握分布式锁lua脚本+redis原生代码编写 <a class="header-anchor" href="#_7-4-手把手教你彻底掌握分布式锁lua脚本-redis原生代码编写" aria-label="Permalink to &quot;7.4-手把手教你彻底掌握分布式锁lua脚本+redis原生代码编写&quot;">​</a></h1><p><img src="'+e+'" alt="img_158.png" loading="lazy"></p><p><img src="'+l+'" alt="img_159.png" loading="lazy"></p><p><img src="'+i+'" alt="img_160.png" loading="lazy"></p><p><img src="'+r+`" alt="img_161.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/api/v1/coupon&quot;)</span></span>
<span class="line"><span>public class CouponController {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RedisTemplate redisTemplate;</span></span>
<span class="line"><span>    @GetMapping(&quot;add&quot;)</span></span>
<span class="line"><span>    public JsonData saveCoupon(@RequestParam(value = &quot;coupon_id&quot;, required = true) int couponId) {</span></span>
<span class="line"><span>        //防止其他线程误删</span></span>
<span class="line"><span>        String uuid = UUID.randomUUID().toString();</span></span>
<span class="line"><span>        String lockKey = &quot;lock:coupon:&quot;+couponId;</span></span>
<span class="line"><span>        Boolean nativaLock = redisTemplate.opsForValue().setIfAbsent(lockKey, uuid, Duration.ofSeconds(10));</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        if (nativaLock) {</span></span>
<span class="line"><span>            // 加锁成功</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            // 加锁失败</span></span>
<span class="line"><span>            // 自旋操作</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                //Thread.sleep(100);</span></span>
<span class="line"><span>                //return saveCoupon(couponId);</span></span>
<span class="line"><span>                TimeUnit.MILLISECONDS.sleep(100);</span></span>
<span class="line"><span>            } catch (InterruptedException e) {</span></span>
<span class="line"><span>                //睡一会再尝试获取锁</span></span>
<span class="line"><span>                lock(couponId);</span></span>
<span class="line"><span>                //e.printStackTrace();</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        if (nativaLock == null || !nativaLock) {</span></span>
<span class="line"><span>            return JsonData.buildError(&quot;抢购失败，请稍后再试&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //模拟抢购</span></span>
<span class="line"><span>        int stock = 10;</span></span>
<span class="line"><span>        if (stock &gt; 0) {</span></span>
<span class="line"><span>            stock--;</span></span>
<span class="line"><span>            redisTemplate.opsForValue().set(&quot;coupon:stock:&quot;+couponId, stock);</span></span>
<span class="line"><span>            return JsonData.buildSuccess(&quot;抢购成功&quot;);</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            return JsonData.buildError(&quot;抢购失败，库存不足&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //防止其他线程误删</span></span>
<span class="line"><span>        String currentUuid = redisTemplate.opsForValue().get(lockKey);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        if (currentUuid.equals(uuid)) {</span></span>
<span class="line"><span>            redisTemplate.delete(lockKey);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return JsonData.buildSuccess(&quot;抢购成功&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p><img src="`+c+'" alt="img_162.png" loading="lazy"></p><p><img src="'+o+'" alt="img_163.png" loading="lazy"></p><p><img src="'+u+'" alt="img_164.png" loading="lazy"></p><p><img src="'+t+'" alt="img_165.png" loading="lazy"></p><p><img src="'+b+'" alt="img_166.png" loading="lazy"></p><p>全部代码：</p><p><img src="'+m+'" alt="img_167.png" loading="lazy"></p><p><img src="'+g+'" alt="img_168.png" loading="lazy"></p><p><img src="'+d+'" alt="img_169.png" loading="lazy"></p><p>实例：</p><p>分布式锁</p><p><img src="'+_+'" alt="img_170.png" loading="lazy"></p><p><img src="'+q+`" alt="img_171.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 领取优惠券</span></span>
<span class="line"><span>@ApiOperation(&quot;领取优惠券&quot;)</span></span>
<span class="line"><span>@GetMapping(&quot;/add/promotion/{coupon_id}&quot;)</span></span>
<span class="line"><span>public JsonData addPromotionCoupon(@ApiParam(value = &quot;优惠券ID&quot;, required = true) @PathVariable(&quot;coupon_id&quot;) long couponId) {</span></span>
<span class="line"><span>    LoginUser loginUser = LoginInterceptor.threadLocal.get();</span></span>
<span class="line"><span>    String lockKey = &quot;lock:coupon:&quot;+couponId+&quot;:&quot;+loginUser.getId();</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //多个线程进入，会阻塞等待释放锁，默认30秒，然后有watch dog自动续期</span></span>
<span class="line"><span>    rLock.lock();</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>        JsonData jsonData = couponService.addCoupon(couponId, CouponCategory.PROMOTION, loginUser.getId());</span></span>
<span class="line"><span>        return jsonData;</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>        rLock.unlock();</span></span>
<span class="line"><span>        log.info(&quot;释放锁&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 新用户注册发放优惠券接口</span></span>
<span class="line"><span>@ApiOperation(&quot;RPC-新用户注册接口&quot;)</span></span>
<span class="line"><span>@PostMapping(&quot;/new_user_coupon&quot;)</span></span>
<span class="line"><span>public JsonData addNewUserCoupon(@ApiParam(&quot;用户对象&quot;) @RequestBody NewUserCouponRequest newUserCouponRequest) {</span></span>
<span class="line"><span>    JsonData jsonData = couponService.initNewUserCoupon(newUserCouponRequest);</span></span>
<span class="line"><span>    return jsonData;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>@Cacheable(value = {&quot;coupon&quot;}, key = &quot;#root.methodName + #page + &#39;_&#39; + #size&quot;)</span></span>
<span class="line"><span>public Map&lt;String Object&gt; pageCouponActivity(int page, int size) {</span></span>
<span class="line"><span>    Page&lt;CouponDO&gt; pageInfo = new Page&lt;&gt;(page, size);</span></span>
<span class="line"><span>    IPage&lt;CouponDO&gt; couponDOIPage = couponMapper.selectPage(pageInfo, new QueryWrapper&lt;CouponDO&gt;()</span></span>
<span class="line"><span>    .eq(&quot;publish&quot;, CouponPublishEnum.PUBLISH)</span></span>
<span class="line"><span>    .eq(&quot;category&quot;, CouponCategoryEnum.PROMOTION)</span></span>
<span class="line"><span>    .orderByDesc(&quot;create_time&quot;));</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    Map&lt;String Object&gt; pageMap = new HashMap&lt;&gt;(3);</span></span>
<span class="line"><span>    //总条数</span></span>
<span class="line"><span>    pageMap.pu(&quot;total_record&quot;, couponDOIPage.getTotal());</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //总页数</span></span>
<span class="line"><span>    pageMap.put(&quot;total_page&quot;, couponDOIPage.getPages());</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    pageMap.put(&quot;current_data&quot;, couponDOIPage.getRecords().stream().map(obj -&gt; beanProcess(obj)).collect(Collectors.toList()));</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return pageMap;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public JsonData addCoupon(long couponId, CouponCategoryEnum category) {</span></span>
<span class="line"><span>    LoginUser loginUser = LoginInterceptor.threadLocal.get();</span></span>
<span class="line"><span>    // String lockKey = &quot;lock:coupon:&quot;+couponId+&quot;:&quot;+loginUser.getId();</span></span>
<span class="line"><span>    // RLock rLock = redissonClient.getLock(lockKey);</span></span>
<span class="line"><span>    // 多个线程进入，会阻塞等待释放锁，默认30秒，然后有watch dog自动续期</span></span>
<span class="line"><span>    // rLock.lock();</span></span>
<span class="line"><span>    // 加锁10秒钟过期，没有watch dog功能，无法自动续期</span></span>
<span class="line"><span>    // rLock.lock(10, TimeUnit.SECONDS);</span></span>
<span class="line"><span>    log.info(&quot;领劵接口加锁成功:{}&quot;, Thread.currentThread().getId());</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    CouponDO couponDO = couponMapper.selectOne(new QueryWrapper&lt;CouponDO&gt;()</span></span>
<span class="line"><span>    .eq(&quot;id&quot;, couponId)</span></span>
<span class="line"><span>    .eq(&quot;category&quot;, category.name());</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 优惠券是否可以领取</span></span>
<span class="line"><span>    this.checkCoupon(couponDO, loginUser.getId());</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 构建领券记录</span></span>
<span class="line"><span>    CouponRecordDO couponRecordDO = new CouponRecordDO();</span></span>
<span class="line"><span>    BeanUtils.copyProperties(couponDO, couponRecordDO);</span></span>
<span class="line"><span>    couponRecordDO.setCreateTime(new Date());</span></span>
<span class="line"><span>    couponRecordDO.setUseState(CouponStateEnum.NEW.name());</span></span>
<span class="line"><span>    couponRecordDO.setUserId(loginUser.getId());</span></span>
<span class="line"><span>    couponRecordDO.setUserName(loginUser.getName());</span></span>
<span class="line"><span>    couponRecordDO.setCouponId(couponId);</span></span>
<span class="line"><span>    couponRecordDO.setId(null);</span></span>
<span class="line"><span>    //扣减库存</span></span>
<span class="line"><span>    int rows = couponMapper.reduceStock(couponId);</span></span>
<span class="line"><span>    // int flag = 1/0;</span></span>
<span class="line"><span>    if (rows == 1）{</span></span>
<span class="line"><span>        //库存扣减成功才保存记录</span></span>
<span class="line"><span>        couponRecordMapper.insert(couponRecordDO);</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>        log.warn(&quot;发放优惠券失败:{},用户:{}&quot;, couponDO, loginUser);</span></span>
<span class="line"><span>        throw new BizException(BizCodeEnum.COUPON_NO_STOCK);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    return JsonData.buildSuccess();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//用户微服务调用的时候，没传递token</span></span>
<span class="line"><span>//本地直接调用发放优惠券的方法，需要构造一个登录用户存储在threadlocal</span></span>
<span class="line"><span>@Transactional(rollbackFor=Exception.class,propagation=Propagation.REQUIRED)</span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public JsonData initNewUserCoupon(NewUserCouponRequest newUserCouponRequest) {</span></span>
<span class="line"><span>    LoginUser loginUser = new LoginUser();</span></span>
<span class="line"><span>    loginUser.setId(newUserCouponRequest.getUserId());</span></span>
<span class="line"><span>    loginUser.setName(newUserCouponRequest.getName());</span></span>
<span class="line"><span>    LoginInterceptor.threadLocal.set(loginUser);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    //查询新用户有哪些优惠券</span></span>
<span class="line"><span>    List&lt;CouponDO&gt; couponDOList = couponMapper.selectList(new QueryWrapper&lt;CouponDO&gt;()</span></span>
<span class="line"><span>    .eq(&quot;category&quot;,CouponCategoryEnum.NEW_USER.name()));</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    for(CouponDO couponDO : couponDOList) {</span></span>
<span class="line"><span>        //幂等操作，调用需要加锁</span></span>
<span class="line"><span>        this.addCoupon(couponDO.getId(), CouponCategoryEnum.NEW_USER);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return JsonData.buildSuccess();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//校验是否可以领取</span></span>
<span class="line"><span>private void checkCoupon(CouponDO couponDO, long userId) {</span></span>
<span class="line"><span> if (couponDO == null) {</span></span>
<span class="line"><span>    throw new BizException(BizCodeEnum.COUPON_NO_EXIFS);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> //库存是否足够</span></span>
<span class="line"><span> if (couponDO.getStock() &lt;= 0) {</span></span>
<span class="line"><span>  throw new BizException(BizCodeEnum.COUPON_NO_STOCK);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //判断是否是发布状态</span></span>
<span class="line"><span> if(!couponDO.getPublish().equals(CouponPublishEnum.PUBLISH.name())) {</span></span>
<span class="line"><span>  throw new BizException(BizCodeEnum.COUPON_GET_FAIL);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> //是否在领取时间范围</span></span>
<span class="line"><span> long time = CommonUtil.getCurrentTimestamp();</span></span>
<span class="line"><span> long start = couponDO.getStartTime().getTime();</span></span>
<span class="line"><span> long end = couponDO.getEndTime().getTime();</span></span>
<span class="line"><span> if (time &lt; start || time &gt; end) {</span></span>
<span class="line"><span>    throw new BizException(BizCodeEnum.COUPON_OUT_OF_TIME);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //用户是否超过限制</span></span>
<span class="line"><span> int recordNum = couponRecordMapper.selectCount(new QueryWrapper&lt;CouponRecoredDO&gt;()</span></span>
<span class="line"><span> .eq(&quot;coupon_id&quot;, couponDO.getId())</span></span>
<span class="line"><span> .eq(&quot;user_id&quot;, userId));</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> if (recordNum &gt;= couponDO.getUserLimit()) {</span></span>
<span class="line"><span>    throw new BizException(BizCodeEnum.COUPON_OUT_OF_LIMIT);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>private CouponVO beanProcess(CouponDO couponDO) {</span></span>
<span class="line"><span>    CouponVO couponVO = new CouponVO();</span></span>
<span class="line"><span>    BeanUtils.copyProperties(couponDO, couponVO);</span></span>
<span class="line"><span>    return couponVO;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br></div></div>`,21),D=[O];function v(h,I,U,k,y,w){return a(),s("div",null,D)}const P=n(C,[["render",v]]);export{R as __pageData,P as default};
