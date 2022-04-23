// 写一个Js函数，实现一个数字每3位加一个逗号，如输入100000，输出100,000(不考虑负数，小数)

// let resArr = []

// const main = (num,c) =>{
//   if(num == null) return;
//   // 用parseInt()?
//   let strNum = parseInt(num).toString();
//   console.log(strNum)
//   s(strNum)
//   console.log(resArr.reverse().join(c))
// }
// const s = (str) => {
//   if(str.length > 3){
//     resArr[resArr.length] = str.slice(-3);
//     s(str.slice(0,-3))
//   }else{
//     resArr[resArr.length] = str;
//   }
// }
// main(12345678,'.')

//**2.给定一个字符串，找出其中无重复字符串的最长子串字符串长度 */
// function strLen(str){
//   let result = 1;//最终要返回的结果的初始值
//   var norepeatStr = '';//用于存放无重复子串
//   var len = str.length;
//   for(let i=0;i<len;i++){
    
//     //charAt()获取的是字符串索引对应的具体字符串
//     var specStr = str.charAt(i);
//     //indexOf()查找的是某个字符第一次出现并返回这个索引值，若没有这个字符，返回-1
//     var index = norepeatStr.indexOf(specStr);
//     if(index === -1){
//       //将遍历得到的字符（未重复）拼接在norepeatStr后面
//       norepeatStr = norepeatStr + specStr;
      
//       result = result < norepeatStr.length ?norepeatStr.length : result;
//     }else{
//       //若遇见重复的字符，那么将已出现在norepeatStr里的字符删除，并将新的（重复的）字符添加到末尾
//       norepeatStr = norepeatStr.substr(index+1) + specStr;
//     }
//   }
//   return result;
// }
// console.log(strLen('adfghj'))

/**
 * 3'实现超出整数存储范围的两个大正整数相加
 */
// function chen(){
//   var a = '123123231231234444435'
//   var b = '434235656455454543'

//   var n1 = a.length;
//   var n2 = b.length;
//   for(let i=0;i<Math.max(n1,n2)-Math.min(n1,n2);i++){
//     if(n1>n2) b='0'+b;
//     if(n1<n2) a = '0' +a;
//   }
//   a = a.split('').reverse();
//   b = b.split('').reverse();
//   //现在a,b数组中存储着相同个数的大数字的逆顺序拆解
//   var n = Math.max(n1,n2);
//   var result = Array.apply(this,Array(n)).map((item,i) =>{
//     return 0;
//   })
//   //生成一个长度为n的每个元素都为0的数组（用来保存最终的结果）
//   for(let k=0;k<n;k++){
//     var temp = parseInt(a[k]) + parseInt(b[k])
//     if(temp > 9){
//       result[k] += temp - 10;
//       result[k+1] = 1;
//     }else{
//       result[k] += temp;
//     }
//   }
//   //把ab数组中的数字相加减，注意进位。
//   console.log(result.reverse().join('').toString())
//   //将数组项基于指定的分隔符以字符串输出
// }
// chen()

// 记录下解题思路(看大佬们的解题才明白的)

// 典型的动态规划的题目，

// 状态:
// dp[i][j] 有i个鸡蛋，j次扔鸡蛋的测得的最多楼层

// 二分法从中间楼层掉个鸡蛋，次数+1
// 碎了-> i-1个鸡蛋测试j-1次 -> 下面的楼层
// 没碎-> i个鸡蛋测试j-1次 -> 上面的楼层
// 所以 dp[i][j] = 1 + dp[i-1][j-1] + dp[i][j-1]

// 然后只要判断dp[i][j]大于楼层N的话，就可以返回次数j了。

// 那个状态转移方程一维优化的看不懂啊，，数学功底太差了。。。。。

// 代码

/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  let dp = Array(K+1).fill(0).map(() => new Array(N+1).fill(0))
  // console.log(dp)

  for (let j = 1; j <=N; j++) {
    for (let i = 1; i <= K; i++) {
      /**
       *二分法   碎了  i-1 j-1 ->下面的     没碎 i j -1  -> 上面的 
       * i-1个鸡蛋j-1次测的楼层 +  i个鸡蛋j-1次测的楼层  + 1
       */
      dp[i][j] = 1 + dp[i-1][j-1] + dp[i][j-1]
      
      if (dp[i][j] >= N) {
        // console.log(dp[i][j], i , j)
        return j
      }
    }
  }
  return N
};






