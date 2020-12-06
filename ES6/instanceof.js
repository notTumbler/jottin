/**
 * instanceof
*/
function _instanceof(testType,arg){
  let testTypePro = testType.prototype;
  //优化----兼容问题
  //let argPro = Object.getPrototypeOf(arg)
  let argPro = arg.__proto__;

  while(true){
    if(argPro === null) return false;
    if(argPro === testTypePro) return true    
    argPro = argPro.__proto__;
  }

}
const arr = 'str'
const res = _instanceof(String,arr)
console.log(res);