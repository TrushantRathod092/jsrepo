let score = "33"
let str = "33abc"
// console.log(typeof score)

console.log(typeof (score))
console.log(typeof (str))

let valueInNumber = Number(score) //type conversion

let valueOfStr = Number(str) //type conversion

console.log(typeof (valueInNumber))
console.log(typeof (valueOfStr))

console.log(valueInNumber)
console.log(valueOfStr) //ouptut: NaN(Not a Number)

// after converting to number then output of:
// "33" => 33
// "33abc" => NaN
// "trushant" => NaN
// "undefined" => NaN
// "null" => 0
// "true" => 1
// "false" => 0



let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)

console.log(typeof (booleanLoggedIn))

console.log(booleanLoggedIn)

// after converting to boolean then output of:
// 1 => true
// 0 => false
// "" => true (empty string)
// "trushant" => false (non-empty string)