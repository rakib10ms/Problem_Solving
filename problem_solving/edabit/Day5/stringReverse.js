// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"


function reverseWords(val){
  console.log(val.split(" ").reverse().join(' '));
   
}
reverseWords("the sky is blue")