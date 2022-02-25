// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// matchLastItem(["rsq", "6hi", "g", "rsq6hig"]) ➞ true
// // The last item is the rest joined.

// matchLastItem([1, 1, 1, "11"]) ➞ false
// // The last item should be "111".

// matchLastItem([8, "thunder", true, "8thundertrue"]) ➞ true

function matchLastItem(items) {
  let lastItemName = items[items.length - 1];
  let names = "";
  for (let i = 0; i < items.length - 1; i++) {
    // console.log(typeof(items[i]))
    names += items[i];
  }
  console.log(names);

  if (names.toLowerCase() == lastItemName.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}
matchLastItem(["ra", "ki", "ba", "rakiba"]);
