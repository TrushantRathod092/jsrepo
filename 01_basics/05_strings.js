let name = "trushant"
let repoCount = 50

// console.log(name + " " + repoCount + " Value")

console.log(`My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Bittu");
// console.log(gameName[3]);
// console.log(gameName.__proto__);
// console.log(gameName.length)
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('u'))

const newString = gameName.substring(0, 3)
// console.log(newString)

const anotherString = gameName.slice(-4, 4) // -4 = 1 for Bittu string
// console.log(anotherString)

const newStringOne = "    bittu    "
console.log(newStringOne);
console.log(newStringOne.trim()); // trims the space