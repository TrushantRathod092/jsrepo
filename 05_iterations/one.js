for(let i = 0; i <= 10; i++){
    // if(i == 5) console.log("5 is best number");
    // console.log(i);
}

// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 5; j++) {
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }

let myArray = ["batman", "spiderman", "superman"]
// console.log("Length of Array:", myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// break and continue

for (let i = 1; i < 10; i++) {
    if(i == 5) break
    console.log(i);
}