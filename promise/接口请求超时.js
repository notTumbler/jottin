// function* sleep(fn, delay, ...args) {
//   const a = () => {
//     setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
//   yield a();
// }
class Scheduler {
  constructor(limit) {
    this.limit = limit
    this.queue = []
    this.cur = 0
  }

  add(time, order) {
    const pFn = () => new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(order)
      }, time)
    })
    this.queue.push(pFn)
  }

  run() {
    for(let i=0; i<this.limit; i++) {
      this.refresh()
    }
  }

  refresh() {
    if(this.limit <= this.cur || !this.queue.length) return
    this.cur++
    const arrItem = this.queue.shift()
    arrItem().then(res => {
      this.cur--
      console.log(res)
      this.refresh()
    })
  }
  
}
// 测试
const scheduler = new Scheduler(1)
const addTask = (time, order) => {
  scheduler.add(time, order)
}

const fn = (str) => console.log("str", str);
const add = (a, b) => a + b;
addTask(5000, add(1, 2));
addTask(4000, add(1, 3));
addTask(1000, add(1, 4));
addTask(400, add(1, 5));
scheduler.run();
