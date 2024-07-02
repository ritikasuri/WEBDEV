let a=3;
let neg_a=-a;
console.log(neg_a)


let b=999;
console.log( "the value of b is 2");
console.log("the value of b is",b);
//string interpolation
  console.log(`The value of b is ${b}`);

let str1="    hello     i  am   ritika     .    "; // trim only removes spaces from begning & ending 
console.log( "trimed str1===", str1.trim());
let trimed1= str1.trim()
let str2= "         abc  dev    ";
  let trimed2 =str2.trim();
         let str3=trimed1+trimed2;
         console.log("trimed concate===", str3);
         let str4 =str1+str2;
         console.log("without trimed str1==", str4);

         //IMPLICIT CONVERSION done BY NODE

         console.log("1"+2) //12
         console.log("1"+2+2) //122
         console.log(3+"1"+2) //312
         console.log(3+2+5+"1"+4) //1014

         let counter1=0;
         console.log(counter1);
         ++counter1; //pre increment ( counter =counter+1)
         console.log(counter1);//1
         counter1++;//post increment 1+1=2
         console.log(counter1); 
         vara =counter1++ //put the last valur]e of counter in counter then increase
          console.log(a); //2
         console.log(counter1);//3


 let counter=5;
 console.log(counter);
 --counter;
 console.log(counter);
 counter--;
 console.log(counter);
 vara = counter--
 console.log(a);
 console.log(counter);

 let c=3;
 ++c;
 console.log("v",c);
 console.log("j",++c);


 


