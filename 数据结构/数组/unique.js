//1、
// Array.prototype.unique = function(){
//   return [...new Set(this)]
// }

//2、注意().indexOf(item) === -1和!==-1的区别
// Array.prototype.unique = function(){
//   var array=[],item
//   for(let i=0;i<this.length;i++){
//     item = this[i]
//     if(array.indexOf(item)===-1){
//       array.push(item)
//     }
//   }
//   return array
// }

// 3、filter
// indexOf(item,location)从location处开始查找,包含location
// Array.prototype.unique = function(){
//   return this.filter((item,index)=>{
//     return this.indexOf(item,3) === index;
//   })
// }
const arr = [1,true,true,'true',3,3,null,null]

const chen = arr.lastIndexOf(3)
// const chen = arr.unique()
console.log(chen);



