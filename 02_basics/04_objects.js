// singleton object
// const  tinderUser = new Object()
// console.log(typeof tinderUser);

// Non-singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Trushant"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "user@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Trushant",
            lastName : "Rathod"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

// const obj3 = {obj1, obj2}
// op : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = {...obj1, ...obj2}
// op : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign(obj1, obj2) //same as bottom
// console.log(obj3 == obj1); // op : true

const obj3 = Object.assign({}, obj1, obj2) // same as top but giving {} is a good practice
// console.log(obj3 == obj1); // op : false

// console.log(obj3);

// array of objects accessing
const user = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    },
    {
        id: 1,
        email: "t@gmail.com"
    }
]

// console.log(user[1].email);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// op : [ 'id', 'name', 'isLoggedIn' ] array format op
// console.log(Object.values(tinderUser));
// op : [ '123abc', 'Trushant', false ] array format op
console.log(Object.entries(tinderUser));
// op : [ [ 'id', '123abc' ], [ 'name', 'Trushant' ], [ 'isLoggedIn', false ] ] array of array op makes an array of each key-value pair