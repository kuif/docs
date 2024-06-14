import{_ as n,c as s,o as a,a as t}from"./app-O-FW8RaH.js";const e={},p=t(`<table><thead><tr><th style="text-align:center;">method</th><th style="text-align:center;">说明</th><th style="text-align:center;">参数</th><th style="text-align:center;">返回值</th></tr></thead><tbody><tr><td style="text-align:center;">getToken</td><td style="text-align:center;">获取access_token和user_id</td><td style="text-align:center;">array $order</td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">doGetUserInfo</td><td style="text-align:center;">获取会员信息</td><td style="text-align:center;">array $order</td><td style="text-align:center;">Collection</td></tr></tbody></table><h2 id="换取授权访问令牌" tabindex="-1"><a class="header-anchor" href="#换取授权访问令牌"><span>换取授权访问令牌</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Alipay</span><span class="token punctuation">(</span><span class="token variable">$alipayConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接跳转(静默授权：auth_base)</span></span>
<span class="line"><span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接跳转(主动授权：auth_user)</span></span>
<span class="line"><span class="token keyword">echo</span> <span class="token variable">$result</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h3><p>PC 网页内获取用户信息，操作获取流程「<a href="https://opendocs.alipay.com/open/284/web?pathHash=9ec22daf" target="_blank" rel="noopener noreferrer">这里</a>」。</p><h3 id="返回示例" tabindex="-1"><a class="header-anchor" href="#返回示例"><span>返回示例</span></a></h3><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;alipay_system_oauth_token_response&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;user_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;2088102150477652&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;open_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;074a1CcTG1LelxKe4xQC0zgNdId0nxi95b5lsNpazWYoCo5&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;access_token&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;20120823ac6ffaa4d2d84e7384bf983531473993&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;expires_in&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;3600&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;refresh_token&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;20120823ac6ffdsdf2d84e7384bf983531473993&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;re_expires_in&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;3600&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;auth_start&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;2010-11-11 11:11:11&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;sign&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;ERITJKEIJKJHKKKKKKKHJEREEEEEEEEEEE&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支付宝会员信息查询接口" tabindex="-1"><a class="header-anchor" href="#支付宝会员信息查询接口"><span>支付宝会员信息查询接口</span></a></h2><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Alipay</span><span class="token punctuation">(</span><span class="token variable">$alipayConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token variable">$token</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//授权token</span></span>
<span class="line"><span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">doGetUserInfo</span><span class="token punctuation">(</span><span class="token variable">$token</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置参数-1" tabindex="-1"><a class="header-anchor" href="#配置参数-1"><span>配置参数</span></a></h3><p>所有配置参数和官方无异，参数请查看「<a href="https://opendocs.alipay.com/open/029p6f?pathHash=5c3feae5#%E4%B8%9A%E5%8A%A1%E5%93%8D%E5%BA%94%E5%8F%82%E6%95%B0" target="_blank" rel="noopener noreferrer">业务响应参数</a>」一栏。</p><h3 id="返回示例-1" tabindex="-1"><a class="header-anchor" href="#返回示例-1"><span>返回示例</span></a></h3><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="language-php"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;alipay_user_info_share_response&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;10000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;Success&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;user_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;2088102104794936&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;avatar&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;http://tfsimg.alipay.com/images/partner/T1uIxXXbpXXXXXXXX&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;安庆&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;nick_name&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;支付宝小二&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;province&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;安徽省&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string double-quoted-string">&quot;gender&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;F&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string double-quoted-string">&quot;sign&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;ERITJKEIJKJHKKKKKKKHJEREEEEEEEEEEE&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[p];function o(i,c){return a(),s("div",null,l)}const r=n(e,[["render",o],["__file","user.html.vue"]]),d=JSON.parse('{"path":"/alipay/user.html","title":"会员","lang":"zh-CN","frontmatter":{"title":"会员"},"headers":[{"level":2,"title":"换取授权访问令牌","slug":"换取授权访问令牌","link":"#换取授权访问令牌","children":[{"level":3,"title":"配置参数","slug":"配置参数","link":"#配置参数","children":[]},{"level":3,"title":"返回示例","slug":"返回示例","link":"#返回示例","children":[]}]},{"level":2,"title":"支付宝会员信息查询接口","slug":"支付宝会员信息查询接口","link":"#支付宝会员信息查询接口","children":[{"level":3,"title":"配置参数","slug":"配置参数-1","link":"#配置参数-1","children":[]},{"level":3,"title":"返回示例","slug":"返回示例-1","link":"#返回示例-1","children":[]}]}],"git":{"updatedTime":1712041033000,"contributors":[{"name":"kuifeng","email":"1161634940@qq.com","commits":1}]},"filePathRelative":"alipay/user.md"}');export{r as comp,d as data};
