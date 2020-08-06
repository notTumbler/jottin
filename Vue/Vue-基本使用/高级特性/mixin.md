### mixin

**多个组件有相同的逻辑需要抽离出来**

**mixin并不是完美的解决方案，会有一些问题:**
<<变量来源不明确，不利于阅读>>
<<多个mixin可能会造成命名冲突>>
<< mixin和组件可能出现多对多的关系，复杂度较高 >>


**Vue3提出的Composition旨在解决这些问题**

**mixin中的高级用法和相关属性**
mixins:[Mymixin,twomixin]