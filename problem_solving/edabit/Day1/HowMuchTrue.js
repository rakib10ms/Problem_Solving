// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

function countTrue(arr){
  // console.log(arr.length);
  if(arr.length>0){
    arr.filter((item)=>{

      if(item==='true'){
        console.log(item.length)
      }
      else if(item==='false'){
        console.log('false')

      }
    })
  }
}
countTrue([true, false, false, true, false])