// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

function keysAndValues(obj) {
  let ascKeys = Object.keys(obj);
  let values = Object.values(obj);
  ascKeys.sort();

  let ascValues;
  checkArray(values);
  function checkArray(value) {
    let str = value.every((i) => typeof i === "string");
    if (!str) {
      ascValues = value.sort((a, b) => {
        return a - b;
      });
    } else {
      ascValues = values.sort();
    }
  }
  let finalResult = [ascKeys, ascValues];
  console.log(finalResult);
  // console.log(ascKeys);
  // console.log(ascValues);
}
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
keysAndValues({ key1: true, key2: false, key3: undefined });
