const arr = [9, 8, 5, 6, 12, 46, 66, 900, 78];
const ks = (arr) => {
  if(arr.length <= 1) return arr
 let left = [], right=[], cur=arr.splice(0,1)
 for(let i=0; i<arr.length; i++) {
   const item = arr[i]
   item < cur[0] ? left.push(item) : right.push(item)
 }
 return ks(left).concat(cur, ks(right))
};

console.log(ks(arr));

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let left = [],
    right = [];
  let mid = arr.splice(0, 1);
  console.log("mid", mid);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(mid, quickSort(right));
};
// console.log(quickSort(arr));

// const a = [1,2,3]
// a.join = a.shift
// console.log(a==1&&a==2&&a==3)

// const obj = {
//   a: ''
// }
// const value = 0
// Object.defineProperties(obj,'a',{
//   get() {
//     return ++value
//   }
// })
// console.log(obj.a==1&&obj.a==2&&obj.a==3)
