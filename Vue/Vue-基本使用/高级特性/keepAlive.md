### keep-alive  (相当于缓存)
它是Vue提供的一个抽象组件，用来对组件进行缓存，避免组件重复渲染（不断地被创建和销毁）

缓存组件
频繁切换，不需要重复渲染
Vue常见的性能优化


<keep-alive>
  <router-view></router-view>
</keep-alive>

**keep-alive中有include,exclude属性**

<keep-alive include="FirstComponent,TwoComponent">
  <router-view></router-view>
</keep-alive>