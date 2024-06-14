import{_ as n,c as s,o as a,a as t}from"./app-O-FW8RaH.js";const e={},p=t(`<table><thead><tr><th style="text-align:center;">method</th><th style="text-align:center;">参数</th><th style="text-align:center;">返回值</th></tr></thead><tbody><tr><td style="text-align:center;">notify</td><td style="text-align:center;">无/array/ServerRequestInterface</td><td style="text-align:center;">Collection</td></tr></tbody></table><h2 id="支付回调" tabindex="-1"><a class="header-anchor" href="#支付回调"><span>支付回调</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Unionpay</span><span class="token punctuation">(</span><span class="token variable">$unionConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 支付回调</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 验签并获取支付回调相关参数</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 支付成功后操作</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 错误信息</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通知参数" tabindex="-1"><a class="header-anchor" href="#通知参数"><span>通知参数</span></a></h3><p>相关通知参数说明，请参考<a href="https://open.unionpay.com/tjweb/acproduct/APIList?acpAPIId=755&amp;apiservId=448&amp;version=V2.2&amp;bussType=0" target="_blank" rel="noopener noreferrer">这里</a>，查看「通知参数」一栏。</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;accNo&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;6216***********0018&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;accessType&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;bizType&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;000201&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;currencyCode&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;156&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;encoding&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;UTF-8&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;exchangeRate&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;merId&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;777290058207330&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;orderId&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;1718354454&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;queryId&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;192406140840544025268&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;respCode&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;00&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;respMsg&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;success&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;settleAmt&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;settleCurrencyCode&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;156&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;settleDate&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0614&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;signMethod&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;01&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;traceNo&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;402526&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;traceTime&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0614084054&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;txnAmt&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;1&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;txnSubType&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;01&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;txnTime&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;20240614084054&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;txnType&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;01&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;version&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;5.1.0&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function l(i,u){return a(),s("div",null,o)}const d=n(e,[["render",l],["__file","notify.html.vue"]]),r=JSON.parse('{"path":"/union/notify.html","title":"接收回调","lang":"zh-CN","frontmatter":{"title":"接收回调"},"headers":[{"level":2,"title":"支付回调","slug":"支付回调","link":"#支付回调","children":[{"level":3,"title":"通知参数","slug":"通知参数","link":"#通知参数","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"union/notify.md"}');export{d as comp,r as data};
