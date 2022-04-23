//一、
function ListNode(val){
  this.val = val
  this.next = null
}
//创建链表
const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = null

function exchange(head){
  let dummy = new ListNode(null)
  dummy.next = head
  let res = dummy
  
  while(head && head.next){
    const next = head.next
    head.next = next.next
    next.next = head
    res.next = next
    res = head
    head = head.next
  }
  return dummy.next
}
// console.log(exchange(node1))

// 二、
const words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
const lineWidth = 20
const alignment = (words,lineWidth) => {
  const newWords = words.map(item => item + ' ')
  lineWidth += 1
  let result = []
  let arr = [],
      width = 0
  for(let item of newWords){
    width += item.length
    if(width>lineWidth){
      result.push(cycle(arr,lineWidth))
      arr = []
      width = item.length
    }
    arr.push(item)
  }
  let last = arr.join('').trim()
  last += ' '.repeat(lineWidth-1 - last.length)
  result.push(last)
  return result

  function cycle(arr,lineWidth){
    const n = arr.length
    if(n === 1){
      let word = arr[0].trim()
      word += ' '.repeat(lineWidth-1 - word.length)
      return word
    }
    let width = 0
    for(let item of arr){
      width += item.length
    }
    let i=0
    while(width<lineWidth){
      arr[i%(n-1)] += ' '
      i++
      width++
    }
    return arr.join('').trim()
  }
}
const chen = (words,maxWidth) => {
  let newWords = words.map(item => item+' ')
  maxWidth += 1
  let tmp = [],
      width = 0,
      result = []
  for(let item of newWords){
    width += item.length
    if(width > maxWidth){
      result.push(cycle(tmp,maxWidth))
      tmp = []
      width = item.length
    }
    tmp.push(item)
  }
  let lastOne = tmp.join('').trim()
  lastOne += ' '.repeat(maxWidth-1 - lastOne.length)
  result.push(lastOne)
  return result
}
function cycle(arr,maxWidth){
  const len = arr.length
  if(len === 1) {
    let word = arr.join('').trim()
    word += ' '.repeat(maxWidth-1 - word.length)
    return word
  }
  let width = 0
  for(let item of arr) width += item.length
  let i=0
  while(width < maxWidth){
    arr[i%(len -1)] += ' '
    i++
    width ++
  }
  return arr.join('').trim()
}
// console.log(alignment(words,lineWidth))

//三、
const s = '25525511135'
const allIp = (s) => { 
  const res = [];
  const dfs = (subRes, start) => {                 
    if (subRes.length == 4 && start == s.length) { 
      res.push(subRes.join('.'));                  
      return;                    
    }
    if (subRes.length == 4 && start < s.length) {  
      return;
    }
    for (let len = 1; len <= 3; len++) {          
      if (start + len - 1 >= s.length) return;    
      if (len != 1 && s[start] == '0') return;     
      const str = s.substring(start, start + len); 
      if (len == 3 && +str > 255) return;        
      subRes.push(str);                            
      dfs(subRes, start + len);                   
      subRes.pop();
    }
  };
  dfs([], 0);      
  return res;
};
// console.log(allIp(s))