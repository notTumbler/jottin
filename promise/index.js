class Pro {
  constructor(executor) {
    this.initValue()
    this.initBind()
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  initBind() {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  initValue() {
    this.promiseResult = null
    this.promiseState = 'pending'
    this.onFulfilledCallBacks = []
    this.onRejectedCallBacks = []
  }

  resolve(value) {
    if(this.promiseState !== 'pending') return
    this.promiseState = 'fulfilled'
    this.promiseResult = value
    while(this.onFulfilledCallBacks.length) {
      this.onFulfilledCallBacks.shift()(this.promiseResult)
    }
  }

  reject(reason) {
    if(this.promiseState !== 'pending') return
    this.promiseState = 'rejected'
    this.promiseResult = reason
    while(this.onRejectedCallBacks.length) {
      this.onRejectedCallBacks.shift()(this.promiseResult)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    var thenPromise = new Pro((resolve, reject) => {
      const resolvePromise = cb => {
        setTimeout(() => {
          try {
            const x = cb(this.promiseResult)
            if(x === thenPromise) {
              throw new Error('怎么能返回自己呢')
            }
            if(x instanceof Pro) {
              // 如果返回的是Promise对象, 返回值为成功, 新promise就是i成功
              // 如果返回值是失败，新promise就是失败
              // 只有then知道返回的promise是成功还是失败
              x.then(resolve, reject)
            } else {
              // 返回的不是promise对象
              resolve(x)
            }
          } catch(err) {
            // 为什么这里 要写两个报错啊，一个不就够了吗？
            reject(err)
            throw new Error(err)
          }
        },0)
      }

      if(this.promiseState === 'fulfilled') {
        resolvePromise(onFulfilled)
      } else if(this.promiseState === 'rejected') {
        resolvePromise(onRejected)
      } else if (this.promiseState === 'pending') {
        this.onFulfilledCallBacks.push(resolvePromise.bind(this, onFulfilled))
        this.onRejectedCallBacks.push(resolvePromise.bind(this, onRejected))
      }
    })
    return thenPromise
  }
}

const test = new Pro((resolve,rej) => {
  resolve(1)
}).then(res => console.log(res))
console.log(2)