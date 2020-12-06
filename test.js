
// Array.prototype.chen = function(){
//   let newArr = [];
//   this.forEach((ele,index) => {
//     if(this.indexOf(ele) !== index){
//       newArr.push(ele)
//       // this.splice(index,1)
//     }
//   });
//   return newArr;
// }

// const arr = [1,1,1,5,6,6,7,7,7,8];


// function shallowClone(obj){
//   let newobj = {};
  
//   for(let i in obj){
//     newobj[i] = obj[i]
//   }
//   return newobj;
// }

// const ob1 = {
//   name:'chen',
//   age:{
//     age1:12
//   }
// }

// const chen = shallowClone(ob1)

// console.log(chen);

// console.log(chen === ob1);

// var str = 'aabbbbbbcdeeef'
// let x = 0;
// let y = ''

// for(let i=0;i<str.length;i++){
//   if(str[i] === y[y.length-1]){
//     x++;
//   }
//   else{
//     if(x!==0){
//       y += x+1
//       x = 0
//     }
//     y += str[i]
//   }
// }

// console.log(y);


// let obj = {
//   'A':1,
//   'B.C':2,
//   'D.E.F':3,
//   'D.E.G.H':4
// }


// function foo(obj){

//   let resObj = {}
//   for(let i in obj){
//     let keyArr = i.split('.');  
//     if(keyArr.length === 1){
//       keyArr = keyArr.join('')
//       console.log(keyArr);
//       resObj[keyArr[0]] = obj[i]
//     }
//     if(keyArr.length!==1){
//      const chen = keyArr.shift();
//       resObj[chen] = foo(keyArr);
//     }
//   }
//   return resObj
// }

// const res = foo(obj)
// console.log(res);

// // http https
// const str = 'httpdfadfasdfsdfasdf'

// function chen (str){
//   if(!str instanceof String){
//     return
//   }
//   return str.match(/^(http)(s)?/)
// }

// const res = chen(str)
// console.log(res);


// *****************************************
// const str = 'chendibo'
// //从指定位置，截取长度
// console.log(str.substr(1,3));

// //从开始到结束
// console.log(str.substring(1,10));
// console.log(str.slice(1,-2));



// **********匹配字符串****************
// var str = 'https65'
// function chen(str){
//   if(typeof(str) !== 'string'){
//     throw new Error('bushi Str')
//   }

//   const Rex = new RegExp('^(http)(s)?')
//   console.log(Rex.test(str)); 
// }
// chen(str)

//********new********* */
// function _new(){
//   let obj = Array.prototype.shift.call(arguments)
//   let newobj = {}
//   newobj.__proto__ = obj.prototype;
//   let result = obj.apply(newobj,arguments)
//   return result instanceof Object?result:newobj;
// }

// function flatten(array){
//   return array.reduce((pre,item)=>{
//     return pre.concat(Array.isArray(item)?flatten(item):item)
//   },[])
// }

// const one = Object.prototype.toString.call()
// console.log(one);


// const f = new Function('a','console.log(a)')
// f('aaa')

// function whatis(str,type){
//   return  Object.prototype.toString.calfl(str) === `[object ${type}]`
// }


