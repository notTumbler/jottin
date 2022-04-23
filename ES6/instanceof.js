/**
 * instanceof
*/
// function _instanceof(testType,arg){
//   let testTypePro = testType.prototype;
//   //优化----兼容问题
//   //let argPro = Object.getPrototypeOf(arg)
//   let argPro = arg.__proto__;

//   while(true){
//     if(argPro === null) return false;
//     if(argPro === testTypePro) return true    
//     argPro = argPro.__proto__;
//   }

// }
// const arr = 'str'
// const res = _instanceof(String,arr)
// console.log(res);
function f() {}
const myInstanceof = (test, targetType) => {
  console.log('aaa', typeof test)
  // if(typeof test !== 'object' || typeof test !== 'function') {
  //   return false
  // }
  let testP = test.__proto__;
  const targetTypeP = targetType.prototype;
  while(true) {
    if(testP === null) return false
    if(testP === targetTypeP) return true
    testP = testP.__proto__;
  }
}

console.log(myInstanceof(f, Function))