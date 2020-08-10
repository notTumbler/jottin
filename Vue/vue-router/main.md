### 前端路由---核心：改变视图的同时不会向后端发送请求

###### hash路由
网页url组成部分
http://127.0.0.1:8881/01-hash.html?a=100&b=20#/aaa/bbb
location.protocol --> 'http:'
location.hostname --> '127.0.0.1'
location.host     --> '127.0.0.1:8881'
location.port     --> '8881'
location.pathname --> '/01-hash.html'
location.search   --> '?a=100&b=20'
location.hash     --> '#/aaa/bbb'

**hash的特点**
hash变化会触发网页的跳转，即浏览器的前进后退
hash变化不会刷新页面，SPA必需的特点
hash永远不会提交到server端（在前端自生自灭）

###### H5 history
用url规范的路由，但跳转时不刷新页面
history.pushState
*【重要】-- history.pushState(state,'','path1')*
window.onpopstate
【重要】-- window.onpopstate = (event) => {
  console.log('onpopstate',event.state,location.pathname)
}

#### 二者区别联系
1、hash ：hash 虽然出现在 URL 中，但不会被包含在 http 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。

2、history ：history 利用了 html5 history interface 中新增的 pushState() 和 replaceState() 方法。这两个方法应用于浏览器记录栈，在当前已有的 back、forward、go 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 URL ，但浏览器不会立即向后端发送请求。




### 总结：
hash路由通过 window.onhashchange控制页面跳转

H5 history 通过 history.pushState和window.onpopstate控制页面跳转

to B 的系统推荐使用hash,简单易用，对url规范不敏感
to C 的系统，可以考虑H5 history，但需要服务端支持

**什么是 to B && 什么是 to C??**
to B --> 面向企业字面上的意思都很明确：To B 就是 To business，面向企业或者特定用户群体的面商类产品
to C --> To C 就是 To customer，产品面向消费者。

