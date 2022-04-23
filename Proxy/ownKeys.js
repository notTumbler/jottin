let user = {
  name:'chen',
  age:20
}
user = new Proxy(user,{
  ownKeys(target){
    return Object.keys(target).filter(item => item.match(/^a/,''))
    // return ['a','b']
  }
})
console.log(Object.keys(user));

