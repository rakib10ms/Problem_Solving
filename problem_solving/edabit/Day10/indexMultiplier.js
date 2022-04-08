// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// Examples
// indexMultiplier([1, 2, 3, 4, 5]) ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// indexMultiplier([-3, 0, 8, -6]) ➞ -2
// // (-3*0 + 0*1 + 8*2 + -6*3)

function indexMultiplier(items) {
  if (items == []) {
    console.log("0");
  } else {
    allNumbers = [];
    items.map((val, i) => {
      let numberConvert = Number(val * i);
      allNumbers.push(numberConvert);
    });
    console.log(allNumbers.reduce((a, b) => a + b, 0));
  }
}
indexMultiplier([1, 2, 3, 4, 5]);
