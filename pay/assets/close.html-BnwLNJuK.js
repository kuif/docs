import{_ as a,c as n,o as s,a as e}from"./app-O-FW8RaH.js";const t={},l=e(`<table><thead><tr><th style="text-align:center;">method</th><th style="text-align:center;">参数</th><th style="text-align:center;">返回值</th></tr></thead><tbody><tr><td style="text-align:center;">close</td><td style="text-align:center;">string/array $order</td><td style="text-align:center;">Collection</td></tr></tbody></table><h2 id="关闭订单" tabindex="-1"><a class="header-anchor" href="#关闭订单"><span>关闭订单</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Wechat</span><span class="token punctuation">(</span><span class="token variable">$wechatConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$orderSn</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;order_snxxxxxxxx&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 商户订单号</span></span>
<span class="line"><span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token variable">$orderSn</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="订单配置参数" tabindex="-1"><a class="header-anchor" href="#订单配置参数"><span>订单配置参数</span></a></h3><p>所有订单配置参数和官方无异，参数请参考<a href="https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_3.shtml" target="_blank" rel="noopener noreferrer">这里</a>，查看「请求参数」一栏。</p>`,5),p=[l];function c(o,i){return s(),n("div",null,p)}const d=a(t,[["render",c],["__file","close.html.vue"]]),h=JSON.parse('{"path":"/wechat/close.html","title":"关闭","lang":"zh-CN","frontmatter":{"title":"关闭"},"headers":[{"level":2,"title":"关闭订单","slug":"关闭订单","link":"#关闭订单","children":[{"level":3,"title":"订单配置参数","slug":"订单配置参数","link":"#订单配置参数","children":[]}]}],"git":{"updatedTime":1712041033000,"contributors":[{"name":"kuifeng","email":"1161634940@qq.com","commits":1}]},"filePathRelative":"wechat/close.md"}');export{d as comp,h as data};
