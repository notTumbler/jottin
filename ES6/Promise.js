//Promise
/**
 * excutor是同步代码，then()和catch()中的才是异步
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled' 
const REJECTED = 'rejected'

class P {
  constructor(excutor){
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.fulFnQueue = [];
    this.rejFnQueue = [];
    
    let resolve = value => {
      if(this.status === PENDING){
        this.status = FULFILLED;
        this.value = value;
        //
        this.fulFnQueue.forEach(fn => fn())
      }
    }
    let reject = reason => {
      if(this.status === PENDING){
        this.status = REJECTED;
        this.reason = reason;
        //当状态改变时，将失败队列里的函数执行
        this.rejFnQueue.forEach(fn => fn())
      }
    }

    try {
      excutor(resolve,reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled,onRejected){
      if(this.status === FULFILLED){
        onFulfilled(this.value)
      }
      if(this.status === REJECTED){
        onRejected(this.reason)
      }
      if(this.status === PENDING){
        this.fulFnQueue.push(()=>{
          onFulfilled(this.value)
        })
        this.rejFnQueue.push(()=>{
          onRejected(this.reason)
        })
      }
  }
}
new P((resolve,reject) => {
  setTimeout(()=>{
    reject('chen')
  },3000)
}).then(res => {
  console.log(res)
},err=>{
  console.log(err)
})

