//bind和call/apply最大的区别就是前者返回一个绑定上下文的函数，而后两者直接执行了函数


// MDN  bind源码
if(!Function.prototype.bind){
  Function.prototype.bind = function(oThis){
    if(typeof this !== 'function'){
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments,1),
        fToBind = this,
        fNOP = function(){},
        fBound = function(){
          return fToBind.apply(this instanceof fNOP && oThis
            ?this
            :oThis || window,
            aArgs.concat(Array.prototype.slice.call(arguments)));
        }
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
  }
}

// bind()方法创建一个新的函数，在bind()被调用时，这个新函数的this被指定为bind()的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

/* 1、指定this
2、传入参数
3、返回一个函数
4、柯里化

一个bind()函数也能使用new操作符创建对象；这种行为就像把原函数当成构造器，此时提供的this值将被忽略
*/
Function.prototype.bind1 = function(context){
  if(typeof this !== 'function'){
    throw new Error('调用者必须是一个函数')
  }
  //this指向调用者
  let self = this;
  console.log(self);
  // 因为第一个参数指定的是this,所以只能截取第一个之后的
  let args = Array.prototype.slice.call(arguments,1);
  console.log(args);
  // 创建一个空对象
  var fNOP = function(){};
  var fBound = function(){
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP?this:context,args.concat(bindArgs));
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;

  /* 注释：
  ::当fBound作为构造函数的时候，this应该指向实例，此时this instanceof fNOP为true，可以让实例获得来自bind函数的值。
  ::当做为普通函数时，this指向window，此时结果为false，将绑定函数的this指向context.

  ::修改返回函数的prototype为bind函数的prototype,实例就可以继承bind函数原型中的值
  ::为什么使用一个空对象fNOP作为媒介？因为直接fBound.pro = this.pro有一个缺点，当修改fBound.pro的时候，this.pro也会被修改。
 */
}

Function.prototype.myBind = function(newThis){
  if(typeof this !== 'function'){
    throw new Error('调用者必须是一个函数')
  }
  let self = this;
  let args = Array.prototype.slice.call(arguments,1);

  var Fn = function(){};
  var BackFn = function(){
    let BackFnArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof Fn?this:newThis,args.concat(BackFnArgs))
  }
  Fn.prototype = this.prototype;
  BackFn.prototype = new Fn();
  return BackFn;
}



let obj = {
  name:'dibo'
}

function chen (a){
  console.log(a);
  console.log(this.name);
}

const res = chen.bind1(obj,'ad',123,4,5)
const di = new res()

//tip:这里创建了多个定时器
// for (var i=0;i<5;i++){
//   !function(i){
//     setTimeout(function(){
//       console.log(i);
//     },i*3000)
//   }(i);
// }
//grace
// for(var i=0;i<5;i++){
//   setTimeout(
//   console.log.bind(console,i),
//   i*1000)
// }




