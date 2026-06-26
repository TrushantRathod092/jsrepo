// function addtwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addtwoNumbers(3, 5)

function addtwoNumbers(num1, num2){
    const result =  num1 + num2
    return result;
    // console.log("Trushant"); //unreachable because of return
}

const result = addtwoNumbers(4, 7)
// console.log("Result:", result);

function loginUserMessage(username){
    if(!username){ // username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Trushant"));

// ... -> rest / spread operator
// function calculateCartPrice(...num1){
//     return num1; // returns [ 200, 400, 500, 2000 ]
// }
function calculateCartPrice(val1, val2, ...num1){
    return num1; // returns [ 500, 2000 ]
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


user = {
    username: "Trushant",
    price: 99
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`)
}

// handleObject(user)

// handleObject({
//     username: "Harry",
//     price: 199,
// })


const arr = [200, 300, 500, 1000]

function returnSecondValue(getArray){
    console.log(getArray[1]);
}

returnSecondValue(arr);