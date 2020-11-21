//async/await只是语法糖，异步的本质还是回调
//异步循环用 for…of…
/**
 * await后的语句，将会被放入callback()中,
 * 相当于异步
*/
const arr = [1,2,3,4]

function muti(num){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(num*num);
    },2000)
  })
}

+async function(){
  for(let i of arr){
    const res = await muti(i)
    console.log(res);
  }
}()
















