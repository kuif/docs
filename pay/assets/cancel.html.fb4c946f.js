import{_ as t,r as o,o as c,c as p,a,b as e,F as r,e as l,d as n}from"./app.a85c688c.js";const i={},d=l(`<table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">cancel</td><td style="text-align:center;">string/array $order</td><td style="text-align:center;">Collection</td></tr></tbody></table><h2 id="\u5173\u95ED\u8BA2\u5355" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u8BA2\u5355" aria-hidden="true">#</a> \u5173\u95ED\u8BA2\u5355</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Baidu</span><span class="token punctuation">(</span><span class="token variable">$baiduConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$orderSn</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;order_snxxxxxxxx&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5546\u6237\u8BA2\u5355\u53F7</span>
<span class="token variable">$accessToken</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;access_tokenxxxxxxxx&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u5F00\u53D1\u8005\u670D\u52A1\u6743\u9650</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token variable">$orderSn</span><span class="token punctuation">,</span> <span class="token variable">$accessToken</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u53C2\u6570\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u914D\u7F6E" aria-hidden="true">#</a> \u53C2\u6570\u914D\u7F6E</h2>`,4),u=n("\u83B7\u53D6\u5F00\u53D1\u8005\u670D\u52A1\u6743\u9650 access_token\u7684\u83B7\u53D6\uFF0C\u8BF7\u53C2\u8003"),k={href:"https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/",target:"_blank",rel:"noopener noreferrer"},_=n("\u8FD9\u91CC"),h=n(" getAccessToken"),b=n("\u6240\u6709\u8BA2\u5355\u914D\u7F6E\u53C2\u6570\u548C\u5B98\u65B9\u65E0\u5F02\uFF0C\u53C2\u6570\u8BF7\u53C2\u8003"),x={href:"https://smartprogram.baidu.com/docs/develop/function/tune_up_rest_2.0/",target:"_blank",rel:"noopener noreferrer"},m=n("\u8FD9\u91CC"),g=n("\uFF0C\u67E5\u770B\u300C\u8BF7\u6C42\u53C2\u6570\u300D\u4E00\u680F\u3002");function f(v,y){const s=o("ExternalLinkIcon");return c(),p(r,null,[d,a("p",null,[u,a("a",k,[_,e(s)]),h]),a("p",null,[b,a("a",x,[m,e(s)]),g])],64)}var B=t(i,[["render",f],["__file","cancel.html.vue"]]);export{B as default};
