import{_ as a,c as t,o as s,a8 as e}from"./chunks/framework.DDO5B0CJ.js";const p="/vitepress-java/assets/img_52.Djv7BaOX.png",i="/vitepress-java/assets/img_53.WjpdG_4D.png",_="/vitepress-java/assets/img_54.Dfxt3X7O.png",r="/vitepress-java/assets/img_55.DOq_JCby.png",o="/vitepress-java/assets/img_56.BK0GdB4V.png",n="/vitepress-java/assets/img_57.BZsAPJe8.png",g="/vitepress-java/assets/img_58.1nYzmo4p.png",m="/vitepress-java/assets/img_59.llQHRgfy.png",l="/vitepress-java/assets/img_60.jAfCAaYQ.png",d="/vitepress-java/assets/img_61.Jau5vgj3.png",E=JSON.parse('{"title":"第 11 章 使用数据处理函数","description":"","frontmatter":{},"headers":[],"relativePath":"MySQL/11.md","filePath":"MySQL/11.md"}'),c={name:"MySQL/11.md"},v=e('<h1 id="第-11-章-使用数据处理函数" tabindex="-1">第 11 章 使用数据处理函数 <a class="header-anchor" href="#第-11-章-使用数据处理函数" aria-label="Permalink to &quot;第 11 章 使用数据处理函数&quot;">​</a></h1><p>绍什么是函数，MySQL支持何种函数，以及如何使用这些函数。</p><p>SQL支持利用函数来处理数据。函数 一般是在数据上执行的，它给数据的转换和处理提供了方便。</p><p><img src="'+p+'" alt="img_52.png" loading="lazy"></p><p><img src="'+i+'" alt="img_53.png" loading="lazy"></p><p><img src="'+_+'" alt="img_54.png" loading="lazy"></p><p><img src="'+r+'" alt="img_55.png" loading="lazy"></p><p><img src="'+o+'" alt="img_56.png" loading="lazy"></p><p><img src="'+n+'" alt="img_57.png" loading="lazy"></p><p>使用WHERE order_date = &#39;2005-09-01&#39;可靠吗？order_ date的数据类型为datetime。这种类型存储日期及时间值。样例表中 的值全都具有时间值00:00:00，但实际中很可能并不总是这样。如果 用当前日期和时间存储订单日期（因此你不仅知道订单日期，还知道 下 订 单 当 天 的 时 间 ）， 怎 么 办 ？ 比 如 ， 存 储 的 order_date 值 为 2005-09-01 11:30:05，则WHERE order_date = &#39;2005-09-01&#39;失败。 即使给出具有该日期的一行，也不会把它检索出来，因为WHERE匹配失 败。</p><p>解决办法是指示MySQL仅将给出的日期与列中的日期部分进行比 较，而不是将给出的日期与整个列值进行比较。为此，必须使用Date() 函数。Date(order_date)指示MySQL仅提取列的日期部分，更可靠的 SELECT语句为：</p><p><img src="'+g+'" alt="img_58.png" loading="lazy"></p><p>如果要的是日期，请使用Date() 如果你想要的仅是日期， 则使用Date()是一个良好的习惯，即使你知道相应的列只包 含日期也是如此。这样，如果由于某种原因表中以后有日期和 时间值，你的SQL代码也不用改变。当然，也存在一个Time() 函数，在你只想要时间时应该使用它。</p><p>Date()和Time()都是在MySQL 4.1.1中第一次引入的。</p><p><img src="'+m+'" alt="img_59.png" loading="lazy"></p><p>还有另外一种办法（一种不需要记住每个月中有多少天或不需要操 心闰年2月的办法）：</p><p><img src="'+l+'" alt="img_60.png" loading="lazy"></p><p>Year()是一个从日期（或日期时间）中返回年份的函数。类似， Month()从日期中返回月份。因此，WHERE Year(order_date) = 2005 AND Month(order_date) = 9检索出order_date为2005年9月的 所有行。</p><blockquote><p>MySQL的版本差异 MySQL 4.1.1中增加了许多日期和时间 函数。如果你使用的是更早的MySQL版本，应该查阅具体的 文档以确定可以使用哪些函数。</p></blockquote><p>数值处理函数</p><p>具有讽刺意味的是，在主要DBMS的函数中，数值函数是最一致最统 一的函数。</p><p><img src="'+d+'" alt="img_61.png" loading="lazy"></p>',22),y=[v];function S(j,Q,h,D,L,M){return s(),t("div",null,y)}const z=a(c,[["render",S]]);export{E as __pageData,z as default};