webpackJsonp([0], [, function (t, a, e) {
  function i(t) {
    e(25)
  }

  var s = e(0)(e(13), e(54), i, null, null);
  t.exports = s.exports
}, function (t, a, e) {
  function i(t) {
    e(20)
  }

  var s = e(0)(e(14), e(49), i, null, null);
  t.exports = s.exports
}, , function (t, a, e) {
  "use strict";
  a.a = {
    post: [{
      id: 1,
      title: "html5技术将推动移动浏览器变革",
      content: "<blockquote><p>在网络条件日渐成熟的今天，横跨智能手机、平板电脑以及PC终端的HTML5有其无可替代的优势。业内人士分析称，HTML5将为移动互联网带来技术革命，推动移动浏览器变革。\n<p>HTML5最大特点：跨平台神奇时代制作人张哲介绍说，HTML5技术是包括HTML、CSS、JavaScript在内的一套技术组合，由谷歌、苹果等几百家公司一起开发，试图将Web带入一个成熟的应用平台。他认为，HTML5最大的特点就是跨平台。一款HTML5游戏，可以随时随地在任何支持HTML5的浏览器上运行。</p>\n<p>张哲表示，HTML5的出现，彻底改变了Web网页的呈现方式，为移动互联网带来了技术革命。无论游戏、视频、音乐、阅读还是其他应用，在HTML5的支持下，都可以在浏览器上拥有更好、更便捷的使用体验。比如在微博、微信里，玩家通过分享一个链接，就可以让好友立刻进入游戏，这些是原生游戏做不到的。</p>\n<p>峰会上，业内人士分析称，HTML5大潮已经袭来，这项技术对移动互联网的发展将起到非常大的驱动作用。2013年，谷歌发布的Android平台新版ChromeBeta支持HTML5，360宣布将全面推动HTML5发展与普及，三星、中兴、摩托罗拉、火狐等新手机都支持HTML5应用。</p><p>数据显示，2013年全球将有10亿手机浏览器支持HTML5，同时，HTML Web开发者数量将达到200万。毫无疑问，HTML5在未来5-10年内依旧会是移动互联网领域的主宰者。同时，HTML5技术标准的发展与普及意味着世界上将出现功能更强大、更稳定的网络应用.</p><p>有研究机构认为，HTML5兴起，将令苹果的经营利润增长在2015年或遭受30%的损失。同时，苹果生态系统的封闭性也将被打破。苹果采取了拖延策略，为自己下一步布局留出时间。一方面，苹果在iOS设备上强推MPEG格式始终不肯让步；另一方面，苹果甚至从iOS 4.0(手机操作系统)开始，关闭了大量对HTML5重要的API，在iOS上给HTML5应用开发者设置障碍。</p><p>现在Google成了HTML5的最大希望，因为眼下Google对Android的原生生态几乎已失去控制，Google寄希望于HTML5重建一个全新的生态系统。不过，Google却心有余而力不足。</p><p>由于HTML5对复杂的Android硬件终端适应性并不好，像根据屏幕大小、分辨率来调整应用窗口大小的这种基础功能，也往往让开发者无所适从。艾媒咨询首席分析师张毅认为，“考虑到对不同设备的兼容性，目前HTML5的开发成本，不比本地APP降低多少。”而且，HTML5标准制定的分歧也加剧了开发者对兼容性的担忧。”</p></p><p>不过，从另一个角度看，担心HTML5能走多远，可能只是杞人忧天。知名互联网评论家Keso认为：“HTML5的潜能正等待挖掘，未来也许根本看不见一个叫浏览器的东西。”因为HTML5可以打包成APP的形式。换句话说，就算我们不再需要Web或Web应用了，但HTML5仍可作为多种应用开发语言中的一种而存在，只不过再度回到HTML5之前那样的混乱。从这个意义上来说，“2022年”还是值得等待和期待的。</p></p></blockquote>"
    }, {
      id: 2,
      title: "关于响应式Web设计技巧以及css设置",
      content: '<blockquote><p>html5和css3流行至今，我在做响应式的网站一直是在“尝试”的阶段。并没有深入的去研究和学习，浅显的理解就是根据屏幕分辨率的大小，网站布局、图片、文字大小等相应改变。以后使用平板、手机浏览网站的用户会越来越多，对于前端设计师，学好用html5、css3做响应式网站是势在必行。</p><p>响应式网页设计这个术语，由伊桑马克特提出，他在Alist Apart 发表了一篇开创性的文章，将三种已有的开发技巧（弹性网格布局、弹性图片、媒体和媒体查询）整合起来，并命名为响应式网页布局。还有一些其他叫法，如流式设计、弹性布局、塑料布局、流体设计、自适应布局、跨设备设计以及弹性设计。</p><p>以往我们显示针对桌面电脑来进行宽度设计，然后将其缩小并针对小屏幕进行内容重排；现在我们应该首先针对小屏幕进行设计，然后逐步增强针对大屏幕的设计和内容。</p><p>三个简单步骤，让你的网站变成响应式网站</p><p>ios和Android浏览器都基于Webkit核心。这两种浏览器以及很多其他浏览器如chrome、opera，都支持用viewport meta元素覆盖默认的画布缩放设置，只需要在html的head标签中插入一个meta标签。meta标签中可以设置具体的宽度或者缩放比例。</p><p>示例："meta name="viewport" content="width=device-width,initial-scale=2,maximum-scale=3,user-scalable=no""</p><p>分析：width=device-width告诉浏览器页面的宽度应该等于设备宽度；initial-scale=2页面的缩放比例，设置比例为设备尺寸的2倍；maximum-scale=3,允许用户将页面最多放大至设备宽度的3倍；user-scalable=no禁止用户缩放。缩放是一个重要的辅助功能，所以实践中很少禁用。</p><p>一：粘贴下面的代码到head和/head标签之间:</p><p>meta name="viewport" content="width=device-width,initial-scale=1.0"</p><p>设置比例为1.0这表示浏览器将按照其视口的实际大小来渲染页面</p><p>二：针对不同视口宽度修正设计</p><p>设置viewport meta 标签后，现在我们针对不同视口修正设计效果，创建CSS样式表，并在页面中调用：\n常见媒体查询</p><p>/* 平板电脑布局: 481px 至 768px。样式继承自: 移动设备布局。 */</p><p>@media only screen and (min-width: 481px) {</p>\n<p>.class{</p><p>background: #333;</p><p>}</p><p>}</p>\n<p>/* 桌面电脑布局: 769px 至最高 1232px。样式继承自: 移动设备布局和平板电脑布局。*/</p>\n<p>@media only screen and (min-width: 769px) {</p><p>.class {</p><p>background: #666;</p><p>}</p><p>}</p><p>三：字体、弹性图片、视频</p><p>对于响应式网站来说应该有响应式的字体，一个响应式的字体大小应关联它的父容器的宽度，这样它才可以适应客户端的屏幕。CSS3规范引入了一个新的单位叫 rem，和 em 类相似，但相对于 HTML 元素来说， rem 更易于使用。rem 是相对于 HTML 元素的，不要忘了重置 HTML 的字体大小：</p><p>html { font-size:100%; }</p><p>完成后，您可以定义响应式的字体大小，如下所示：<p><p>@media (min-width: 640px) { body {font-size:1rem;} }<p><p>@media (min-width:960px) { body {font-size:1.2rem;} }</p><p>@media (min-width:1100px) { body {font-size:1.5rem;} }</p><p>请注意，旧浏览器不支持 rem 单元，所以不要忘了实现一个替代。</p><p>弹性图片</p><p>我们需要为图片设置max-width:100%和height:auto，来实现其弹性化。对于IE，仍然需要一点额外的工作：</p><p>img{max-width: 100%;height: auto;width: auto\\9; /* ie8 */}弹性内嵌视频同样的，对于视频，我们也需要做max-width： 100%的设置；但是Safari对embed的该属性支持不是很给力，所以我们以width：100%来代替：.video embed,.video object,.video iframe {width: 100%;height: auto;}</p><blockquote>'
    }, {
      id: 3,
      title: "JavaScript的特点",
      content: "<blockquote><p>JavaScript是通过嵌入或调入在标准的HTML语言中实现的，其出现弥补了HTML语言的缺陷，是Java与HTML折中的选择。JavaScript具有以下几个基本特点：</p><p>1）JavaScript是一种脚本编写语言，其采用小程序段的方式实现编程。同其他脚本语言一样，JavaScript也是一种解释性语言，其提供了一个非常方便的开发过程。JavaScript的语法基本结构形式与C、C++、Java十分类似。但在使用前，不像这些语言需要先编译，而是在程序运行过程中被逐行地解释。JavaScript与HTML标识结合在一起，从而方便用户的使用操作。</p><p>2）JavaScript是一种基于对象的语言，同时其也可以被看作是一种面向对象的语言，这意味着JavaScript能运用其已经创建的对象。因此，许多功能可以来自于脚本环境中对象的方法与脚本的相互作用。</p><p>3）JavaScript具有简单性。其简单性主要体现在：首先，JavaScript是一种基于Java基本语句和控制流之上的简单而紧凑的设计，从而对于使用者学习Java或其他C语系的编程语言是一种非常好的过渡，而对于具有C语系编程功底的程序员来说，JavaScript上手也非常容易；其次，其变量类型是采用弱类型，并未使用严格的数据类型。</p>\n<p>4）JavaScript具有非常高的安全性。JavaScript作为一种安全性语言，不被允许访问本地的硬盘，且不能将数据存入服务器，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。从而有效地防止数据的丢失或对系统的非法访问。</p><p>5）JavaScript是动态的，可以直接对用户或客户输入做出响应，无须经过Web服务程序。JavaScript对用户的响应，是以事件驱动的方式进行的。在网页（Web Page）中执行了某种操作所产生的动作，被称为“事件”（Event）。例如按下鼠标、移动窗口、选择菜单等都可以被视为事件。当事件发生后，可能会引起相应的事件响应，执行某些对应的脚本，这种机制被称为“事件驱动”。</p><p>6）JavaScript具有跨平台性。JavaScript依赖于浏览器本身，与操作环境无关，只要计算机能运行浏览器，并支持JavaScript的浏览器，就可正确执行，从而实现了“编写一次，走遍天下”的梦想。</p><p>综合所述，JavaScript是一种新的描述语言，其可以被嵌入到HTML文件中。JavaScript语言可以做到响应使用者的需求事件（例如表单的输入），而不需要任何的网络来回传输资料。所以当一位使用者输入一项资料时，此资料数据不用经过传给服务器（server）处理再传回来的过程，而直接可以被客户端（client）的应用程序所处理。</p><p>1.2   JavaScript与Java的区别</p><p>JavaScript和Java在语法上十分类似，但其有着根本的区别。Java是一种比JavaScript更复杂的程序语言，而JavaScript相对于Java来说，则是相当容易上手的。由于JavaScript程序员可以不太注重程序的编写技巧，所以许多Java的特性在JavaScript中并不被支持。</p><p>虽然JavaScript与Java有紧密的联系，但却是两个公司开发的两个不同的产品。Java是SUN公司推出的新一代面向对象的程序设计语言，特别适合于Internet应用程序开发；而JavaScript是基于Netscape公司的产品，其最初的目的是为了扩展Netscape Navigator功能，而开发的一种可以嵌入Web页面中的基于对象和事件驱动的解释性语言，其前身是Live Script；而Java的前身是Oak语言。下面对两种语言间的异同做如下比较。</p><p>1.2.1   基于对象和面向对象</p><p>Java是一种真正的面向对象的语言，即使是开发简单的程序，也必须设计对象。</p><p>JavaScript是一种脚本语言，可以用来制作与网络无关的，与用户交互作用的复杂软件。由于JavaScript是一种基于对象（Object Based）事件驱动（Event Driver）的编程语言，因而JavaScript本身提供了非常丰富的内部对象供设计人员使用。</p><blockquote>"
    }, {
      id: 4,
      title: "简述Ajax的优点与缺点",
      content: "<blockquote><p>ajax的优点</p><p>Ajax的给我们带来的好处大家基本上都深有体会，在这里我只简单的讲几点：</p><p>1、最大的一点是页面无刷新，在页面内与服务器通信，给用户的体验非常好。</p><p>2、使用异步方式与服务器通信，不需要打断用户的操作，具有更加迅速的响应能力。</p><p>3、可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，ajax的原则是“按需取数据”，可以最大程度的减少冗余请求，和响应对服务器造成的负担。</p><p>4、基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。</p><p>ajax的缺点</p><p>下面我着重讲一讲ajax的缺陷，因为平时我们大多注意的都是ajax给我们所带来的好处诸如用户体验的提升。而对ajax所带来的缺陷有所忽视。\n下面所阐述的ajax的缺陷都是它先天所产生的。</p><p>1、ajax干掉了back按钮，即对浏览器后退机制的破坏。后退按钮是一个标准的web站点的重要功能，但是它没法和js进行很好的合作。这是ajax所带来的一个比较严重的问题，因为用户往往是希望能够通过后退来取消前一次操作的。那么对于这个问题有没有办法？答案是肯定的，用过Gmail的知道，Gmail下面采用的ajax技术解决了这个问题，在Gmail下面是可以后退的，但是，它也并不能改变ajax的机制，它只是采用的一个比较笨但是有效的办法，即用户单击后退按钮访问历史记录时，通过创建或使用一个隐藏的IFRAME来重现页面上的变更。（例如，当用户在Google Maps中单击后退时，它在一个隐藏的IFRAME中进行搜索，然后将搜索结果反映到Ajax元素上，以便将应用程序状态恢复到当时的状态。）但是，虽然说这个问题是可以解决的，但是它所带来的开发成本是非常高的，和ajax框架所要求的快速开发是相背离的。这是ajax所带来的一个非常严重的问题。</p><p>2、安全问题 技术同时也对IT企业带来了新的安全威胁，ajax技术就如同对企业数据建立了一个直接通道。这使得开发者在不经意间会暴露比以前更多的数据和服务器逻辑。ajax的逻辑可以对客户端的安全扫描技术隐藏起来，允许黑客从远端服务器上建立新的攻击。还有ajax也难以避免一些已知的安全弱点，诸如跨站点脚步攻击、SQL注入攻击和基于credentials的安全漏洞等。</p><p>3、对搜索引擎的支持比较弱。</p><p>4、破坏了程序的异常机制。至少从目前看来，像ajax.dll，ajaxpro.dll这些ajax框架是会破坏程序的异常机制的。关于这个问题，我曾经在开发过程中遇到过，但是查了一下网上几乎没有相关的介绍。后来我自己做了一次试验，分别采用ajax和传统的form提交的模式来删除一条数据……给我们的调试带来了很大的困难。</p><p>5、另外，像其他方面的一些问题，比如说违背了url和资源定位的初衷。例如，我给你一个url地址，如果采用了ajax技术，也许你在该url地址下面看到的和我在这个url地址下看到的内容是不同的。这个和资源定位的初衷是相背离的。</p><p>6、一些手持设备（如手机、PDA等）现在还不能很好的支持ajax，比如说我们在手机的浏览器上打开采用ajax技术的网站时，它目前是不支持的，当然，这个问题和我们没太多关系。</p><blockquote>"
    }, {
      id: 5,
      title: "jQuery工作原理",
      content: "<blockquote><p>jQuery的模块可以分为3部分：</p><p>入口模块、底层支持模块和功能模块。</p><p>在构造jQuery对象模块中，如果在调用构造函数jQuery()创建jQuery对象时传入了选择器表达式，则会调用选择器Sizzle（一款纯JavaScript实现的CSS选择器引擎，用于查找与选择器表达式匹配的元素集合）遍历文档，查找与之匹配的DOM元素，并创建一个包含了这些DOM元素引用的jQuery对象。</p><p>浏览器功能测试模块提供了针对不同浏览器功能和bug的测试结果，其他模块则基于这些测试结果来解决浏览器之间的兼容性问题。</p><p>在底层支持模块中，回调函数列表模块用于增强对回调函数的管理，支持添加、移除、触发、锁定、禁用回调函数等功能；</p><p>异步队列模块用于解耦异步任务和回调函数，它在回调函数列表的基础上为回调函数增加了状态，并提供了多个回调函数列表，支持传播任意同步或异步回调函数的成功或失败状态；</p><p>数据缓存模块用于为DOM元素和Javascript对象附加任意类型的数据；队列模块用于管理一组函数，支持函数的入队和出队操作，并确保函数按顺序执行，它基于数据缓存模块实现。</p><p>在功能模块中，事件系统提供了统一的事件绑定、响应、手动触发和移除机制，它并没有将事件直接绑定到DOM元素上，而是基于数据缓存模块来管理事件；</p><p>Ajax模块允许从服务器上加载数据，而不用刷新页面，它基于异步队列模块来管理和触发回调函数；<p>动画模块用于向网页中添加动画效果，它基于队列模块来管理和执行动画函数；</p><p>属性操作模块用于对HTML属性和DOM属性进行读取、设置和移除操作；DOM遍历模块用于在DoM树中遍历父元素、子元素和兄弟元素；</p><p>DOM操作模块用于插入、移除、复制和替换DOM元素；样式操作模块用于获取计算样式或设置内联样式；坐标模块用于读取或设置DOM元素的文档坐标；尺寸模块用于获取DOM元素的高度和宽度。</p><p>语言评价</p><p>jQuery 是继prototype 之后又一个优秀的轻量级JavaScript 框架。其宗旨是———“Write Less, Do More”,写更少的代码,做更多的事情。 它是一个快速和简洁的JavaScript 库，可以简化HTML 文档元素的遍历，事件处理，动画和Ajax 交互以实现快速Web 开发，它被设计用来改变编写JavaScript 脚本的方式。</p><p>jQuery 的文档非常丰富，因为其轻量级的特性，文档并不复杂，随着新版本的发布，可以很快被翻译成多种语言，这也为jQuery 的流行提供了条件。jQuery 被包在语法上，jQuery 支持CSS1-3 的选择器， 兼容IE 6.0+, FF 2+,Safari 3.0+, Opera 9.0+, Chrome 等浏览器。同时，jQuery 有约几千种丰富多彩的插件，大量有趣的扩展和出色的社区支持，这弥补了jQuery功能较少的不足并为jQuery 提供了众多非常有用的功能扩展。加之其简单易学，jQuery 很快成为当今最为流行的JavaScript 库，成为开发网站等复杂度较低的Web 应用程序的首选JavaScript 库，并得到了大公司如微软，Google 的支持。</p><p>jQuery 最有特色的语法特点就是与CSS 语法相似的选择器，并且它支持CSS1 到CSS3 的几乎所有选择器，并兼容所有主流浏览器，这为快速访问DOM 提供了方便。</p></blockquote>"
    }, {
      id: 6,
      title: "Vue.js基本介绍",
      content: '<blockquote><p>介绍Vue.js是什么</p><p>Vue.js（读音 [表情]juː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。如果你是有经验的前端开发者，想知道 Vue.js与其它库/框架的区别，查看对比其它框架。</p><p>Vue.js 的核心是一个允许采用简洁的模板语法来声明式的将数据渲染进 DOM：</p><p>在接触vue.js之前，前端要用到的dom结构，都是通过拼接字符串的方式进行输出的。这种方式最大的痛点是拼接很麻烦，也不是很直观，几乎无法复用，和数据紧密的偶合在一起，维护不方便，太多太多的问题。在同事的推荐下，开始接触vue.js这个开源项目。如果你不知道什么是vue,那么请看这里的介绍 http://vuejs.org/。</p><p>vue的更新很快，从我最开始接触时的0.11.5，到现在的0.12.7，中文版的介绍一直停留在0.11.5的版本。如果是入门，且英文不是很好的情况下，我建议还是用0.11.5的版本。</p><p>如果你之前有用过angular.js或别的双向绑定的js库,那么你会有一种自来熟的感觉。当然，vue作为一个轻量的前端视图层工具，与angular相比，还是有很明显的区别的：</p><p>1.vue仅仅是mvvm中的view层，只是一个如jquery般的工具库，而不是框架，而angular而是mvvm框架。</p><p>2.vue的双向邦定是基于ES5 中的 getter/setters来实现的，而angular而是由自己实现一套模版编译规则，需要进行所谓的“脏”检查，vue则不需要。因此，vue在性能上更高效，但是代价是对于ie9以下的浏览器无法支持。</p><p>3.vue需要提供一个el对象进行实始化，后续的所有作用范围也是在el对象之下，而angular而是整个html页面。一个页面，可以有多个vue实例，而angular好像不是这么玩的。</p><p>4. vue真的很容易上手，学习成本相对低，不过可以参考的资料不是很丰富，官方文档比较简单，缺少全面的使用案例。高级的用法，需要自己去研究源码，至少目前是这样。</p><p>下面开始写一些的使用经验：</p><p>首先是你要去官网下载vue.js，具体的起步请参考： http://cn.vuejs.org/guide/index.html。</p><p>vue在构建的时候，需要使用new进行实例化，比如:</p> <p>var view = new Vue({ el : \'#container\'});</p><p>el根据官方api的介绍，可以是String | HTMLElement | Function, 一般来说，传一个id比较常用，这一步就是告诉vue,从这个节点开始，后面的内容就于vue开始接管了。</p><p>接管之后有些什么好处呢?</p><p>1.ajax取出的内容，再也不用拼接好再innerHTML到页面上了，直接在相要出现的地方写上{{数据}}或v-text="数据"或v-html="数据" ，就会自动显示出来。</p><p>2.对于表单来说，特别input之类的元素，不再需要自己监听事件了。这个在手机上的特别方便，不需要判断keycode,也不需要判断event是keyup还是keydown</p><p>利用这个特性，进行表单元素的验证，也是很方便的。结合v-if,v-show,v-style,v-class这些控制器，可以实现，以往我们要写很复杂的ajax或者js才能实现的功能。</p><p>所以这个框架给我们的开发带来了便利，具体一些操作还请大家看一下文档和官网里面的示例。</p></blockquote>'
    }]
  }
}, function (t, a) {
  t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAdCAYAAABIdpX5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDQxRDIyOTcwMzcxMUU3QUExOUE1M0UyMEYyMUZBNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDQxRDIyQTcwMzcxMUU3QUExOUE1M0UyMEYyMUZBNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0NDFEMjI3NzAzNzExRTdBQTE5QTUzRTIwRjIxRkE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0NDFEMjI4NzAzNzExRTdBQTE5QTUzRTIwRjIxRkE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BfAj8gAAF6dJREFUeNrUWwmYXFWV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"
}, function (t, a, e) {
  t.exports = e.p + "static/img/rote1.c94f5e0.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/rote2.2a59eb8.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/rote3.076f267.png"
}, function (t, a, e) {
  "use strict";
  var i = e(3), s = e(57), r = e(48), n = e.n(r), p = e(45), l = e.n(p), o = e(46), c = e.n(o), v = e(44), u = e.n(v),
    m = e(47), d = e.n(m);
  i.a.use(s.a), a.a = new s.a({
    routes: [{path: "/", name: "page", component: n.a}, {
      path: "/home",
      name: "home",
      component: l.a
    }, {path: "/list/:id", name: "list", component: c.a}, {
      path: "/essay",
      name: "essay",
      component: u.a
    }, {path: "/myresume", name: "myresume", component: d.a}]
  })
}, function (t, a, e) {
  function i(t) {
    e(22)
  }

  var s = e(0)(e(11), e(51), i, null, null);
  t.exports = s.exports
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0}), a.default = {name: "app"}
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0});
  var i = e(2), s = e.n(i), r = e(1), n = e.n(r), p = e(4);
  a.default = {
    name: "header", data: function () {
      return {content: "", title: ""}
    }, methods: {
      toDetail: function (t) {
        this.$router.push("/detail/" + t)
      }
    }, components: {comheader: s.a, comfooter: n.a}, mounted: function () {
      for (var t = this.$route.params.id, a = 0; a < p.a.post.length; a++) Number(p.a.post[a].id) === Number(t) && (this.content = p.a.post[a].content, this.title = p.a.post[a].title)
    }
  }
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0}), a.default = {
    name: "footer", data: function () {
      return {msg: "我的jo 部哦"}
    }
  }
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0}), a.default = {
    name: "header", data: function () {
      return {msg: "我的头部哦"}
    }
  }
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0});
  var i = e(2), s = e.n(i), r = e(1), n = e.n(r);
  a.default = {
    name: "home", data: function () {
      return {}
    }, components: {comheader: s.a, comfooter: n.a}
  }
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0});
  var i = e(2), s = e.n(i), r = e(1), n = e.n(r), p = e(4);
  a.default = {
    name: "header", data: function () {
      return {content: "", title: ""}
    }, methods: {
      toDetail: function (t) {
        this.$router.push("/detail/" + t)
      }
    }, components: {comheader: s.a, comfooter: n.a}, mounted: function () {
      for (var t = this.$route.params.id, a = 0; a < p.a.post.length; a++) Number(p.a.post[a].id) === Number(t) && (this.content = p.a.post[a].content, this.title = p.a.post[a].title)
    }
  }
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0});
  var i = e(2), s = e.n(i), r = e(1), n = e.n(r);
  a.default = {name: "myresume", components: {comheader: s.a, comfooter: n.a}}
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0}), a.default = {
    name: "page", data: function () {
      return {mbg: "在每一次起风的日子，不辜负生命", mag: "Sky Blog"}
    }
  }
}, function (t, a, e) {
  "use strict";
  Object.defineProperty(a, "__esModule", {value: !0});
  var i = e(3), s = e(10), r = e.n(s), n = e(9);
  i.a.config.productionTip = !1, new i.a({el: "#app", router: n.a, template: "<App/>", components: {App: r.a}})
}, function (t, a) {
}, function (t, a) {
}, function (t, a) {
}, function (t, a) {
}, function (t, a) {
}, function (t, a) {
}, function (t, a) {
}, function (t, a, e) {
  t.exports = e.p + "static/img/biaozhi.2974769.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/erweima.d2964f0.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f1.9b71a33.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f2.ba3a469.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f3.b9874ff.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f4.76cfdcc.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f5.01be71d.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f6.ac79393.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f7.30f7032.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f8.bbdd2dc.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/f9.0f8a0d9.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/list01.9b9fc53.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/list02.0167d07.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/list03.6022368.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/list04.64e46fb.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/list06.14d313b.png"
}, function (t, a, e) {
  t.exports = e.p + "static/img/list07.398387b.png"
}, function (t, a, e) {
  function i(t) {
    e(21)
  }

  var s = e(0)(e(12), e(50), i, null, null);
  t.exports = s.exports
}, function (t, a, e) {
  function i(t) {
    e(23)
  }

  var s = e(0)(e(15), e(52), i, null, null);
  t.exports = s.exports
}, function (t, a, e) {
  function i(t) {
    e(26)
  }

  var s = e(0)(e(16), e(55), i, null, null);
  t.exports = s.exports
}, function (t, a, e) {
  function i(t) {
    e(24)
  }

  var s = e(0)(e(17), e(53), i, null, null);
  t.exports = s.exports
}, function (t, a, e) {
  var i = e(0)(e(18), e(56), null, null, null);
  t.exports = i.exports
}, function (t, a, e) {
  t.exports = {
    render: function () {
      var t = this, a = t.$createElement, i = t._self._c || a;
      return i("div", {staticClass: "header"}, [i("div", {staticClass: "tophead"}, [i("img", {
        attrs: {
          src: e(27),
          alt: ""
        }
      }), t._v(" "), i("ul", {
        staticClass: "list",
        attrs: {id: "List"}
      }, [i("router-link", {attrs: {to: "/home"}}, [i("li", [t._v("首页")])]), t._v(" "), i("router-link", {attrs: {to: "/essay"}}, [i("li", [t._v("文章")])]), t._v(" "), i("router-link", {attrs: {to: "/myresume"}}, [i("li", [t._v("关于我")])]), t._v(" "), i("li", [t._v("有氧分享")]), t._v(" "), i("li", [t._v("碎言碎语")])], 1)])])
    }, staticRenderFns: []
  }
}, function (t, a) {
  t.exports = {
    render: function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("div", [e("comheader"), t._v(" "), e("div", {staticClass: "neirong1"}, [e("h1", [t._v("Essay")]), t._v(" "), e("ul", {staticClass: "limit"}, [e("router-link", {attrs: {to: "/list/1"}}, [e("li", [t._v("1.html5技术将推动移动浏览器变革")])]), t._v(" "), e("router-link", {attrs: {to: "/list/2"}}, [e("li", [t._v("2.关于响应式Web设计技巧以及css设置")])]), t._v(" "), e("router-link", {attrs: {to: "/list/3"}}, [e("li", [t._v("3.JavaScript的特点")])]), t._v(" "), e("router-link", {attrs: {to: "/list/4"}}, [e("li", [t._v("4.简述Ajax的优点与缺点")])]), t._v(" "), e("router-link", {attrs: {to: "/list/5"}}, [e("li", [t._v("5.jQuery工作原理")])]), t._v(" "), e("router-link", {attrs: {to: "/list/6"}}, [e("li", [t._v("6.Vue.js基本介绍")])]), t._v(" "), e("li", [t._v("0")]), t._v(" "), e("li", [t._v("0")]), t._v(" "), e("li", [t._v("0")]), t._v(" "), e("li", [t._v("0")]), t._v(" "), e("li", [t._v("0")]), t._v(" "), e("li", [t._v("0")])], 1)]), t._v(" "), e("comfooter")], 1)
    }, staticRenderFns: []
  }
}, function (t, a) {
  t.exports = {
    render: function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("div", {attrs: {id: "app"}}, [e("transition", {attrs: {name: "fade"}}, [e("router-view")], 1)], 1)
    }, staticRenderFns: []
  }
}, function (t, a, e) {
  t.exports = {
    render: function () {
      var t = this, a = t.$createElement, i = t._self._c || a;
      return i("div", [i("comheader"), t._v(" "), i("div", {staticClass: "home"}, [i("div", {staticClass: "centralsection"}, [i("p", [t._v("文章推荐")]), t._v(" "), i("ul", {
        staticClass: "imagetext",
        attrs: {id: "Imagetext"}
      }, [i("li", {staticClass: "imagetextli"}, [i("router-link", {attrs: {to: "/list/1"}}, [i("h6", [t._v("\n\t\t\t\t\t\t\t       记忆里时间碎片的拼接—HTML\n\t\t\t\t\t\t")]), t._v(" "), i("img", {attrs: {src: e(38)}})])], 1), t._v(" "), i("li", {staticClass: "imagetextli"}, [i("router-link", {attrs: {to: "/list/2"}}, [i("h6", [t._v("\n\t\t\t\t\t\t\t我在钢筋混凝土的表面涂着墙、吊着顶—CSS\n\t\t\t\t\t\t")]), t._v(" "), i("img", {attrs: {src: e(41)}})])], 1), t._v(" "), t._m(0), t._v(" "), t._m(1), t._v(" "), i("li", {staticClass: "imagetextli"}, [i("router-link", {attrs: {to: "/list/3"}}, [i("h6", [t._v("\n\t\t\t\t\t\t\t实现页面交互、满足客户需求—javascript\n\t\t\t\t\t\t")]), t._v(" "), i("img", {attrs: {src: e(42)}})])], 1), t._v(" "), i("li", {staticClass: "imagetextli"}, [i("router-link", {attrs: {to: "/list/4"}}, [i("h6", [t._v("\n\t\t\t\t\t\t\t时时刻刻我们交互着一种现象—AJAX\n\t\t\t\t\t\t")]), t._v(" "), i("img", {attrs: {src: e(39)}})])], 1), t._v(" "), i("li", {staticClass: "imagetextli"}, [i("router-link", {attrs: {to: "/list/5"}}, [i("h6", [t._v("\n\t\t\t\t\t\t\t再加些特效吧，闪亮的霓虹的，点亮城市的万家灯火—JQuery\n\t\t\t\t\t\t")]), t._v(" "), i("img", {attrs: {src: e(40)}})])], 1), t._v(" "), i("li", {staticClass: "imagetextli"}, [i("router-link", {attrs: {to: "/list/6"}}, [i("h6", [t._v("\n\t\t\t\t\t\t\t当然我也一直在路上摸索着各种框架—vue.js\n\t\t\t\t\t\t")]), t._v(" "), i("img", {attrs: {src: e(43)}})])], 1), t._v(" "), t._m(2)]), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6)])]), t._v(" "), i("comfooter")], 1)
    }, staticRenderFns: [function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("li", {staticClass: "imagetextli"}, [e("a", {attrs: {href: "javascript:;"}}, [e("h6", [t._v("\n\t\t\t\t\t\t\t       微笑像一阵温暖的春风,沐浴着心中的感动。不悲,不伤；温婉大气。心灵像一扇透明的窗,体会着人生佳境。不虚不伪；从容淡定,今天你敲代码了吗？\n\t\t\t\t\t\t")])])])
    }, function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("li", {staticClass: "imagetextli"}, [e("a", {attrs: {href: "javascript:;"}}, [e("h6", [t._v("\n\t\t\t\t\t\t\t       在雨幕里的迷离疏影,剪影一个虚拟的自然世界,飘落的雨花如记忆的碎片一样,拼凑着未来对全栈前端开发工程师的憧憬...\n\t\t\t\t\t\t")])])])
    }, function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("li", {staticClass: "imagetextli"}, [e("a", {attrs: {href: "javascript:;"}}, [e("h6", [t._v("\n\t\t\t\t\t\t\t    做一个优质的程序员,为电商社会做贡献...\n\t\t\t\t\t\t")])])])
    }, function () {
      var t = this, a = t.$createElement, i = t._self._c || a;
      return i("div", {staticClass: "photoexhibition"}, [i("img", {
        attrs: {
          src: e(5),
          alt: ""
        }
      }), t._v(" "), i("p", [t._v("有氧分享")])])
    }, function () {
      var t = this, a = t.$createElement, i = t._self._c || a;
      return i("div", {staticClass: "oxygenlist"}, [i("ul", {
        staticClass: "oxlist",
        attrs: {id: "oxList"}
      }, [i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1qYK6REW"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(29),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("1.CSS经典教程-download-mm:3cze")])])]), t._v(" "), i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1bp1u2XD"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(30),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("2.标准前端性能优化-download-mm:04sj")])])]), t._v(" "), i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1eSaQcts"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(31),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("3.编写高质量代码-download-mm:9yp7")])])]), t._v(" "), i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1c2KVsWS"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(32),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("4.H5移动开发实战-download-mm:2ywd")])])]), t._v(" "), i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1ge6vQjL"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(33),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("5.兼容解决方案-download-mm:hzzj")])])]), t._v(" "), i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1nuGYWdz"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(34),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("6.js面向对象编程-download-mm:tk1p")])])]), t._v(" "), i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1mi61Pyg"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(35),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("7.CSS禅意花园-download-mm:fe8g")])])]), t._v(" "), i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1kU57Dnp"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(36),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("8.SEO搜索引擎download-mm:ml07")])])]), t._v(" "), i("li", {staticClass: "aimagetextli"}, [i("a", {
        attrs: {
          target: "_blank",
          href: "http://pan.baidu.com/s/1c2q3hQS"
        }
      }, [i("div", {staticClass: "imgWrap"}, [i("img", {
        attrs: {
          src: e(37),
          alt: ""
        }
      })]), t._v(" "), i("span", [t._v("9.js高级程序设计download-mm:trht")])])])])])
    }, function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("div", {staticClass: "share2"}, [e("p", [t._v("在路上-随笔")])])
    }, function () {
      var t = this, a = t.$createElement, i = t._self._c || a;
      return i("div", {staticClass: "rote"}, [i("ul", {
        staticClass: "intherote",
        attrs: {id: "theWay"}
      }, [i("li", [i("img", {
        attrs: {
          src: e(6),
          alt: ""
        }
      }), t._v(" "), i("span", {staticClass: "listtext"}, [t._v("      我们都存活在一个地球，为了不破坏大气层的第N次污染，不要开车，不要开空调，在保护环境的情况下最好步行，更不能踩脚下的蚂蚁，不能打蚊子，保护自然生态。")])]), t._v(" "), i("li", [i("img", {
        attrs: {
          src: e(7),
          alt: ""
        }
      }), t._v(" "), i("span", {staticClass: "listtext"}, [t._v("      我们都存活在一个地球，为了不破坏大气层的第N次污染，不要开车，不要开空调，在保护环境的情况下最好步行，更不能踩脚下的蚂蚁，不能打蚊子，保护自然生态。")])]), t._v(" "), i("li", [i("img", {
        attrs: {
          src: e(8),
          alt: ""
        }
      }), t._v(" "), i("span", {staticClass: "listtext"}, [t._v("      我们都存活在一个地球，为了不破坏大气层的第N次污染，不要开车，不要开空调，在保护环境的情况下最好步行，更不能踩脚下的蚂蚁，不能打蚊子，保护自然生态。")])]), t._v(" "), i("li", [i("img", {
        attrs: {
          src: e(6),
          alt: ""
        }
      }), t._v(" "), i("span", {staticClass: "listtext"}, [t._v("      我们都存活在一个地球，为了不破坏大气层的第N次污染，不要开车，不要开空调，在保护环境的情况下最好步行，更不能踩脚下的蚂蚁，不能打蚊子，保护自然生态。")])]), t._v(" "), i("li", [i("img", {
        attrs: {
          src: e(7),
          alt: ""
        }
      }), t._v(" "), i("span", {staticClass: "listtext"}, [t._v("      我们都存活在一个地球，为了不破坏大气层的第N次污染，不要开车，不要开空调，在保护环境的情况下最好步行，更不能踩脚下的蚂蚁，不能打蚊子，保护自然生态。")])]), t._v(" "), i("li", [i("img", {
        attrs: {
          src: e(8),
          alt: ""
        }
      }), t._v(" "), i("span", {staticClass: "listtext"}, [t._v("      我们都存活在一个地球，为了不破坏大气层的第N次污染，不要开车，不要开空调，在保护环境的情况下最好步行，更不能踩脚下的蚂蚁，不能打蚊子，保护自然生态。")])])])])
    }]
  }
}, function (t, a) {
  t.exports = {
    render: function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("div", [e("comheader"), t._v(" "), t._m(0), t._v(" "), e("comfooter")], 1)
    }, staticRenderFns: [function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("div", {staticClass: "neirong2"}, [e("h1", [t._v("Just about me")]), t._v(" "), e("h3", [t._v("关于作者")]), t._v(" "), e("p", [e("span", {staticClass: "title"}, [t._v("姓名:")]), t._v("廖晨\n    ")]), t._v(" "), e("p", [e("span", {staticClass: "title"}, [t._v("年龄:")]), t._v("1989年\n    ")]), t._v(" "), e("p", [e("span", {staticClass: "title"}, [t._v("职业:")]), t._v("计算机科学与技术\n    ")]), t._v(" "), e("p", [e("span", {staticClass: "title"}, [t._v("专业:")]), t._v("Web前端开发\n    ")]), t._v(" "), e("p", [e("span", {staticClass: "title"}, [t._v("技能:")]), t._v("HTML5"), e("br"), t._v("CSS3"), e("br"), t._v("Javascript"), e("br"), t._v("JQuery"), e("br"), t._v("Ajax"), e("br"), t._v("Vue.js"), e("br"), t._v("DOM"), e("br"), t._v("HBuider"), e("br"), t._v("当然ps，cdr，ai等的切图工具是必不可少的\n    ")]), t._v(" "), e("h3", [t._v("关于网站")]), t._v(" "), e("p", [t._v("\n      本站采用Vue.js框架进行搭建和页面渲染;"), e("br"), t._v("\n      主要功能包括:分类、文章、分享、..."), e("br"), t._v("\n      前端客户端采用Vue2.0-SSR的服务器渲染"), e("br"), t._v("\n      主要技术:HTML5、CSS、javascript、Vue2.0、webpack"), e("br")]), t._v(" "), e("h3", [t._v("自我评价")]), t._v(" "), e("p", [t._v("1.性格开朗，乐于与人沟通、具有良好的适应性、亲和力佳、能很快融入团队;"), e("br"), t._v("2.工作踏实、认真负责、能够灵活处理工作中的突发事件;"), e("br"), t._v("3.爱好广泛、热爱生活、勤奋好学、自学能力强;"), e("br"), t._v("4.具有良好的团队精神、工作积极进取、态度认真;"), e("br"), t._v("5.工作中勇于担当、积极配合、尊重他人、诚实正直;"), e("br"), t._v("6.具有钻研精神，随时进行自我技能刷新。\n    ")])])
    }]
  }
}, function (t, a, e) {
  t.exports = {
    render: function () {
      var t = this, a = t.$createElement;
      t._self._c;
      return t._m(0)
    }, staticRenderFns: [function () {
      var t = this, a = t.$createElement, i = t._self._c || a;
      return i("div", {staticClass: "footer"}, [i("div", {staticClass: "footone"}, [i("img", {
        attrs: {
          src: e(28),
          alt: ""
        }
      }), t._v(" "), i("ul", {staticClass: "listtwo"}, [i("li", [t._v("QQ:55498238111")]), t._v(" "), i("li", [t._v("邮箱:liaochen55498238@qq.com")]), t._v(" "), i("li", [t._v("联系电话:18683934731")]), t._v(" "), i("li", [t._v("备案注册号:000000000")])])])])
    }]
  }
}, function (t, a) {
  t.exports = {
    render: function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("div", [e("comheader"), t._v(" "), e("div", {staticClass: "neirong"}, [e("h1", {}, [t._v(t._s(t.title))]), t._v(" "), e("div", {domProps: {innerHTML: t._s(t.content)}})]), t._v(" "), e("comfooter")], 1)
    }, staticRenderFns: []
  }
}, function (t, a, e) {
  t.exports = {
    render: function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("div", {staticClass: "page"}, [e("div", {attrs: {id: "app"}}, [e("div", {staticClass: "homepage"}, [e("section", {attrs: {id: "aside"}}, [e("div", {staticClass: "aside-box"}, [e("div", {staticClass: "marsk"}), t._v(" "), e("div", {staticClass: "aside-content"}, [t._m(0), t._v(" "), e("h1", {domProps: {textContent: t._s(t.mag)}}), t._v(" "), e("p", [t._v(t._s(t.mbg))]), t._v(" "), t._m(1)])])]), t._v(" "), e("div", {staticClass: "home-view"}, [e("section", {staticClass: "aboutMe"}, [e("div", {staticClass: "about-nav"}, [e("router-link", {
        attrs: {
          to: "/home",
          target: "_blank"
        }
      }, [t._v("\n              首页\n            ")]), t._v(" "), e("router-link", {
        attrs: {
          to: "/essay",
          target: "_blank"
        }
      }, [t._v("\n              文章\n            ")])], 1), t._v(" "), e("div", {staticClass: "about-nav"}, [e("router-link", {
        attrs: {
          to: "/myresume",
          target: "_blank"
        }
      }, [t._v("\n              关于\n            ")]), t._v(" "), e("a", {attrs: {href: "/"}}, [t._v("项目")])], 1), t._v(" "), e("div", {staticClass: "about-nav"})])])])])])
    }, staticRenderFns: [function () {
      var t = this, a = t.$createElement, i = t._self._c || a;
      return i("a", {attrs: {href: "javascript:;"}}, [i("img", {attrs: {src: e(5)}})])
    }, function () {
      var t = this, a = t.$createElement, e = t._self._c || a;
      return e("div", {staticClass: "aside-icon"}, [e("a", {attrs: {href: "javascript:;"}}, [e("i", {staticClass: "iconfont"}, [t._v("git")])]), t._v(" "), e("a", {attrs: {href: "javascript:;"}}, [e("i", {staticClass: "iconfont"}, [t._v("sf")])])])
    }]
  }
}], [19]);
//# sourceMappingURL=app.dec2a6594428cc861888.js.map