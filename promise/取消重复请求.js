let count = 1
const fn = () => new Promise(res => setTimeout(() => {
  res(count++)
}))

const onlyRequest = (f) => {
  let p = null
  return function(...args) {
    return p ?
    p : (p = f.call(this, ...args).finally(()=>p=null))
  }
}

let once = onlyRequest(fn)
once().then(console.log)
once().then(console.log)
once().then(res => console.log(res))
