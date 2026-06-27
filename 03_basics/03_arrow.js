const user = {
    username: "Trushant",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);

        // console.log(this); //prints current context
    }
}
// user.welcomeMessage()

// user.username = "Hitesh"
// user.welcomeMessage()

// console.log(this); // op: {} -> empty object for current context


// function chai(){
//     let username = "xyz"
//     // console.log(this.username); // op: undefined
// }
// chai()


// const chai = function(){
//     let username = "xyz"
//     console.log(this.username); // op: undefined
// }
// chai()

// Arrow function ( syntax: () => {} )
const chai = () => {
    let username = "xyz"
    // console.log(this.username); // op: undefined
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Trushant"})

console.log(addTwo(3, 4));

// note -> we have to give return  in curly bracets '{}'
// we don't have to givr return in round brakets '()'