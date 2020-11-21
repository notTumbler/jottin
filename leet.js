// function chen(n){
//   if(typeof(n) !== 'number') return false;

//   let strn = n.toString()
// //12345
// let c = 0;
//   for(let i=strn.length-1;i>=0;i--){ 
//     if(c % 3 == 0){
//       console.log(strn[i]); 
//     }
//     ++c
//     // console.log(c);
//   }  
// }
// chen(12345)

// const arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]

// function chen(arr1,arr2){
//   let arrOne = []
//   let arrTwo = []
//   let resArr = []

//   for(let i=0;i<arr2.length;i++){
//     for(let j=0;j<arr1.length;j++){
//       if(arr2[i] === arr1[j]){
//         arrOne.push(arr1[j])
//       }
//       if(!arr2.includes(arr1[j])){
//         arrTwo.push(arr1[j])
//       }
//     }
//   }


//   console.log(arrTwo);


//   let sortArr = arrTwo.sort(function(a,b){return a-b})
//   // console.log(sortArr);
//   resArr = arrOne.concat(sortArr)
//   return resArr;
// }


//*************数组顺序***************** */
// const arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// function chen(a,b){
//   let arrTwo = []
//   let arrTh = []
//   let resArr = []
//   for(let i=0;i<arr2.length;i++){
//     for(let j=0;j<arr1.length;j++){
//       if(arr1[j] === arr2[i]){
//         arrTwo.push(arr1[j])
//       }
//     }
//   }
//   for(let i=0;i<arr1.length;i++){
//     if(!arr2.includes(arr1[i])){
//       arrTh.push(arr1[i])
//     }
//   }
//   return resArr = arrTwo.concat(arrTh.sort((a,b)=>a-b))

// }
// const res = chen(arr1,arr2)
// console.log(res);
// 、、****************
//  var num = "1173"
//  function chen(num,k){
//   num = num.split('')
//   len = num.length - k;
//   if(k>=num.length) return 0;
//   for(let i=0;i<k;i++){
//     for(let j=0;j<num.length;j++){
//       if(num[j]>num[j+1]){
//         num.splice(j,1)
//         break
//       }
//     }
//   }
//   if(num.length>len){
//     num.length = len
//   }
//   // console.log(num);
//   while(num[0]=== '0'){
//    num.shift()
//   }
//   return num.length===0?'0':num.join('')
//  }
// //#region 
// // var removeKdigits = function(num, k) {
// //   num = num.toString();
// //   let stack = []
// //   for(let i = 0 , len = num.length ; i < len ;i++){
// //      let temp = num[i]
// //      //当遍历的元素比此时栈顶元素小，删除栈顶元素
// //      while(k > 0 && stack.length > 0 && temp < stack[stack.length - 1]){
// //          stack.pop();
// //          k--
// //      }
// //    stack.push(temp)
// //   }
// //   // 如果未删除，从尾部继续
// //   while(k>0){
// //       stack.pop()
// //       k--;
// //   }
// //   // 去除无效的0
// //   while(stack.length > 0 && stack[0] === '0'){
// //       stack.shift()
// //   }
  
// //   return stack.length ? stack.join('') : '0'
// // };
// //#endregion
// const res = chen(num,2)
// console.log(res);
// const people = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

// var reconstructQueue = function(people) {
//   let a=[];
//   people.sort((a,b)=>a[0]==b[0]? a[1]-b[1]:b[0]-a[0])
//   console.log(people);
//   for(let i of people){a.splice(i[1],0,i);}
//   return a;

// };

// const res = reconstructQueue(people)
// console.log(res);

function chen(n){
 return (n%4>0)
}
console.log(chen(2));
console.log(chen(20));
console.log(chen(100));
console.log(chen(40));
console.log(chen(56));
console.log(chen(78));
console.log(chen(7));
