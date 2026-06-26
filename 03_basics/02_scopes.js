let a = 300

if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER a:", a);
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // op: 30
// var is accessible outside its scope that's why we don't use var instead we only use let and const

// console.log("OUTER a:", a);


function one(){
    const username = "Trushant"

    function two(){
        const website = "youtube"
        // console.log(username); // op: Trushant can access global variables
    }
    // console.log(website); // out of scope error
    two();
}

one();

if(true){
    const username = "Trushant"
    if(username === "Trushant"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // out of scope error
}
// console.log(username); // out of scope error



// console.log(addOne(5)); // op: 6
function addOne(num){
    return num + 1;
}
// console.log(addOne(5)); // op: 6

// console.log(addTwo(7)); // op: ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}
// console.log(addTwo(7)); // op: 9