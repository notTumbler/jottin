
// function ajax(url,successFn){
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET',url,true)
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//         successFn(xhr.responseText)
//       }
//     }
//   }
//   xhr.send(null)
// }


function ajax(url){
  return new Promise((resolve,reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          resolve(xhr.responseText)
        }
        if(xhr.status === 404){
          reject(new Error(`404 not found`))
        }
      }
    }
    xhr.send(null)
  })
}

const url = './data.json'
const url1 = './ur.json'
// ajax(url).then(res => console.log(res))
// .catch(err => console.log(err))


// ajax(url).then(res1 => {
//   console.log(`第一次请求到的数据${res1}`)
//   return ajax(url1)
// },err=>{
//   console.log(err);
// })
// .then(res2 => {
//   console.log(`第二次请求到的数据${res2}`);
// },err=>{
//   console.log(err);
// }).then(res3 => {
//   console.log(`第三次请求到的数据${res3}`);
// },err => {
//   console.log(err);
// })


// w3c ajax
//readystate的值会随着请求各阶段的变化而变化，其中一共有五个值
// 0:尚未调用open方法
//1 - 已经调用open，但尚未发送请求，send()
//2 - 已经发送请求
//3 - 请求处理中
//4 - 请求完成已接收到请求返回的数据

//当readystate变化时，会触发xhr的事件onreadystatechange,我们可以在这个方法中对接收到的数据进行处理

// function ajax(url,successFn){
//   let xhr;
//   if(window.XMLHttpRequest){
//      xhr = new XMLHttpRequest()
//   }else if(window.ActiveXObject){
//     //参数
//      xhr = new ActiveXObject('Microsoft.XMLHTTP')
//   }

//   if(xhr == null) {
//     throw new Error('Your 浏览器不支持XMLHTTP')
//   }

//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//         successFn(xhr.responseText)
//       }
//     }
//   }

//   xhr.open('GET',url,true);
//   xhr.send(null)
// }
// const url = './data.json'
// ajax(url,(res)=>{console.log(data);})











