class P {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled'
  static REJECTED  = 'rejected'

  constructor(executor){
    this.state = P.PENDING;
    this.value = null;
    this.reason = null;

    this.onResolveCallback = []
    this.onRejectedCallback = []

    let resovle = (value)=>{
      if(this.state === PENDING){
        this.state = FULFILLED;
        this.value = value
        this.onResolveCallback.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if(this.state === PENDING){
        this.state = REJECTED
        this.reason = reason;
        this.onRejectedCallback.forEach(fn => fn())
      }
    }

    executor(resovle,reject)
  }

  then(onFulfilled,onRejected){
    if(this.state === FULFILLED)
    {
      onFulfilled(this.value)
    }
    if(this.state === REJECTED){
      onRejected(this.reason)
    }

    if(this.state === PENDING){
      this.onResolveCallback.push(()=>{
        onFulfilled(this.value)
      })

      this.onRejectedCallback.push(()=>{
        onRejected(this.reason)
      })
    }
  }
}



Promise.all = function(arr){
  if(!Array.isArray(arr)){
    return 
  }
  return new Promise((resovle,reject)=>{
    let resArr = []
    arr.forEach(item => {
      item.then(data=>{
        resArr.push(data)
        if(resArr.length === arr.length){
          resolve(resArr)
        }
      },
        err=>{
        reject(err)
      })
    })
   
  })
}

Promise.race = function(arr){
  return new Promise((resolve,reject) => {
    arr.map(item => {
      item.then(data=>{
        resolve(data)
      },err => {
        reject(err)
      })
    })
  })
}