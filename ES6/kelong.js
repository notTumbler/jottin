function deepClone (obj){
  if(typeof(obj) !== 'object' || obj == null)  return obj;

  let result;
  if(obj instanceof Array){
    result = []
  }else{
    result = {}
  }
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result;
}

// const obj1 = {
//   name:'chen',
//   from:{
//     province:'hubei',
//     town:'lG'
//   }
// }
// const obj2 = deepClone(obj1)
// console.log(obj2);

// console.log(obj1.from === obj2.from);

//考虑正则、日期等特殊对象和解决循环引用情况
const isObject = (target) => {
  return (typeof target==='object' || typeof target === 'function') && target!==null
}

function deepClone(target, map=new Map()){
  //先判断该引用类型是否被拷贝过
  if(map.get(target)) return target
  //获取当前值的构造函数：获取它的类型
  let constructor = target.constructor;
  //检测当前对象target是否与正则、日期格式对象匹配
  if(/^(RegExp|Date)$/i.test(constructor.name)){
    //创建一个新的特殊对象（正则类、日期类）的实例
    return new constructor(target)
  }

  if(isObject(target)){
    map.set(target,true);
    const cloneTarget = Array.isArray(target)?[]:{};
    for(let item in target){
      if(target.hasOwnProperty(item)){
        cloneTarget[item] = deepClone(target[item],map)
      }
    }
    return cloneTarget;
  }else{
    return target;
  }













}