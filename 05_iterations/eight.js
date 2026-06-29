const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, currVal){
    return acc + currVal;
}, 0) // 0 is the initial value for accumulator

// console.log(myTotal); // op: 6 i.e., 1+2+3 = 6 for accummulator 0 and for accumulator 3 op: 9 i.e., 3+1+2+3 = 9

const sum = myNums.reduce((acc, curr) => acc+curr,0)
// console.log(sum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);