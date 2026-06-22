// Primitive

// 7 types: Number, String, Boolean, Symbol, BigInt, null, undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// although we have give dame id's but they will be different because of symbol datatype which is used for uniqueness

console.log(id == anotherId) // output: false


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