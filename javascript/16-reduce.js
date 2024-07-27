const myNums = [1, 3, 6, 7, 9, 10]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc:${acc} and currval:${currval}`);
    return acc + currval
}, 0)
// const myTotal =myNums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 500
    },
    {
        itemName: "py course",
        price: 1000
    },
    {
        itemName: "css course",
        price: 1500
    },
    {
        itemName: "java course",
        price: 2500
    },
]

const myCart = shoppingCart.reduce(function (acc, curr) {
    console.log( `acc: $ {acc } and currval: ${ curr.price }`);
    return acc+curr.price 
},0)
console.log(myCart);
