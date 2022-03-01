// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// secondLargest([25, 143, 89, 13, 105]) ➞ 105

// secondLargest([54, 23, 11, 17, 10]) ➞ 23

function secondLargest(items){
  // items.map((item)=>{
  //     console.log(item.max)
  // })
  
  
  let max=Math.max(...items);
  // console.log(max)
    items.splice(items.indexOf(max), 1); 
  let secondLargest= Math.max.apply(null, items);
  console.log(secondLargest)
}
secondLargest([10, 40, 30, 20, 50])