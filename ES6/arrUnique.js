//数组去重
// const arr = [1,1,2,2,2,2,3,4,4,5,5]
// const Unique = arr => {
//   return arr.filter((item,index) => {
//     return arr.indexOf(item,0) === index
//   })
  
// }
// console.log(Unique(arr))

const arr = [[1,3,3],[2,4,[5,6,7,[9,8]]]]
const flat = arr => {
  let res = []
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      res = res.concat(flat(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}
console.log(flat(arr))