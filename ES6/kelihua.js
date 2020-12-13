

// function createCurry(func, args) {

//   var arity = func.length;
//   var args = args || [];

//   return function() {
//       var _args = [].slice.call(arguments);
//       [].push.apply(_args, args);

//       // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
//       if (_args.length < arity) {
//           return createCurry.call(this, func, _args);
//       }

//       // 参数收集完毕，则执行func
//       return func.apply(this, _args);
//   }
// }


function curry(fn){
  let len = fn.length;
  return function collectArgs(){
    let args = [...arguments]
    if(args.length >= len){
      return fn(...args)
    }
    return function (){
      return collectArgs(...args,...arguments)
    }
  }
}


function typeIs(type,arg){
  return  Object.prototype.toString.call(arg) === `[object ${type}]`
}
const whatType = curry(typeIs)
const isString = whatType('String')
console.log(isString(23))
const isArray = whatType('Array')
console.log(isArray([]))
















