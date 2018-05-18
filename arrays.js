function addElementToBeginningOfArray() {
  var myArray = ["OK" , "CA" , "NY"]
  return ["VA" , ...myArray]
}
function destructivelyAddElementToBeginningOfArray () {
  var secArray = ["CO" , "GA" , "NJ"]
  return secArray.unshift("CT")
}

function addElementToEndOfArray(){
  var ktm = ["kathmandu", "Pokhara","Biratnagar"]
  return [...ktm, "Jhapa"]
}
function destructivelyAddElementToEndOfArray(){
  var pkr = ["Manchester" , "Liverpool" ,"Chelsea"]
  return pkr.push("Tottenham")
}

function accessElementInArray(){
  var fam = ["dad","mom"]
  return fam[1]
}
