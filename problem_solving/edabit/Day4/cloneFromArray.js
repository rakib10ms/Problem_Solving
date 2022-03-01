// clone([1, 1]) ➞ [1, 1, [1, 1]]

// clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]

// clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]

function clone(arr){
  // console.log(...arr)
  let str=arr;
  // console.log(...str);
  let result=[...str,arr];
      console.log(result)

}
// clone([1, 1])
clone([1, 2, 3])