import{_ as n,c as s}from"./app.5ce3ec3f.js";const a={},e=s(`<table><thead><tr><th style="text-align:center;">method</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td style="text-align:center;">openid</td><td style="text-align:center;">\u83B7\u53D6\u5C0F\u7A0B\u5E8Fopenid</td><td style="text-align:center;">string $code</td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">userPhone</td><td style="text-align:center;">\u83B7\u53D6\u7528\u6237\u624B\u673A\u53F7</td><td style="text-align:center;">string $code</td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">accessToken</td><td style="text-align:center;">\u83B7\u53D6 access_token</td><td style="text-align:center;"></td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">send</td><td style="text-align:center;">\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u53D1\u9001\u8BA2\u9605\u6D88\u606F</td><td style="text-align:center;">...</td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">qrcode</td><td style="text-align:center;">\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801\u6216\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801\uFF0C\u56FE\u7247 Buffer</td><td style="text-align:center;">...</td><td style="text-align:center;">Buffer</td></tr><tr><td style="text-align:center;">check</td><td style="text-align:center;">\u68C0\u67E5\u5185\u5BB9\u662F\u5426\u8FDD\u89C4</td><td style="text-align:center;">...</td><td style="text-align:center;">Collection</td></tr><tr><td style="text-align:center;">decrypt</td><td style="text-align:center;">\u68C0\u9A8C\u6570\u636E\u7684\u771F\u5B9E\u6027\uFF0C\u5E76\u4E14\u83B7\u53D6\u89E3\u5BC6\u540E\u7684\u660E\u6587</td><td style="text-align:center;">...</td><td style="text-align:center;">Collection</td></tr></tbody></table><p><strong>\u5B8C\u5584\u914D\u7F6E</strong></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u914D\u7F6E</span>
<span class="token variable">$wechatConfig</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;appid&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;secret&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$xcx</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Xcx<span class="token punctuation">\\</span>Wechat</span><span class="token punctuation">(</span><span class="token variable">$wechatConfig</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5FAE\u4FE1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u83B7\u53D6\u5C0F\u7A0B\u5E8Fopenid" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5C0F\u7A0B\u5E8Fopenid" aria-hidden="true">#</a> \u83B7\u53D6\u5C0F\u7A0B\u5E8Fopenid</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$code</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">openid</span><span class="token punctuation">(</span><span class="token variable">$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u83B7\u53D6\u7528\u6237\u624B\u673A\u53F7" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u7528\u6237\u624B\u673A\u53F7" aria-hidden="true">#</a> \u83B7\u53D6\u7528\u6237\u624B\u673A\u53F7</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$code</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">userPhone</span><span class="token punctuation">(</span><span class="token variable">$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u83B7\u53D6-access-token" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-access-token" aria-hidden="true">#</a> \u83B7\u53D6 access_token</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">accessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u53D1\u9001\u8BA2\u9605\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u53D1\u9001\u8BA2\u9605\u6D88\u606F" aria-hidden="true">#</a> \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u53D1\u9001\u8BA2\u9605\u6D88\u606F</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$openid</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u7528\u6237openid</span>
<span class="token variable">$template_id</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u8BA2\u9605\u6D88\u606F\u6A21\u677FID</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u53D1\u9001\u6570\u636E</span>
<span class="token variable">$page</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;pages/index/index&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u6253\u5F00\u9875\u9762</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token variable">$openid</span><span class="token punctuation">,</span> <span class="token variable">$template_id</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$page</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801\u6216\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801\u6216\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801" aria-hidden="true">#</a> \u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801\u6216\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$path</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;\u5C0F\u7A0B\u5E8F\u9875\u9762\u8DEF\u5F84&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u5C0F\u7A0B\u5E8F\u9875\u9762\u8DEF\u5F84</span>
<span class="token variable">$type</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// \u83B7\u53D6\u7C7B\u578B 1:createwxaqrcode 2(\u9ED8\u8BA4):getwxacode 3:getwxacodeunlimit</span>
<span class="token variable">$env_version</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;release&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u8981\u6253\u5F00\u7684\u5C0F\u7A0B\u5E8F\u7248\u672C\u3002\u6B63\u5F0F\u7248\u4E3A release(\u9ED8\u8BA4) \u4F53\u9A8C\u7248\u4E3A trial \u5F00\u53D1\u7248\u4E3A develop</span>
<span class="token variable">$width</span> <span class="token operator">=</span> <span class="token number">430</span><span class="token punctuation">;</span> <span class="token comment">// \u5C0F\u7A0B\u5E8F\u7801\u5BBD\u5EA6 px (\u9ED8\u8BA4430)</span>
<span class="token variable">$is_hyaline</span><span class="token operator">=</span><span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u9700\u8981\u900F\u660E\u5E95\u8272 (\u9ED8\u8BA4true)</span>

<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">qrcode</span><span class="token punctuation">(</span><span class="token variable">$path</span><span class="token punctuation">,</span> <span class="token variable">$type</span><span class="token punctuation">,</span> <span class="token variable">$env_version</span><span class="token punctuation">,</span> <span class="token variable">$width</span><span class="token punctuation">,</span>  <span class="token variable">$is_hyaline</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u68C0\u67E5\u5185\u5BB9\u662F\u5426\u8FDD\u89C4" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u5185\u5BB9\u662F\u5426\u8FDD\u89C4" aria-hidden="true">#</a> \u68C0\u67E5\u5185\u5BB9\u662F\u5426\u8FDD\u89C4</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$content</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u5185\u5BB9</span>
<span class="token variable">$openid</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u7528\u6237openid</span>
<span class="token variable">$scene</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u573A\u666F\u679A\u4E3E\u503C\uFF081 \u8D44\u6599\uFF1B2 \u8BC4\u8BBA\uFF1B3 \u8BBA\u575B\uFF1B4 \u793E\u4EA4\u65E5\u5FD7\uFF09</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token variable">$content</span><span class="token punctuation">,</span> <span class="token variable">$openid</span><span class="token punctuation">,</span> <span class="token variable">$scene</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u68C0\u9A8C\u6570\u636E\u7684\u771F\u5B9E\u6027-\u5E76\u89E3\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u68C0\u9A8C\u6570\u636E\u7684\u771F\u5B9E\u6027-\u5E76\u89E3\u5BC6" aria-hidden="true">#</a> \u68C0\u9A8C\u6570\u636E\u7684\u771F\u5B9E\u6027\uFF0C\u5E76\u89E3\u5BC6</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$sessionKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// SESSSION KEY</span>
<span class="token variable">$encryptedData</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u52A0\u5BC6\u7684\u7528\u6237\u6570\u636E</span>
<span class="token variable">$iv</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">//\u4E0E\u7528\u6237\u6570\u636E\u4E00\u540C\u8FD4\u56DE\u7684\u521D\u59CB\u5411\u91CF</span>
<span class="token variable">$xcx</span><span class="token operator">-&gt;</span><span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token variable">$sessionKey</span><span class="token punctuation">,</span> <span class="token variable">$encryptedData</span><span class="token punctuation">,</span> <span class="token variable">$iv</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u540C\u57CE\u914D\u9001" tabindex="-1"><a class="header-anchor" href="#\u540C\u57CE\u914D\u9001" aria-hidden="true">#</a> \u540C\u57CE\u914D\u9001</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">require_once</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./vendor/autoload.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B8C\u6574\u914D\u7F6E</span>
<span class="token variable">$config</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
    <span class="token string single-quoted-string">&#39;appid&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;aes_sn&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;aes_key&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;rsa_sn&#39;</span>    <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;public_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;./cert/rsa_public_key.txt&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;private_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;./cert/rsa_private_key.txt&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;cert_sn&#39;</span>   <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;xxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;cert_key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;./cert/cert_key.cer&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$access_token</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;https://api.weixin.qq.com/cgi-bin/express/intracity/querystore?access_token=&#39;</span> <span class="token operator">.</span> <span class="token variable">$access_token</span><span class="token punctuation">;</span>
<span class="token variable">$params</span> <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token comment">// \u8BF7\u6C42\u53C2\u6570</span>
    <span class="token string double-quoted-string">&quot;wx_store_id&quot;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;4000000000000******&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// \u67E5\u8BE2\u95E8\u5E97\uFF08\u6570\u636E\u7684\u52A0\u5BC6\u7B7E\u540D\u9A8C\u7B7E\uFF0C\u6269\u5C55\u5305\u4E2D\u5DF2\u5904\u7406\uFF09</span>
<span class="token variable">$re</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>fengkui<span class="token punctuation">\\</span>Xcx<span class="token punctuation">\\</span>Wechat</span><span class="token punctuation">(</span><span class="token variable">$config</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">,</span> <span class="token variable">$params</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,19);function t(p,l){return e}var c=n(a,[["render",t],["__file","wechat.html.vue"]]);export{c as default};