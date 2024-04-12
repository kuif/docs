import{_ as n,c as s}from"./app.cd3cc82f.js";const a={},e=s(`<table><thead><tr><th style="text-align:center;">method</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">openid</td><td style="text-align:center;">\u83B7\u53D6\u5C0F\u7A0B\u5E8Fopenid</td><td style="text-align:center;">string $code</td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">accessToken</td><td style="text-align:center;">\u83B7\u53D6 access_token</td><td style="text-align:center;"></td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">send</td><td style="text-align:center;">QQ\u5C0F\u7A0B\u5E8F\u53D1\u9001\u8BA2\u9605\u6D88\u606F</td><td style="text-align:center;">...</td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">qrcode</td><td style="text-align:center;">\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801\uFF0C\u56FE\u7247 Buffer</td><td style="text-align:center;">...</td><td style="text-align:center;">Buffer</td></tr><tr><td style="text-align:center;">check</td><td style="text-align:center;">\u68C0\u67E5\u5185\u5BB9\u662F\u5426\u8FDD\u89C4</td><td style="text-align:center;">...</td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">decrypt</td><td style="text-align:center;">\u68C0\u9A8C\u6570\u636E\u7684\u771F\u5B9E\u6027\uFF0C\u5E76\u4E14\u83B7\u53D6\u89E3\u5BC6\u540E\u7684\u660E\u6587</td><td style="text-align:center;">...</td><td style="text-align:center;">Collection</td></tr></tbody></table><p><strong>\u5B8C\u5584\u914D\u7F6E</strong></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># QQ\u5C0F\u7A0B\u5E8F\u914D\u7F6E</span>
<span class="token variable">$qqConfig</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;appid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$xcx</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Xcx<span class="token punctuation">\\</span>Qq</span><span class="token punctuation">(</span><span class="token variable">$qqConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// QQ</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u83B7\u53D6\u5C0F\u7A0B\u5E8Fopenid" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5C0F\u7A0B\u5E8Fopenid" aria-hidden="true">#</a> \u83B7\u53D6\u5C0F\u7A0B\u5E8Fopenid</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$code</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">openid</span><span class="token punctuation">(</span><span class="token variable">$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u83B7\u53D6-access-token" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-access-token" aria-hidden="true">#</a> \u83B7\u53D6 access_token</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">accessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="qq\u5C0F\u7A0B\u5E8F\u53D1\u9001\u8BA2\u9605\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#qq\u5C0F\u7A0B\u5E8F\u53D1\u9001\u8BA2\u9605\u6D88\u606F" aria-hidden="true">#</a> QQ\u5C0F\u7A0B\u5E8F\u53D1\u9001\u8BA2\u9605\u6D88\u606F</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$openid</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u7528\u6237openid</span>
<span class="token variable">$template_id</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u8BA2\u9605\u6D88\u606F\u6A21\u677FID</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u53D1\u9001\u6570\u636E</span>
<span class="token variable">$page</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;pages/index/index&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u6253\u5F00\u9875\u9762</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$openid</span><span class="token punctuation">,</span> <span class="token variable">$template_id</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$page</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801" aria-hidden="true">#</a> \u83B7\u53D6\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$path</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;\u5C0F\u7A0B\u5E8F\u9875\u9762\u8DEF\u5F84&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5C0F\u7A0B\u5E8F\u9875\u9762\u8DEF\u5F84</span>

<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">qrcode</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u68C0\u67E5\u5185\u5BB9\u662F\u5426\u8FDD\u89C4" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u5185\u5BB9\u662F\u5426\u8FDD\u89C4" aria-hidden="true">#</a> \u68C0\u67E5\u5185\u5BB9\u662F\u5426\u8FDD\u89C4</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$content</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u5185\u5BB9</span>
<span class="token variable">$openid</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u7528\u6237openid</span>
<span class="token variable">$scene</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u573A\u666F\u679A\u4E3E\u503C\uFF081 \u8D44\u6599\uFF1B2 \u8BC4\u8BBA\uFF1B3 \u8BBA\u575B\uFF1B4 \u793E\u4EA4\u65E5\u5FD7\uFF09</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token variable">$content</span><span class="token punctuation">,</span> <span class="token variable">$openid</span><span class="token punctuation">,</span> <span class="token variable">$scene</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u68C0\u9A8C\u6570\u636E\u7684\u771F\u5B9E\u6027-\u5E76\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u68C0\u9A8C\u6570\u636E\u7684\u771F\u5B9E\u6027-\u5E76\u89E3\u5BC6" aria-hidden="true">#</a> \u68C0\u9A8C\u6570\u636E\u7684\u771F\u5B9E\u6027\uFF0C\u5E76\u89E3\u5BC6</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$sessionKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// SESSSION KEY</span>
<span class="token variable">$encryptedData</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u52A0\u5BC6\u7684\u7528\u6237\u6570\u636E</span>
<span class="token variable">$iv</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u4E0E\u7528\u6237\u6570\u636E\u4E00\u540C\u8FD4\u56DE\u7684\u521D\u59CB\u5411\u91CF</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token variable">$sessionKey</span><span class="token punctuation">,</span> <span class="token variable">$encryptedData</span><span class="token punctuation">,</span> <span class="token variable">$iv</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,15);function t(p,l){return e}var o=n(a,[["render",t],["__file","qq.html.vue"]]);export{o as default};