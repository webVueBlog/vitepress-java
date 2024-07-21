import{_ as n,c as a,o as p,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const l="/vitepress-java/assets/img_269.BXyhItV1.png",i="/vitepress-java/assets/img_270.BIgPUhj5.png",r="/vitepress-java/assets/img_271.BfqtuXN_.png",t="/vitepress-java/assets/img_272.BKrWqW4i.png",c="/vitepress-java/assets/img_273.3H28W6hj.png",m="/vitepress-java/assets/img_274.DiqOFFDA.png",o="/vitepress-java/assets/img_275.4JGjtaY1.png",g="/vitepress-java/assets/img_276.BHyYRl6c.png",u="/vitepress-java/assets/img_277.1klRGIuk.png",b="/vitepress-java/assets/img_278.Djqv64b0.png",_="/vitepress-java/assets/img_279.scMaSQQi.png",d="/vitepress-java/assets/img_280.uGEp4IhW.png",v="/vitepress-java/assets/img_281.sTOENB8Y.png",s="/vitepress-java/assets/img_282.y68Rkx_e.png",h="/vitepress-java/assets/img_283.CJeX0oMy.png",C="/vitepress-java/assets/img_284.mysI3hq9.png",q="/vitepress-java/assets/img_285.Czp0XH_H.png",y="/vitepress-java/assets/img_286.DKrsJojH.png",S="/vitepress-java/assets/img_287.Ct9qkcO3.png",R="/vitepress-java/assets/img_288.D-m67IR-.png",E="/vitepress-java/assets/img_289.DcFpO_NA.png",z="/vitepress-java/assets/img_290.CO2T8dxH.png",D="/vitepress-java/assets/img_291.ChUcyBwQ.png",j="/vitepress-java/assets/img_292.BWxzHVXr.png",f="/vitepress-java/assets/img_293.DcIx4KFz.png",V=JSON.parse('{"title":"12.4-SpringCache整合SpringBoot案例总结","description":"","frontmatter":{},"headers":[],"relativePath":"Redis6/61.md","filePath":"Redis6/61.md"}'),I={name:"Redis6/61.md"},T=e('<h1 id="_12-4-springcache整合springboot案例总结" tabindex="-1">12.4-SpringCache整合SpringBoot案例总结 <a class="header-anchor" href="#_12-4-springcache整合springboot案例总结" aria-label="Permalink to &quot;12.4-SpringCache整合SpringBoot案例总结&quot;">​</a></h1><p><img src="'+l+'" alt="img_269.png" loading="lazy"></p><p><img src="'+i+'" alt="img_270.png" loading="lazy"></p><p><img src="'+r+'" alt="img_271.png" loading="lazy"></p><p>缓存到redis</p><p><img src="'+t+'" alt="img_272.png" loading="lazy"></p><p>上传用户头像</p><p><img src="'+c+'" alt="img_273.png" loading="lazy"></p><p>用户注册</p><p><img src="'+m+`" alt="img_274.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>UserController.java</span></span>
<span class="line"><span>//上传用户头像</span></span>
<span class="line"><span>//默认最大值是1M，超过则报错</span></span>
<span class="line"><span>// file 文件</span></span>
<span class="line"><span>@ApiOperation(&quot;用户头像上传&quot;)</span></span>
<span class="line"><span>@PostMapping(value=&quot;upload&quot;)</span></span>
<span class="line"><span>public JsonData uploadUserImg( @ApiParam(value=&quot;文件上传&quot;,required=true) @RequestParam(&quot;file&quot;) MultipartFile file){</span></span>
<span class="line"><span>    String result = fileService.uploadUserImg(file);</span></span>
<span class="line"><span>    return result != null ? JsonData.buildSuccess(result) : JsonData.buildResult(BizCodeEnum.FILE_UPLOAD_USER_IMG_FAIL);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//用户注册</span></span>
<span class="line"><span>@ApiOperation(&quot;用户注册&quot;)</span></span>
<span class="line"><span>@PostMapping(value=&quot;register&quot;)</span></span>
<span class="line"><span>public JsonData registerUser(@ApiParam(value=&quot;用户注册对象&quot;) @RequestBody UserRegisterRequest userRegisterRequest){</span></span>
<span class="line"><span>    int result = userService.registerUser(userRegisterRequest);</span></span>
<span class="line"><span>    return result == 1 ? JsonData.buildSuccess() : JsonData.buildResult(BizCodeEnum.USER_REGISTER_FAIL);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//发送邮箱注册验证码</span></span>
<span class="line"><span>@ApiOperation(&quot;发送邮箱注册验证码&quot;)</span></span>
<span class="line"><span>@GetMapping(&quot;send_code&quot;)</span></span>
<span class="line"><span>public JsonData sendRegisterCode(@RequestParam(value = &quot;to&quot;, required = true) String to,</span></span>
<span class="line"><span>                                @RequestParam(value = &quot;captcha&quot;, required = true) String captcha,</span></span>
<span class="line"><span>                                HttpServletRequest request){</span></span>
<span class="line"><span></span></span>
<span class="line"><span> String key = getCaptchaKey(request);</span></span>
<span class="line"><span> String cacheCaptcha = redisTemplate.opsForValue().get(key);</span></span>
<span class="line"><span> //匹配图形验证码是否一样</span></span>
<span class="line"><span> if (captcha != null &amp;&amp; cacheCaptcha != null &amp;&amp; captcha.equalsIgnoreCase(cacheCaptcha)) {</span></span>
<span class="line"><span>  // 成功</span></span>
<span class="line"><span>  redisTemplate.delete(key);</span></span>
<span class="line"><span>  JsonData jsonData = notifyService.sendCode(SendCodeEnum.USER_REGISTER, to);</span></span>
<span class="line"><span>  return jsonData;</span></span>
<span class="line"><span> } else {</span></span>
<span class="line"><span>  return JsonData.buildResult(BizCodeEnum.CODE_CAPTCHA_ERROR);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span>    String email = to;</span></span>
<span class="line"><span>    String emailCaptcha = captchaService.generateCaptcha(email);</span></span>
<span class="line"><span>    //发送邮件</span></span>
<span class="line"><span>    mailService.sendRegisterCode(email, emailCaptcha);</span></span>
<span class="line"><span>    return JsonData.buildSuccess();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><img src="`+o+'" alt="img_275.png" loading="lazy"></p><p><img src="'+g+'" alt="img_276.png" loading="lazy"></p><p><img src="'+u+'" alt="img_277.png" loading="lazy"></p><p>发送验证码</p><p><img src="'+b+'" alt="img_278.png" loading="lazy"></p><p><img src="'+_+'" alt="img_279.png" loading="lazy"></p><p><img src="'+d+'" alt="img_280.png" loading="lazy"></p><p><img src="'+v+'" alt="img_281.png" loading="lazy"></p><p><img src="'+s+`" alt="img_282.png" loading="lazy"></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public JsonData sendCode(SendCodeEnum sendCodeEnum, String to) {</span></span>
<span class="line"><span> String cacheKey = String.format(CacheKey.CHECK_CODE_KEY, sendCodeEnum.name(), to);</span></span>
<span class="line"><span> String cacheValue = redisTemplate.opsForValue().get(cacheKey);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //如果不为空，则判断是否60秒内重复发送</span></span>
<span class="line"><span> if(StringUtils.isNotBlank(cacheValue)) {</span></span>
<span class="line"><span>    long ttl = Long.parseLong(cacheValue.split(&quot;_&quot;)[1]);</span></span>
<span class="line"><span>    //当前时间戳-验证码发送时间戳，如果小于60秒，则不给重复发送。</span></span>
<span class="line"><span>    if (CommonUtil.getCurrentTimestamp() - ttl &lt; 1000*60) {</span></span>
<span class="line"><span>     log.info(&quot;重复发送验证码，时间间隔:{}秒&quot;, (CommonUtil.getCurrentTimestamp()-ttl) / 1000);</span></span>
<span class="line"><span>     return JsonData.buildResult(BizCodeEnum.CODE_LIMIED);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> //拼接验证码</span></span>
<span class="line"><span> String code = CommonUtil.getReandomCode(6);</span></span>
<span class="line"><span> String value = code + &quot;_&quot; + CommonUtil.getCurrentTimestamp();</span></span>
<span class="line"><span> redisTemplate.opsForValue().set(cacheKey, value, CODE_EXPIRED, TimeUnit.MILLISECONDS);</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> if (CheckUtils.isEmail(to)) {</span></span>
<span class="line"><span>    // 邮箱验证码</span></span>
<span class="line"><span>    mailService.sendMail(to, SUBJECT, String.format(CONTENT, code));</span></span>
<span class="line"><span>    return JsonData.buildSuccess();</span></span>
<span class="line"><span> } else if (CheckUtil.isPhone(to)) {</span></span>
<span class="line"><span>    // 短信验证码</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> return JsonData.buildResult(BizCodeEnum.CODE_TO_ERROR);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="`+s+'" alt="img_282.png" loading="lazy"></p><p>rancher 主机</p><p><img src="'+h+'" alt="img_283.png" loading="lazy"></p><p><img src="'+C+'" alt="img_284.png" loading="lazy"></p><p><img src="'+q+'" alt="img_285.png" loading="lazy"></p><p><img src="'+y+'" alt="img_286.png" loading="lazy"></p><p><img src="'+S+'" alt="img_287.png" loading="lazy"></p><p><img src="'+R+'" alt="img_288.png" loading="lazy"></p><p><img src="'+E+'" alt="img_289.png" loading="lazy"></p><p><img src="'+z+'" alt="img_290.png" loading="lazy"></p><p><img src="'+D+'" alt="img_291.png" loading="lazy"></p><p><img src="'+j+'" alt="img_292.png" loading="lazy"></p><p><img src="'+f+'" alt="img_293.png" loading="lazy"></p><p>缓存 &amp; 队列</p><p>自动化扩容技术</p>',37),k=[T];function B(O,U,J,P,A,F){return p(),a("div",null,k)}const H=n(I,[["render",B]]);export{V as __pageData,H as default};
