改变暴力搜索 // ！！ 的作用是什么
上指针
数组升维
利用hash表
```js
data.filter(({id}) => selectedIds.includes(id))
// 改进:利用hash表思想解决，js里对象是一种天然的hash表结构
const ids = {}
selectedIds.forEach(id => ids[id] = 1)
data.filter(({id}) => !!ids[id])
```
```js
// 判断真 伪数组
Object.prototype.toString.call(arg)
//真数组-----------[object,Array]
//伪数组-----------[object,Object]
```