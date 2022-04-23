
// const myAll = (promises) => {
//   let pLen = promises.length
//   let resArr = []
//   let count = 0;
//   return new Promise((rs, rj) => {
//     if(!pLen) return rs([])
//     promises.forEach((item, index) => {
//       Promise.resolve(item)
//       .then(res => {
//         resArr[i] = res
//         count += 1
//         if(count === pLen) resolve(resArr)
//       }).catch(rj)
//     });
//   })
// }

// const All = (promises) => {
//   const len = promises.length
//   const resArr = []
//   let count = 0
//   return new Promise((resolve,reject) => {
//     if(!len) return resolve([]) 
//     promises.forEach((item,index) => {
//       Promise.resolve(item).then((res) => {
//         resArr.push(res)
//         count++
//         if(len === resArr.length) resolve(resArr)
//       }).catch(reject)
//     })
//   })
// }

const all3 = (promises) => {
  let count = 0
  let res = []
  let len = promises.length
  return new Promise((resolve, reject) => {
    if(!len) return resolve([])
    promises.forEach((item, i) => {
      Promise.resolve(item).then(a => {
        res[i] = a
        count++
        if(count >= len) {
          resolve(res)
        }
      }).catch(reject)  
    })
  })
}