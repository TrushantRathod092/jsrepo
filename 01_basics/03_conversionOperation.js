let score = "33"
let str = "33abc"
// console.log(typeof score)

// console.log(typeof (score))
// console.log(typeof (str))

let valueInNumber = Number(score) //type conversion

let valueOfStr = Number(str) //type conversion

// console.log(typeof (valueInNumber))
// console.log(typeof (valueOfStr))

// console.log(valueInNumber)
// console.log(valueOfStr) //ouptut: NaN(Not a Number)

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

// console.log(typeof (booleanLoggedIn))

// console.log(booleanLoggedIn)

// after converting to boolean then output of:
// 1 => true
// 0 => false
// "" => true (empty string)
// "trushant" => false (non-empty string)




let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2**3) // this means 2 to power 3

let str1 = "hello"
let str2 = " trushant"
let str3 = str1 + str2

// console.log(str3)

// console.log("1" + 2) // output: 12
// console.log(1 + "2") // output: 12
// console.log("1" + "2") // output: 12
// console.log("1" + 2 + 2) // output: 122
// console.log(1 + 2 + "2") // output: 32
// console.log(1 + "2" + 2) // output: 122
// console.log("1" + (2 + 2)) // output: 14


// console.log(+true) // output: 1

//in int conversion true is treated as 1
// console.log(1+true) // output: 2
// console.log(true+2) // output: 3


let gameCounter = 100
console.log(gameCounter++) // output: 100
console.log(++gameCounter) // output: 102