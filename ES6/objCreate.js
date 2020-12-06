// Object.create = function(prototype){
//   if(typeof prototype !== 'object' || prototype == null){
//     throw new TypeError('The obj may only be an Object')
//   }
//   function gongjuFn(){}
//   gongjuFn.prototype = prototype;
//   return new gongjuFn
// }


//call
// Function.prototype.cl = function(context){
//   let args = [...arguments].slice(1)
//   context = context == null?window:context;
//   let result;
//   context['fn'] = this;
//   result = context['fn'](...args);
//   delete context['fn'];
//   // console.log(result);
//   return result;
// }
// const obj = {name:'chendibo'}
// // name='cccc'
// function chen(...arg){
  
//   // console.log(this.name);
//   return arg.reduce((pre,item)=>{
//     return pre += item;
//   },0)
// }
// const res = chen.cl(obj,1,2,3)
// // console.log(res);

