import{_ as s,c as n,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const e="/vitepress-java/assets/img_228.yW-6K-PF.png",l="/vitepress-java/assets/img_229.1Kov02hK.png",i="/vitepress-java/assets/img_230.DHIj2JHN.png",r="/vitepress-java/assets/img_231.p9zsIPdA.png",t="/vitepress-java/assets/img_232.Cod18Zc_.png",c="/vitepress-java/assets/img_233.BEgIbF7r.png",o="/vitepress-java/assets/img_234.CYs6mbl4.png",u="/vitepress-java/assets/img_235.BqW_v2zH.png",d="/vitepress-java/assets/img_236.DaP_ZoGn.png",z=JSON.parse('{"title":"10.3-SpringBoot+MybatisPlus开发商品的CRUD接口","description":"","frontmatter":{},"headers":[],"relativePath":"Redis6/50.md","filePath":"Redis6/50.md"}'),b={name:"Redis6/50.md"},g=p('<h1 id="_10-3-springboot-mybatisplus开发商品的crud接口" tabindex="-1">10.3-SpringBoot+MybatisPlus开发商品的CRUD接口 <a class="header-anchor" href="#_10-3-springboot-mybatisplus开发商品的crud接口" aria-label="Permalink to &quot;10.3-SpringBoot+MybatisPlus开发商品的CRUD接口&quot;">​</a></h1><p><img src="'+e+`" alt="img_228.png" loading="lazy"></p><p>编写Mapper</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>public interface ProductMapper extends BaseMapper&lt;ProductDO&gt; {</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>编写Service</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>@Override</span></span>
<span class="line"><span>public int save(ProductDO productDO) {</span></span>
<span class="line"><span>    return productMapper.insert(productDO);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public int delById(int id) {</span></span>
<span class="line"><span>    return productMapper.deleteById(id);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public int update(ProductDO productDO) {</span></span>
<span class="line"><span>    return productMapper.updateById(productDO);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public ProductDO getById(int id) {</span></span>
<span class="line"><span>    return productMapper.selectById(id);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public List&lt;ProductDO&gt; list() {</span></span>
<span class="line"><span>    return productMapper.selectList(null);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public List&lt;ProductDO&gt; listByPage(int page, int size) {</span></span>
<span class="line"><span>    return productMapper.selectPage(new Page&lt;&gt;(page, size), null).getRecords();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public List&lt;ProductDO&gt; listByPageAndSort(int page, int size, String sort) {</span></span>
<span class="line"><span>    return productMapper.selectPage(new Page&lt;&gt;(page, size), new QueryWrapper&lt;ProductDO&gt;().orderByAsc(sort)).getRecords();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public List&lt;ProductDO&gt; listByPageAndSortAndCondition(int page, int size, String sort, String condition) {</span></span>
<span class="line"><span>    return productMapper.selectPage(new Page&lt;&gt;(page, size), new QueryWrapper&lt;ProductDO&gt;().orderByAsc(sort).like(condition, &quot;商品&quot;)).getRecords();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Override</span></span>
<span class="line"><span>public List&lt;ProductDO&gt; listByPageAndSortAndConditionAndLimit(int page, int size, String sort, String condition, int limit) {</span></span>
<span class="line"><span>    return productMapper.selectPage(new Page&lt;&gt;(page, size), new QueryWrapper&lt;ProductDO&gt;().orderByAsc(sort).like(condition, &quot;商品&quot;).last(&quot;limit &quot; + limit)).getRecords();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p><img src="`+l+'" alt="img_229.png" loading="lazy"></p><p><img src="'+i+'" alt="img_230.png" loading="lazy"></p><p><img src="'+r+'" alt="img_231.png" loading="lazy"></p><p><img src="'+t+'" alt="img_232.png" loading="lazy"></p><p><img src="'+c+'" alt="img_233.png" loading="lazy"></p><p><img src="'+o+'" alt="img_234.png" loading="lazy"></p><p><img src="'+u+'" alt="img_235.png" loading="lazy"></p><p><img src="'+d+'" alt="img_236.png" loading="lazy"></p>',14),m=[g];function _(v,P,y,h,O,D){return a(),n("div",null,m)}const S=s(b,[["render",_]]);export{z as __pageData,S as default};