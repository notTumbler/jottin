/**
 * 1、工厂模式
 * 2、构造函数模式
 * 3、原型模式
 * 4、混合构造函数模式和原型模式
 * 5、动态原型模式
 * 6、寄生构造函数模式
 * 7、稳妥构造函数模式
 */



 /**
  * js继承的6种方法
  * 1、原型链继承
  * 2、借用构造函数继承
  * 3、组合继承
  * 4、原型式继承
  * 5、寄生式继承
  * 6、寄生组合式继承
  */
function Parent(){
  console.log(`this is This${this}`)
  this.name = 'chen'
}
Parent.prototype.getName = function(){
  return this.name;
}

function person(){
  Parent.call(this)
  this.friend = ['one','two']
}

function clone(father,child){
  child.prototype = Object.create(father.prototype)
  child.prototype.constructor = child
}

clone(Parent,person)
person.prototype.getFriend = function(){
  return this.friend;
}

// const per = new person();
// console.log(per.__proto__)