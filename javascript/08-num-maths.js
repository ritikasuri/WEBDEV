

let num= new Number(300.22455445541212255544444444444);
console.log(num.length);
console.log(num.toString().length);
console.log(num.toFixed(2));

const dec =154.55886556522;
console.log(dec.toPrecision(4));
console.log(dec.toPrecision(2));


 
 

console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.SQRT2);
console.log(Math.ceil(4.1));
console.log(Math.floor(4.8));

console.log(Math.random());   
console.log((Math.random()*10000).toPrecision(4));

const price=1000000000;
console.log(price.toLocaleString())
console.log(price) //not changing the original number
 console.log(price.toLocaleString('en-US'))


const min=10;
const max=20;
console.log((Math.random()*(max-min+1))+min)
console.log(Math.floor(Math.random()*(max-min+1))+min) 