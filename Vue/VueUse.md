### XSS(Cross Site Scripting) 跨站脚本攻击,为了不和CSS(Cascading Style Sheet)混淆,所以写成XSS
*XSS: 攻击者在web页面插入恶意的Script代码,当用户浏览该页之时，嵌入其中web里面的Script代码会被执行，从而达到恶意攻击用户的特殊目的。*
**反射型XSS、储存型XSS、DOM Based XSS**

#### v-html：会覆盖子元素的内容 并 容易被XSS攻击
#### computed 和 watch
computed有缓存，data不变就不会重新计算(性能优化)
#### watch如何深度监听？(watch默认是浅监听)
watch 监听基本数据类型，可正常拿到oldVal
watch 监听引用类型，拿不到oldVal
data(){  return{
      name:'cdb',
      info:{
        city:'北京'
      }}
} 

``` 浅度监听：watch:{ name(oldVal,val){}```
 深度监听：watch:{info:{
  handler(oldVal,val){},
  deep:true  //深度监听
  immediate:true //在wacth里声明了info之后，就立即执行handler方法(绑定时就执行),如果为false,就跟我们以前的效果一样，不会在绑定的时候就执行
}}

deep的意思时深入观察，监听器会一层层的往下遍历，给对象的所有属性都加上这个监听器，但是这样的话性能开销就会非常大，修改obj里任何的一个属性都会触发这个监听器的handler。
### 优化，我们可以使用字符串形式监听(Vue.js会一层一层的解析下去，直到遇见属性a,然后才给a设置监听函数)
watch:{
  'obj.a':{
    handler(newName,oldName){
      console.log('obj.a changed');
      immediate:true,
      //deep:true
    }
  }
}
### 注销watch
写在组件中的watch会随着组件销毁而销毁
但是如果用的是下面的方式，需要手动注销
const unWatch = app.$watch('text',(newVal,oldVal) => {
  console.log(`${newVal}:${oldVal}`);
})
unWatch();//手动注销watch

### v-if v-for 不能同时使用
如果真的需要同时使用，给该元素最外层再包裹上一层标签，再在其中使用v-if即可

### event.currentTarget指向事件所绑定的元素，event.target始终指向事件发生时的元素。
example:<a @click="click($event)"><i></i></a>
点击<a>,currentTarget和target获取到的对象都是<a>,
点击<i>,currentTarget获取到的对象是<a>,target获取到的对象是<i>

