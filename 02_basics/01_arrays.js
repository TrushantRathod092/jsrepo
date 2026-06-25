const arr = [2,3,4,5]
// console.log(arr[0])

const arr2 = new Array(7,8,3,1)
// console.log(arr2[2])

arr.push(6)
arr.push(7)
// console.log(arr);

arr.pop();
// console.log(arr);

arr.unshift(9)
// console.log(arr);

arr.shift()
// console.log(arr);

// console.log(arr.includes(2));

// console.log(arr.indexOf(5));

// const newArr = arr.join()
// console.log(newArr);
// console.log(typeof newArr);


// slice and splice

console.log("A", arr); // op : A [ 2, 3, 4, 5, 6 ]

arr3 = arr.slice(1, 3)
console.log(arr3); // op: [ 3, 4 ]
console.log("B", arr); // op : B [ 2, 3, 4, 5, 6 ]

arr4 = arr.splice(1, 3)
console.log(arr4); // op : [ 3, 4, 5 ]
console.log("C", arr); // op : C [ 2, 6 ]

// 1. SLICE
// 1. slice doesn't manipulate original array
// 2. slice excludes last index when printing
// eg., slice(1, 3) includes index 1 and 2 only not 3.

// 1. SPLICE
// 1. splice manipulates the original array
// 2. slice doesn't excludes last index when printing
// eg., splice(1, 3) includes index 1, 2 as well as 3.
// and removes elements from array from index 1 to 3.