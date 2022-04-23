let obj = {
  a: "a",
  b: "b",
  c: "c",
  d: {
    name: "chen",
    age: 23,
  },
};
// console.log(JSON.stringify(obj, ["a", "b"]));
// let res = JSON.stringify(obj, (k, v) => {
//   console.log("ke", k);
//   console.log("va", v);
//   if (typeof v === "string") return `${v} + 1234`;
//   // return 'b';
// });
// console.log("res", res);

// let a = [1,2,3,4,5]
// a.forEach((item, i) => {
//   if(i ===1 || item === 3) return true
//   console.log(item, i);
//   return i
// })
// class U {
//   constructor() {
//     this.task = []
//     setTimeout(() => this.next())
//   }
//   next() {
//     const task = this.task.shift()
//     task && task()
//   }
//   console(str) {
//     const task = () => {
//       console.log(str)
//       this.next()
//     }
//     this.task.push(task)

//     console.log(this)
//     return this
//   }

//   setTimeout(delay) {
//     const task = () => {
//       setTimeout(() => {
//         this.next()
//       }, delay)
//     }
//     this.task.push(task)
//     return this
//   }
// }

// const u = new U()
// u.console('早').setTimeout(2000).console('中').setTimeout(2000).console('晚').setTimeout(2000).console('睡觉吧')

const add = (...args) => {
  return args.reduce((pre, item) => {
    return pre + item;
  }, 0);
};


// const currying = (fn) => {
//   let fnLen = fn.length;
//   console.log("fn", fnLen);
//   return function collectArgs() {
//     const list = [...arguments];
//     if (list.length >= fnLen) {
//       return fn(...list);
//     }
//     return function () {
//       return collectArgs(...list, ...arguments);
//     };
//   };
// };

const currying = (fn) => {
  let fnLen = fn.length
  return function collectArgs(...args) {
    if(args.length >= fnLen) {
      return fn(...args)
    }
    return function() {
      return collectArgs(...args, ...arguments)
    }
  }
}

const add1 = (a,b,c) => {
  return a+b+c
}

// const cur = (fn) => {
//   return function() {
//     const args = [...arguments]
//     if(args.length === 0) {
//       return fn(...args)
//     }
//     return cur(fn.bind(null, ...args))
//   }
// }
const chen = currying(add1)
console.log(chen(1)(2,4,5));


const one = '123'
const two = '9876'

const bigAdd = (a, b) => {
  const arr1 = a.split('').reverse()
  const arr2 = b.split('').reverse()
  const len = Math.max(arr1.length,arr2.length)

  const res = []
  let flag = 0

  for(let i=0; i<len; i++) {
    const num1 = +arr1[i] || 0
    const num2 = +arr2[i] || 0
    let sum = num1 + num2 + flag
    if(sum >= 10) {
      sum %= 10
      flag = 1
    } else {
      flag = 0
    }
    res.push(sum)
    if(i===len-1 && flag) {
      res.push(1)
    }
  }
  return res.reverse().join('')
}
console.log(bigAdd(one, two))