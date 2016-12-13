webpackJsonp([109],{115:function(t,s,a){t.exports=a(296)},169:function(t,s){t.exports='<section><h1>tab-container</h1> <blockquote> <p>面板，可切换显示子页面。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { TabContainer, TabContainerItem } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(TabContainer.name, TabContainer);\nVue.component(TabContainerItem.name, TabContainerItem);\n</code></pre> <h2>例子</h2> <p>改变 ative 的值，与 <code>&lt;tab-container-item&gt;</code> 的 id 一致即显示对应页面。</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container</span> <span class=hljs-attr>:active.sync</span>=<span class=hljs-string>"active"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab-container1"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 10"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'tab-container1 \' + $index"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab-container2"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 5"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'tab-container2 \' + $index"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-tab-container-item</span> <span class=hljs-attr>id</span>=<span class=hljs-string>"tab-container3"</span>&gt;</span>\n    <span class=hljs-tag>&lt;<span class=hljs-name>mt-cell</span> <span class=hljs-attr>v-for</span>=<span class=hljs-string>"n in 7"</span> <span class=hljs-attr>:title</span>=<span class=hljs-string>"\'tab-container3 \' + $index"</span>&gt;</span><span class=hljs-tag>&lt;/<span class=hljs-name>mt-cell</span>&gt;</span>\n  <span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-tab-container</span>&gt;</span>\n</code></pre> <h2>API</h2> <h3>tab-container</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>active</td> <td>当前激活的 id</td> <td>*</td> <td></td> <td></td> </tr> <tr> <td>swipeable</td> <td>显示滑动效果</td> <td>Boolean</td> <td></td> <td>false</td> </tr> </tbody> </table> <h3>tab-container-item</h3> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>id</td> <td>item 的 id</td> <td>*</td> <td></td> <td></td> </tr> </tbody> </table> <h2>Slot</h2> <h3>tab-container</h3> <table> <thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>内容</td> </tr> </tbody> </table> <h3>tab-container-item</h3> <table> <thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>内容</td> </tr> </tbody> </table> </section>'},296:function(t,s,a){var n,l,e={};l=a(169),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var p="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;l&&(p.template=l),p.computed||(p.computed={}),Object.keys(e).forEach(function(t){var s=e[t];p.computed[t]=function(){return s}})}});