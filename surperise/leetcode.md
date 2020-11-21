```js
// 移除k位数字，使剩下的字符串组成最小的数字
// example: 1432219,3 ---> 1219
function(num,k){
  let stack = []
  for(let i=0;i<num.length;i++){
    let temp = num[i]
    //遍历的当前元素比栈顶的元素小，所以删除掉栈顶元素
    while(stack.length>0&&k>0&&temp<stack[stack.length-1]){
      stack.pop();
      k--;
    }
    stack.push(temp)
  }
  //未删除，从尾部继续（'1132,2' --> '11' 不做这步会输出'112'） 
  while(k>0){
    stack.pop();
    k--;
  }
  //去除无效的零
  while(stack.length>0&&stack[0]==='0'){
    stack.shift()
  }
  return stack.length?stack.join(''):'0'
}
```


```js
// 金钱格式化
var str= '123456789'
var format = str.replace(/\B(?=(\d{3})+(?!\d))/g,',')
//--------------------
function format(str){
  return str.split('').reverse().reduce((prev,next,index)=>{
    return ((index%3) ?next:(next+','))+pre
  })
}
```

> 简单来说,0.1+0.2 != 0.3的二进制浮点数表示不是精确的（接近）<br>所以，比较数字时，应该有个宽容值。 ES6中 这个宽容值被预定义了   Number.EPSILON

```js
Function构造函数接收的第一个参数是 参数名，第二个参数是函数内将要执行的语句
const f = new Function('a','console.log(a)')
f('sdsd')  ----- >   sdsd
```