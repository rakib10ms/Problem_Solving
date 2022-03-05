// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700



function getBudgets(items){
    
  let total= items.reduce((item,tot)=>{
       return item + tot.budget;
   },0)
   console.log(total)
}
getBudgets([
 { name: "John", age: 21, budget: 23000 },
 { name: "Steve",  age: 32, budget: 40000 },
 { name: "Martin",  age: 16, budget: 2700 }
])
