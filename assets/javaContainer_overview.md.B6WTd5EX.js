import{_ as e,c as a,o as t,a8 as o}from"./chunks/framework.DDO5B0CJ.js";const r="/vitepress-java/assets/img.CLaEhr6I.png",s="/vitepress-java/assets/img_1.CfsQ1a8D.png",k=JSON.parse('{"title":"一、概览","description":"","frontmatter":{},"headers":[],"relativePath":"javaContainer/overview.md","filePath":"javaContainer/overview.md"}'),i={name:"javaContainer/overview.md"},p=o('<h1 id="一、概览" tabindex="-1">一、概览 <a class="header-anchor" href="#一、概览" aria-label="Permalink to &quot;一、概览&quot;">​</a></h1><p>容器主要包括 Collection 和 Map 两种，Collection 存储着对象的集合，而 Map 存储 着键值对（两个对象）的映射表。</p><blockquote><p>Collection</p></blockquote><p><img src="'+r+'" alt="img.png" loading="lazy"></p><h2 id="_1-set" tabindex="-1">1. Set <a class="header-anchor" href="#_1-set" aria-label="Permalink to &quot;1. Set&quot;">​</a></h2><p>TreeSet：基于红黑树实现，支持有序性操作，例如根据一个范围查找元素的操 作。但是查找效率不如 HashSet，HashSet 查找的时间复杂度为 O(1)，TreeSet 则 为 O(logN)。</p><p>HashSet：基于哈希表实现，支持快速查找，但不支持有序性操作。并且失去了 元素的插入顺序信息，也就是说使用 Iterator 遍历 HashSet 得到的结果是不确定 的。</p><p>LinkedHashSet：具有 HashSet 的查找效率，并且内部使用双向链表维护元素的插 入顺序。</p><h2 id="_2-list" tabindex="-1">2. List <a class="header-anchor" href="#_2-list" aria-label="Permalink to &quot;2. List&quot;">​</a></h2><p>ArrayList：基于动态数组实现，支持随机访问。</p><p>Vector：和 ArrayList 类似，但它是线程安全的。</p><p>LinkedList：基于双向链表实现，只能顺序访问，但是可以快速地在链表中间插</p><p>入和删除元素。不仅如此，LinkedList 还可以用作栈、队列和双向队列。</p><h2 id="_3-queue" tabindex="-1">3. Queue <a class="header-anchor" href="#_3-queue" aria-label="Permalink to &quot;3. Queue&quot;">​</a></h2><p>LinkedList：可以用它来实现双向队列。</p><p>PriorityQueue：基于堆结构实现，可以用它来实现优先队列。</p><blockquote><p>Map</p></blockquote><p><img src="'+s+'" alt="img_1.png" loading="lazy"></p><p>TreeMap：基于红黑树实现。</p><p>HashMap：基于哈希表实现。</p><p>HashTable：和 HashMap 类似，但它是线程安全的，这意味着同一时刻多个线程 同时写入 HashTable 不会导致数据不一致。它是遗留类，不应该去使用它，而是 使用 ConcurrentHashMap 来支持线程安全，ConcurrentHashMap 的效率会更高， 因为 ConcurrentHashMap 引入了分段锁。</p><p>LinkedHashMap：使用双向链表来维护元素的顺序，顺序为插入顺序或者最近最 少使用（LRU）顺序。</p>',22),n=[p];function l(c,h,_,d,u,m){return t(),a("div",null,n)}const S=e(i,[["render",l]]);export{k as __pageData,S as default};