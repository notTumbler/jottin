const test = [9, 8, 3, 4, 7, 6, 5, 4];

const mp = (arr) => {
  const len = arr.length;
  let temp;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
console.log(mp(test));

// const mp = (arr) => {
//   const len = arr.length;
//   for(let i=0;i<len;i++){
//     for(let j=0;j<len-1-i;j++){
//       if(arr[j]>arr[j+1]){
//         tmp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = tmp
//       }
//     }
//   }
//   return arr
// }

// const mp = (arr) => {
//   let temp
//   for(let i=0,len=arr.length; i<len; i++) {
//     for(let j=0; j<len-1-i; j++) {
//       if(arr[j]>arr[j+1]) {
//         // temp = arr[j]
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//         // arr[j] = arr[j+1]
//         // arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }

// console.log(mp(test))

const arr = [1, 2, 3, 4, 5];
const dlsz = (arr) => {
  return arr.sort(() => {
    return Math.random() > 0.5 ? 1 : -1;
  });
};
console.log(dlsz(arr));
