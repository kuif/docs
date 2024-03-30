import{_ as p,r as o,o as l,c,a as s,b as e,F as r,e as t,d as n}from"./app.a85c688c.js";const i={},u=t(`<table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">settle</td><td style="text-align:center;">array $order</td><td style="text-align:center;">Collection</td></tr></tbody></table><h2 id="\u7ED3\u7B97\u53CA\u5206\u8D26" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u7B97\u53CA\u5206\u8D26" aria-hidden="true">#</a> \u7ED3\u7B97\u53CA\u5206\u8D26</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Bytedance</span><span class="token punctuation">(</span><span class="token variable">$bytedanceConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$order</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
    <span class="token string single-quoted-string">&#39;body&#39;</span>         <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4EA7\u54C1\u63CF\u8FF0</span>
    <span class="token string single-quoted-string">&#39;total_amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BA2\u5355\u91D1\u989D\uFF08\u5206\uFF09</span>
    <span class="token string single-quoted-string">&#39;order_sn&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5546\u6237\u5206\u914D\u8BA2\u5355\u53F7</span>
    <span class="token string single-quoted-string">&#39;settle_sn&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F00\u53D1\u8005\u4FA7\u7684\u7ED3\u7B97\u53F7</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">settle</span><span class="token punctuation">(</span><span class="token variable">$order</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8FD4\u56DE Collection \u5B9E\u4F8B\u5305\u542B\u5206\u8D26\u76F8\u5173\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u8BA2\u5355\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BA2\u5355\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u8BA2\u5355\u914D\u7F6E\u53C2\u6570</h3>`,4),d=n("\u9664\u5FC5\u4F20\u53C2\u6570\u5916\uFF0C\u53EF\u9009\u53C2\u6570 "),k=s("code",null,"cp_extra",-1),b=n("\uFF0C"),h=s("code",null,"settle_params",-1),g=n(" \uFF0C\u5982\u9700\u4F20\u5165\u5176\u4ED6\u53C2\u6570\uFF0C\u53EF\u6839\u636E\u81EA\u5DF1\u9700\u6C42\u4EFB\u610F\u4FEE\u6539\u6269\u5C55 \u6240\u6709\u8BA2\u5355\u914D\u7F6E\u53C2\u6570\u548C\u5B98\u65B9\u65E0\u5F02\uFF0C\u53C2\u6570\u8BF7\u53C2\u8003"),m={href:"https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/server/ecpay/APIlist/settlement#%E4%B8%80%E3%80%81%E5%8F%91%E8%B5%B7%E7%BB%93%E7%AE%97%E5%8F%8A%E5%88%86%E8%B4%A6",target:"_blank",rel:"noopener noreferrer"},_=n("\u8FD9\u91CC"),y=n("\uFF0C\u67E5\u770B\u300C\u8BF7\u6C42\u53C2\u6570\u300D\u4E00\u680F\u3002"),x=t(`<table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">querySettle</td><td style="text-align:center;">string $orderSn</td><td style="text-align:center;">Collection</td></tr></tbody></table><h2 id="\u67E5\u8BE2\u5206\u8D26" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u5206\u8D26" aria-hidden="true">#</a> \u67E5\u8BE2\u5206\u8D26</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Bytedance</span><span class="token punctuation">(</span><span class="token variable">$bytedanceConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$settleSn</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;settle_snxxxxxxxx&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5F00\u53D1\u8005\u4FA7\u7684\u7ED3\u7B97\u53F7</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">querySettle</span><span class="token punctuation">(</span><span class="token variable">$settleSn</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,3),v=n("\u76F8\u5173\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E\uFF0C\u8BF7\u53C2\u8003"),E={href:"https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/server/ecpay/APIlist/settlement#%E4%BA%8C%E3%80%81%E7%BB%93%E7%AE%97%E5%8F%8A%E5%88%86%E8%B4%A6%E7%BB%93%E6%9E%9C%E6%9F%A5%E8%AF%A2",target:"_blank",rel:"noopener noreferrer"},f=n("\u8FD9\u91CC"),B=n("\uFF0C\u67E5\u770B\u300C\u54CD\u5E94\u793A\u4F8B\u300D\u4E00\u680F\u3002");function $(q,A){const a=o("ExternalLinkIcon");return l(),c(r,null,[u,s("p",null,[d,k,b,h,g,s("a",m,[_,e(a)]),y]),x,s("p",null,[v,s("a",E,[f,e(a)]),B])],64)}var F=p(i,[["render",$],["__file","settle.html.vue"]]);export{F as default};
