// Explicit conversion =converted by the user
let score =22;
console.log(typeof score); // number
var a =String(score)
console.log(a)
console.log(typeof a) // string

let score2 ="33";
console.log(typeof score2); //string

let scoreinNumber =Number(score2); //here number is A class
console.log(typeof scoreinNumber);//number in smallcase

let adult =true;
console.log(typeof adult);
console.log(Number(adult)); //true=1,false=0

//string to number Conversion
let score3 ="acs1230"
console.log(typeof Number(score3));//number = it will v covert to number but value will be NaN
console.log(Number(score3)); //NaN i.e Not a Number

let score4 =null;
console.log(typeof Number(score4)); //it will be covert into number but the value will

console.log(Number(score4)); //NaN i.e Not aNumber

let score5 =undefined;
console.log(typeof Number(score5));
console.log(Number(score5));

let life=1;
life=Boolean(life)
console.log(life)//true
console.log(typeof life)//boolean

let life1="";
life1=Boolean(life1)
console.log(life1)//false
console.log(typeof life)//boolean
 
