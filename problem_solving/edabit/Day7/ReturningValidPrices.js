// hasValidPrice({ "product": "Milk", price: 1.50 }) ➞ true

// hasValidPrice({ "product": "Cheese", price: -1 }) ➞ false

// hasValidPrice({ "product": "Eggs", price: 0 }) ➞ true

// hasValidPrice({ "product": "Cereals", price: "3.0" }) ➞ false

// hasValidPrice() ➞ false


function hasValidPrice(price){
  // console.log(price);
  if(typeof(price)=='number' && price>0 ||price==0 ){
      console.log('true')
  }
  else{
      console.log('false')
  }
}
hasValidPrice(0)
hasValidPrice("3.0")
hasValidPrice(1.50)