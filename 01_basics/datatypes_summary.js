// Primitive

// 7 types: Number, String, Boolean, Symbol, BigInt, null, undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// although we have give dame id's but they will be different because of symbol datatype which is used for uniqueness

// console.log(id == anotherId) // output: false


// Reference / Non- Primitive

// Array, Objects, Functions

const heros = ["spiderman", "superman", "ironman"]

let myobj = {
    name : "Trushant",
    age : 20
}

const myFunction = function(){
    console.log("Hello World")
}


//Stack (Primitive) , Heap(Non-Primitive)

let myName = "Trushant"
let anotherName = myName
anotherName = "Bittu"

// console.log(myName)
// console.log(anotherName)

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "trushant@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)