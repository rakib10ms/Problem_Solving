

function myFunction(a, b)
{
const keyss=Object.keys(a);
console.log(keyss);

// console.log(keyss);

// for (let i of keyss) {
// //   console.log(i); 
//   if(i===b){
//       console.log('true')
//   }
//   else{
//     console.log('false')

//   }
// }
 if(keyss.includes(b)){
      console.log('true')
 }
 else{
     console.log('false')
 }

}

myFunction({a:1,b:2,c:3},'d')