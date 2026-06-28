// <, >, <=, >=, ==, !=, ===, !==

// if(2 == '2'){
//     console.log(`Executed`); // op: Executed
// }

// if(2 === '2'){
//     console.log(`Executed`); // op: nothing === strictly checks for datatypes also
// }

const temp = 46
if(temp < 50){
    // console.log("Temperature is less than 50");
}
else{
    // console.log("Temperature is not less than 50");
}
// console.log("Always Executes");


const balance = 700
// if(balance < 500){
//     console.log("Balance is less than 750");
// }
// else if(balance < 750){
//     console.log("Balance is less than 750");
// }
// else if(balance < 900){
//     console.log("Balance is less than 900");
// }
// else{
//     console.log("Balance is less than 1200");
// }


const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
}