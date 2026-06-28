const userEmail = "t@trushant.ai"

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

// falsy values: false, 0, -0, BigInt 0n, "", null, undeined, Nan

// truthy values: "0", 'false', " ", [], {}, funtion(){}

const emptyObject = {}
if(Object.keys(emptyObject).length == 0){
    // console.log("Object is empty");
}


// Nullsi Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10 // op: 5 a first number

// val1 = null ?? 10 // op: 10
// val1 = 5 ?? null // op: 5

// val1 = undefined ?? 5 // op: 5
// val1 = 10 ?? undefined // op: 10

// console.log(val1);


// Ternary operator

// condition ? true : false

const price = 70

price >= 80 ? console.log("greater than or equal to 80") : console.log("less than 80")