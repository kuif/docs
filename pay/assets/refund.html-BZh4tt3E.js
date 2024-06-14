import{_ as n,c as s,o as a,a as e}from"./app-O-FW8RaH.js";const t={},p=e(`<table><thead><tr><th style="text-align:center;">方法名</th><th style="text-align:center;">参数</th><th style="text-align:center;">返回值</th></tr></thead><tbody><tr><td style="text-align:center;">refund</td><td style="text-align:center;">array $order</td><td style="text-align:center;">Collection</td></tr></tbody></table><h2 id="退款操作" tabindex="-1"><a class="header-anchor" href="#退款操作"><span>退款操作</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Baidu</span><span class="token punctuation">(</span><span class="token variable">$baiduConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$order</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;order_sn&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 订单编号</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;refund_sn&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 退款编号</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;refund_amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 退款金额（分）</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;reason&#39;</span>        <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 退款原因</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;access_token&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 获取开发者服务权限说明</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;order_id&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 百度收银台订单 ID</span></span>
<span class="line">    <span class="token string single-quoted-string">&#39;user_id&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 百度收银台用户 id</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$type</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 退款类型(默认1) 1：用户发起退款；2：开发者业务方客服退款；3：开发者服务异常退款。</span></span>
<span class="line"><span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">refund</span><span class="token punctuation">(</span><span class="token variable">$order</span><span class="token punctuation">,</span> <span class="token variable">$type</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 返回 Collection 实例包含退款相关信息</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数配置" tabindex="-1"><a class="header-anchor" href="#参数配置"><span>参数配置</span></a></h2><p>所有订单配置参数和官方无异，参数请参考<a href="https://smartprogram.baidu.com/docs/develop/function/tune_up_applyorderrefund_2.0/" target="_blank" rel="noopener noreferrer">这里</a>，查看「请求参数」一栏。</p>`,5),l=[p];function i(o,c){return a(),s("div",null,l)}const d=n(t,[["render",i],["__file","refund.html.vue"]]),u=JSON.parse('{"path":"/baidu/refund.html","title":"退款","lang":"zh-CN","frontmatter":{"title":"退款"},"headers":[{"level":2,"title":"退款操作","slug":"退款操作","link":"#退款操作","children":[]},{"level":2,"title":"参数配置","slug":"参数配置","link":"#参数配置","children":[]}],"git":{"updatedTime":1712041033000,"contributors":[{"name":"kuifeng","email":"1161634940@qq.com","commits":1}]},"filePathRelative":"baidu/refund.md"}');export{d as comp,u as data};