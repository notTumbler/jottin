Vue template complier将模板编译为render函数
执行render函数生成vnode
**在某些特定的情况下，vue组件里不能用template,可以用render代替的**

#### with语法--慎用【它打破了作用域规则，易读性变差】
**改变{}内自由变量的查找规则，当作obj的属性来查找**
**如果找不到匹配的obj属性，就会报错**
const obj = {a:100,b:200}
console.log(obj.a)
console.log(obj.b)
console.log(obj.c) --> undefined

with(obj){
  console.log(a)
  console.log(b)
  console.log(c)  --> 找不到会报错的！！
}