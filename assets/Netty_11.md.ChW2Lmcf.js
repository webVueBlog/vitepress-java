import{_ as n,c as s,o as a,a8 as p}from"./chunks/framework.DDO5B0CJ.js";const h=JSON.parse('{"title":"仅使用Netty，你如何实现一个简单的HTTP服务器？","description":"","frontmatter":{},"headers":[],"relativePath":"Netty/11.md","filePath":"Netty/11.md"}'),e={name:"Netty/11.md"},l=p(`<h1 id="仅使用netty-你如何实现一个简单的http服务器" tabindex="-1">仅使用Netty，你如何实现一个简单的HTTP服务器？ <a class="header-anchor" href="#仅使用netty-你如何实现一个简单的http服务器" aria-label="Permalink to &quot;仅使用Netty，你如何实现一个简单的HTTP服务器？&quot;">​</a></h1><p>你可以使用Netty实现一个简单的HTTP服务器，以下是一个基本的示例代码：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import io.netty.bootstrap.ServerBootstrap;</span></span>
<span class="line"><span>import io.netty.channel.ChannelFuture;</span></span>
<span class="line"><span>import io.netty.channel.ChannelInitializer;</span></span>
<span class="line"><span>import io.netty.channel.EventLoopGroup;</span></span>
<span class="line"><span>import io.netty.channel.nio.NioEventLoopGroup;</span></span>
<span class="line"><span>import io.netty.channel.socket.SocketChannel;</span></span>
<span class="line"><span>import io.netty.channel.socket.nio.NioServerSocketChannel;</span></span>
<span class="line"><span>import io.netty.handler.codec.http.HttpServerCodec;</span></span>
<span class="line"><span>import io.netty.handler.codec.http.HttpServerExpectContinueHandler;</span></span>
<span class="line"><span>import io.netty.handler.codec.http.HttpServerHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class SimpleHttpServer {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) throws Exception {</span></span>
<span class="line"><span>        EventLoopGroup bossGroup = new NioEventLoopGroup();</span></span>
<span class="line"><span>        EventLoopGroup workerGroup = new NioEventLoopGroup();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            ServerBootstrap bootstrap = new ServerBootstrap();</span></span>
<span class="line"><span>            bootstrap.group(bossGroup, workerGroup)</span></span>
<span class="line"><span>                     .channel(NioServerSocketChannel.class)</span></span>
<span class="line"><span>                     .childHandler(new ChannelInitializer&lt;SocketChannel&gt;() {</span></span>
<span class="line"><span>                         @Override</span></span>
<span class="line"><span>                         protected void initChannel(SocketChannel ch) throws Exception {</span></span>
<span class="line"><span>                             ch.pipeline().addLast(new HttpServerCodec())</span></span>
<span class="line"><span>                                          .addLast(new HttpServerExpectContinueHandler())</span></span>
<span class="line"><span>                                          .addLast(new HttpServerHandler()); // 处理HTTP请求的处理器</span></span>
<span class="line"><span>                         }</span></span>
<span class="line"><span>                     });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            ChannelFuture future = bootstrap.bind(8080).sync();</span></span>
<span class="line"><span>            future.channel().closeFuture().sync();</span></span>
<span class="line"><span>        } finally {</span></span>
<span class="line"><span>            bossGroup.shutdownGracefully();</span></span>
<span class="line"><span>            workerGroup.shutdownGracefully();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>在上述代码中，我们创建了一个基本的HTTP服务器， 它使用了HttpServerCodec来处理HTTP请求的编解码，HttpServerExpectContinueHandler来处理Expect: 100-continue请求， 以及HttpServerHandler来处理实际的HTTP请求。</p><p>HttpServerHandler是你可以自定义的类，它继承自ChannelInboundHandlerAdapter， 用于实现对HTTP请求的业务逻辑处理。你可以重写其中的方法来处理不同类型的HTTP请求，例如处理GET、POST请求，返回响应等。</p><p>需要注意的是，这只是一个简单的示例，实际情况中可能需要更多的处理器来处理不同类型的HTTP请求和响应，以及实现更复杂的业务逻辑。 不过，Netty提供了丰富的编解码器和处理器来帮助你构建更完善的HTTP服务器。</p>`,6),r=[l];function t(i,c,o,b,u,m){return a(),s("div",null,r)}const v=n(e,[["render",t]]);export{h as __pageData,v as default};
