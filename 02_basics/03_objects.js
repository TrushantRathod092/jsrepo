// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Trushant",
    "full Name" : "Trushant Rathod",
    [mySym] : "myKey1",
    age : 20,
    location : "Ghatanji",
    email : "trushant@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser["full Name"]);
// console.log(typeof JsUser.mySym); // op: String not Symbol because not used brackets for symbol

// note :->
// to use Symbol, use in square bracket
// eg., in object use JsUser{ [mySym] : "key" } instead  of JsUser{ mySym : "key" }

// to access symbol we don't need double quotation ("")

// console.log(JsUser[mySym]);


// changing object values

JsUser.email = "trushant@chatgpt.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser) // now nothing can be changed from Jsuser objrct

JsUser.email = "trushant@google.com"
// console.log(JsUser["email"]); // no change op: trushant@chatgpt.com

// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())