// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

function sevenBoom(item){
    
  // console.log(item.toString());
  
         if(item.toString().includes(7)){
          console.log('boom');
      }
      else{
          console.log('not found')
      }
 
  // // item.map((val)=>{
  // //     // console.log(val.toString().split(''))
      
  // //     let arrayOfString=val.toString().split('');
      
  // //     console.log(arrayOfString)
      
  // //          if(arrayOfString.includes('7')){
  // //         console.log('boom');
  // //     }
  // //     else{
  // //         console.log('not found')
  // //     }
      
  // })
}
sevenBoom([2, 55, 60, 9, 86])
sevenBoom([2, 55, 60, 7, 86])