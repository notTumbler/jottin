#### 组件渲染/更新过程

**直接在原型上修改/添加属性会污染全局变量**

*1、初次渲染过程*
-- 解析模板为render函数（或者在开发环境已完成，vue-loader）
-- 触发响应式，监听data属性 getter  setter
-- 执行render函数，生成vnode,patch(elem,vnode)
===============================================
  <p>{{message}}</p>
  <script>
    export default {
      data(){
        return {
          message:'hello',//会触发 get
          city:'北京' //不会触发get,因为模板没用到，即和视图没关系
        }
      }
    }
  </script>

*2、更新过程*
修改data,触发setter（此前在getter中已被监听）
重新执行render函数，生成newVnode
patch(vnode,newVnode)

*3、异步渲染*
$nextTick(下一帧)**待DOM渲染完成后回调**【建议在create()中使用】
汇总data的修改，一次性更新试图（所有的更改放进一个队列）
减少DOM操作次数，提高性能


### 总结：
渲染和响应式的关系？
渲染和模板编译的关系？
渲染和vdom的关系？


