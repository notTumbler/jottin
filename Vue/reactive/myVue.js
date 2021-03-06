

const compileUtil = {
  getVal(expr,instance){
    console.log(instance)
    return expr.split('.').reduce((data,currentVal) => {
      console.log(currentVal);
      return data[currentVal];
    },instance.$data)
  },
  text(node,expr,vm){ //expr:msg
    console.log(vm)
    const value = this.getVal(expr,vm)
    // this.updater.textUpdater(node,value);
  },
  html(node,expr,vm){
  },
  model(node,expr,vm){
  },
  on(){

  },
  //更新的函数
  updater:{
    textUpdater(node,value){
      node.textContent = value;

    }
  }
}


class Compile {
  constructor(el,vm){
    this.el = this.isElementNode(el) ? el : document.querySelector(el);
    this.vm = vm;
    //获取文档碎片对象，放入内存中，可以减少页面的回流和重绘
    const fragment = this.node2Fragment(this.el);
    //编译模板
    this.compile(fragment);

    //追加子元素到根元素
    this.el.appendChild(fragment);
  }
  isElementNode(node){
    return node.nodeType === 1;
  }
  node2Fragment(el){
    const f = document.createDocumentFragment();
    let firstChild;
    while(firstChild = el.firstChild){
      f.appendChild(firstChild)
    }
    return f;
  }
  compile(fragment){
    //获取子节点
    const childNode =  fragment.childNodes;
    [...childNode].forEach(child => {
      // console.log(child)
      if(this.isElementNode(child)){
        //是元素节点
        //是编译节点
        // console.log('元素节点',child)
        this.compileElementNode(child);
      }else{
        //文本节点
        // 编译文本节点
        // console.log(`文本节点${child}`)
        this.compileTextNode(child);
      }
      if(child.childNodes && child.childNodes.length){
        this.compile(child);
      }
    })

  }
  compileElementNode(node){
    const attributes = node.attributes;
    //node.attributes是干什么的
    [...attributes].forEach(attr => {
      console.log(attr)
      const {name,value} = attr;
      console.log(name);
      if(this.isDirective(name)){
        //是一个指令 v-text / v-model
        const [,dirctive] = name.split('-');
        const [dirName,eventName] = dirctive.split(':');
        compileUtil[dirName](node,value,this.vm,eventName)
      }
    })
  }
  compileTextNode(){

  }
  isDirective(attrName){
    return attrName.startsWith('v-')
  }
}


class MVue {
  constructor(options){
    this.$el = options.el;
    this.$data = options.data;
    this.$options = options;

    if(this.$el){
      //实现一个数据观察者

      // 实现一个指令编译器
      new Compile(this.$el)
    }
  }
}