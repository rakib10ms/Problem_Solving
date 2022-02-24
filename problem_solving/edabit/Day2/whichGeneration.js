function whichGeneration(x, y) {
  if (x === -1 && y === "m"||"f" ) {
    if (y === "m") {
      console.log("Father");
    } else {
      console.log("Mother");
    }
  } else if (x === -2 && y === "m"||"f" ) {
    if (y === "m") {
      console.log("Grand Father");
    } else {
      console.log("GrandMother");
    }
  } else if (x === -3 && y === "m"||"f") {
    if (y === "m") {
      console.log("Great grand Father");
    } else {
      console.log("Great GrandMother");
    }
  }
  else if (x === 0 && y === "m"||"f" ) {
    if (y === "m") {
      console.log(`Me! Male`);
    } else {
      console.log(`Me! FeMale`);
    }  
  }         
    else if (x === 1 && y === "m"||"f") {
    if (y === "m") {
      console.log("Son");
    } else {
      console.log("Daugher");
    }
  } else if (x === 2 && y === "m"||"f")  {
    if (y === "m") {
      console.log("GrandSon");
    } else {
      console.log("GrandDaugher");
    }
  } else if (x === 3 && y === "m"||"f") {
    if (y === "m") {
      console.log("great grandson");
    } else {
      console.log("great granddaughter");
    }
  }
}
whichGeneration(-3, "m");
