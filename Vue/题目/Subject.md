**为何v-for中要用key**

**描述Vue组件的生命周期（有父子组件的情况）**
父组件先初始化，后渲染（子组件渲染完了，父组件才渲染）
子组件先销毁，父组件再销毁

**Vue组件如何通信**
**有好多种的**
发布订阅、事件总线（类似Vuex，但是不一样）


**描述组件渲染和更新的过程**


**双向数据绑定v-model的实现原理**

**请用vnode描述一个DOM结构**
<div id='div1' class='container'>
  <p>vdom</p>
  <ul style='font-size:20px'>
    <li>a</li>
  </ul>
</div>
------------------------------------>
{
  tag:'div',
  props:{
    className:'container',
    id:'div1'
  },
  children:[
    {
      tag:'p',
      children:'vdom'
    },
    {
      tag:'ul',
      props:{
        style:'font-size:20px'
      },
      children:[
        {
          tag:'li',
          children:'a'
        }
      ]
    }
  ]
}

**监听data变化的核心API是什么**
Object.defineProperty
怎么监听数组和深度监听？
缺点？

**请描述响应式原理**
监听data变化
组件渲染和更新的流程


**diff算法的时间复杂度**
O(n^3) ----> O(n)

**简述diff算法过程**


**Vue为何是异步渲染，$nextTick有何用？**
异步渲染（以及合并data修改），以提高渲染性能

**Vue常见的性能优化方式**
合理使用v-show和v-if
合理使用computed
v-for时加key,以及避免v-if同时使用
自定义事件、DOM事件、计时器及时销毁
合理使用异步组件
合理使用keep-alive
data层级不要太深（不利于监听）
使用vue-loader在开发环境做模板编译（预编译）
webpack层面的优化
前端通用的性能优化，如图片懒加载
使用SSR

**为何v-for中使用key**

**为何data是一个函数？**

