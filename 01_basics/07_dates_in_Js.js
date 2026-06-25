//Dates

let myDate = new Date();
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString('en-In'))

// console.log(typeof myDate)

let myCreatedDateOne = new Date(2026, 0, 20)
// console.log(myCreatedDateOne.toDateString())

// let myCreatedDateTwo = new Date(2026, 0, 20, 5, 32)
let myCreatedDateTwo = new Date("2026-3-16")
// console.log(myCreatedDateTwo.toLocaleString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDateTwo.getTime())

// console.log(Math.floor(Date.now() / 1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())