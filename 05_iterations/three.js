// let arr = [1, 2, 3, 4, 5]
// for(const num of arr){
//     console.log(num);
// }

const greetings = "Hello World"
for(const greet of greetings){
    // console.log(`Each character is ${greet}`);
}

const map = new Map()
map.set(1, "INDIA")
map.set(2, "USA")
map.set(3, "FRANCE")
map.set(1, "INDIA")
// console.log(map);

for(const [key, value] of map){
    console.log(key, ':-' , value);
}