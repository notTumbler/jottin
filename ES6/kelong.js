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
