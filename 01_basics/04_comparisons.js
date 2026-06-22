// > , < , >= , <= , == etc  are comparison operators
// console.log("2" > 1) // output: true
// console.log("02" > 1) //// output: true

// console.log(null > 0) //false
// console.log(null == 0) //false
// console.log(null >= 0) //true

// actually == and >, <, >=, <= works differently
// >, <, >=, <=: converts the null into 0 
// that's why (null > 0) is flase and (null >= 0) is true


// console.log(undefined > 0) //false
// console.log(undefined == 0) //false
// console.log(undefined >= 0) //false

// === strictly checks for datatypes
console.log("2" === 2) //false