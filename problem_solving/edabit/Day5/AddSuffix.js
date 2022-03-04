
// add_ly = add_suffix("ly")

// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"


const add_ly=(item)=>{
  let result=`${item}ly`;
  console.log(result)
}
add_ly("hopeless");


const add_ly=(item)=>{
 item.map((val)=>{
     console.log(`${val}ly`)
 })
}
add_ly(["hopeless",'beatiful','peaceful']);