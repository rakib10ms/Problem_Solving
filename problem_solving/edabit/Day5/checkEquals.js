// checkEquals([1, 2], [1, 3]) ➞ false

// checkEquals([1, 2], [1, 2]) ➞ true

// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true

// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false

// checkEquals([4, 7, 6], [4, 6, 7]) ➞ false

function checkEquals(...rest) {
  // console.log([...rest])

  let arr = [...rest];

  let check = arr.every((item) => {
    return item === arr[0];
  });
  console.log(check);
  if (check) {
    console.log("true");
  } else {
    console.log("false");
  }
}
checkEquals([1, 2], [1, 2], [1, 3]);
