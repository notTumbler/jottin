//ordinary
if(a == undefined) a = [];

if(params.success){
  params.success(res);
}

//grace
a = a || [];

params.success && params.success(res);


//ordinary
//多条件判断
var One = function(arg){
  console.log(`执行${arg}`);
}

switch(currentTab){
  case 0:
    console.log(One(1));;
    break;
  case 1:
    console.log(One(2));;
    break;
}
//grace
var One = function(arg){
  console.log(`执行${arg}`);
}
var Two = function(arg){
  console.log(`执行${arg}`);
}

const MyMap = new Map([
  [0,One],
  [1,One],
  [2,Two]
])
MyMap.get(1) && MyMap.get(1)();

//匿名函数调用
//普通写法
(function(){})();

//grace
!function(){}();
+function(){}();



//下取整
parseInt(15.88);

//grace
15.88 | 0; //-->15
~~15.88;   //-->15

//异步回调async/await


//解构
const {id = 5} = {}; //赋默认值
console.log(id);


//累加字符串
let str;
for(let i=0;i<5;i++){
  str += 'abc'
}

str.repeat(5);

//数字的幂
Math.pow(4,3)
const power = 4**3

