// function flat( arr ){
//   let resArr = []
//   for(let i=0;i<arr.length;i++){
//     if(Array.isArray(arr[i])){
//       resArr = resArr.concat(flat(arr[i]))
//     }else{
//       resArr.push(arr[i])
//     }
//   }
//   return resArr;
// }


// function flat(arr){
//   return arr.reduce((pre,item)=>{
//     return pre.concat(Array.isArray(item)?flat(item):item)
//   },[])
// }

function flat(arr){
  return arr.toString().split(',').map(item => Number(item))
}







var arr = [1, [2, [3, 4]]];
console.log(flat(arr));