/* let that = this;
   let args = arguments; 
   这两行代码的作用是让debounce函数最终返回的this指向不变以及依旧能接收到e参数。
   ** 不能用setInterVal()来模拟连续的事件，那样的话只有第一次会生效。
*/

/* 防抖 */

function debounce(fun,delay,immediate = false){

  if(immediate!==true && immediate!==false){
    throw new Error('immediate的值只能为true||false')
  }

  let timer = null;

  return function(){
    let that = this;
    console.log(this);
    let args = arguments;

    if(timer) clearTimeout(timer);
    if(immediate){
      let callNow = !timer;
      timer = setTimeout(()=>{
        timer = null;
      },delay)
      if(callNow) fun.apply(that,args);
    }
    else{
      timer = setTimeout(()=>{
        fun.apply(that,args);
      },delay)
    }
  }
}


  
 


debounce(setInterval(()=>{
  console.log(1);
},1000),2000,false)



