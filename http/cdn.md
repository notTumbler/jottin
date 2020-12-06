### CDN 原理
cdn --- content      内容分发网络
cdn的基本原理是将缓存服务器广泛分布在用户访问相对集中的地区和网络中，当用户发起请求时，利用全局负载均衡技术将用户连接到离用户最近的正常工作地缓存服务器上，由缓存服务器直接响应。
```html
cdn的缺点：当源站点的数据更新了，但是cdn站点上的数据还未更新时，此时即使用户强制刷新浏览器，还是无法得到最新的数据。
cdn"回源率" ---> 缓存时间的长短，太长，可能无法在第一时间获取最新的数据  ||  太短，频繁地向源站点发送请求，增加了源站点的负载   需要开发者视情况而定
```
> 什么是全局负载均衡技术<br>
> 基于DNS实现，根据就近原则将用户的请求定向到最近最稳定的cdn加速节点(其主要功能就是根据就近性进行判断)

> 什么是缓存服务器<br>
> 用于存放用户们频繁访问的资源的服务器