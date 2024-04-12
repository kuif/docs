import{_ as p,r as o,o as u,c,a as s,b as t,F as l,e,d as n}from"./app.fb64a2cb.js";const r={},i=e(`<table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D</th><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">refund</td><td style="text-align:center;">array $order</td><td style="text-align:center;">Collection</td></tr></tbody></table><h2 id="\u9000\u6B3E\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u9000\u6B3E\u64CD\u4F5C" aria-hidden="true">#</a> \u9000\u6B3E\u64CD\u4F5C</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$pay</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Pay<span class="token punctuation">\\</span>Wechat</span><span class="token punctuation">(</span><span class="token variable">$wechatConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$order</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;refund_sn&#39;</span>     <span class="token operator">=&gt;</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u5546\u6237\u9000\u6B3E\u5355\u53F7</span>
    <span class="token string single-quoted-string">&#39;refund_amount&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u9000\u6B3E\u91D1\u989D</span>
    <span class="token string single-quoted-string">&#39;order_sn&#39;</span>      <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;codexxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment"># \u5546\u6237\u8BA2\u5355\u53F7\uFF08order_sn\u6216transaction_id\u4E24\u8005\u5FC5\u4F20\u5176\u4E00\uFF09</span>
    <span class="token string single-quoted-string">&#39;transaction_id&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;openidxxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5FAE\u4FE1\u652F\u4ED8\u8BA2\u5355\u53F7</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$pay</span><span class="token operator">-&gt;</span><span class="token function">refund</span><span class="token punctuation">(</span><span class="token variable">$order</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u8FD4\u56DE Collection \u5B9E\u4F8B\u5305\u542B\u9000\u6B3E\u76F8\u5173\u4FE1\u606F</span>
<span class="token comment">// $order[&#39;reason&#39;] // \u9000\u6B3E\u539F\u56E0\u9009\u586B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u9000\u6B3E\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u9000\u6B3E\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> \u9000\u6B3E\u8BF7\u6C42\u53C2\u6570</h3>`,4),d=n("\u6240\u6709\u8BA2\u5355\u914D\u7F6E\u53C2\u6570\u548C\u5B98\u65B9\u65E0\u5F02\uFF0C\u53C2\u6570\u8BF7\u53C2\u8003"),b={href:"https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_9.shtml",target:"_blank",rel:"noopener noreferrer"},k=n("\u8FD9\u91CC"),q=n("\uFF0C\u67E5\u770B\u300C\u8BF7\u6C42\u53C2\u6570\u300D\u4E00\u680F\u3002"),g=s("h3",{id:"\u9000\u6B3E\u8FD4\u56DE\u53C2\u6570",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u9000\u6B3E\u8FD4\u56DE\u53C2\u6570","aria-hidden":"true"},"#"),n(" \u9000\u6B3E\u8FD4\u56DE\u53C2\u6570")],-1),m=n("\u76F8\u5173\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E\uFF0C\u8BF7\u53C2\u8003"),_={href:"https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_9.shtml",target:"_blank",rel:"noopener noreferrer"},h=n("\u8FD9\u91CC"),f=n("\uFF0C\u67E5\u770B\u300C\u8FD4\u56DE\u53C2\u6570\u300D\u4E00\u680F\u3002"),x=e(`<h3 id="\u8FD4\u56DE\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u793A\u4F8B" aria-hidden="true">#</a> \u8FD4\u56DE\u793A\u4F8B</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token punctuation">{</span>
    <span class="token string double-quoted-string">&quot;refund_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;50000000382019052709732678859&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;out_refund_no&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;1217752501201407033233368018&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;transaction_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;1217752501201407033233368018&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;out_trade_no&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;1217752501201407033233368018&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;channel&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;ORIGINAL&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;user_received_account&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;\u62DB\u5546\u94F6\u884C\u4FE1\u7528\u53610403&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;success_time&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;2020-12-01T16:18:12+08:00&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;create_time&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;2020-12-01T16:18:12+08:00&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;status&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;SUCCESS&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;funds_account&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;UNSETTLED&quot;</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;amount&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string double-quoted-string">&quot;total&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;refund&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token string double-quoted-string">&quot;account&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;AVAILABLE&quot;</span><span class="token punctuation">,</span>
                <span class="token string double-quoted-string">&quot;amount&quot;</span><span class="token punctuation">:</span> <span class="token number">444</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;payer_total&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;payer_refund&quot;</span><span class="token punctuation">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;settlement_refund&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;settlement_total&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;discount_refund&quot;</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;currency&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;CNY&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;promotion_detail&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string double-quoted-string">&quot;promotion_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;109519&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;scope&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;SINGLE&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;DISCOUNT&quot;</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;amount&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;refund_amount&quot;</span><span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;goods_detail&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string double-quoted-string">&quot;merchant_goods_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;1217752501201407033233368018&quot;</span><span class="token punctuation">,</span>
                    <span class="token string double-quoted-string">&quot;wechatpay_goods_id&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;1001&quot;</span><span class="token punctuation">,</span>
                    <span class="token string double-quoted-string">&quot;goods_name&quot;</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;iPhone6s 16G&quot;</span><span class="token punctuation">,</span>
                    <span class="token string double-quoted-string">&quot;unit_price&quot;</span><span class="token punctuation">:</span> <span class="token number">528800</span><span class="token punctuation">,</span>
                    <span class="token string double-quoted-string">&quot;refund_amount&quot;</span><span class="token punctuation">:</span> <span class="token number">528800</span><span class="token punctuation">,</span>
                    <span class="token string double-quoted-string">&quot;refund_quantity&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,2);function y(v,N){const a=o("ExternalLinkIcon");return u(),c(l,null,[i,s("p",null,[d,s("a",b,[k,t(a)]),q]),g,s("p",null,[m,s("a",_,[h,t(a)]),f]),x],64)}var C=p(r,[["render",y],["__file","refund.html.vue"]]);export{C as default};