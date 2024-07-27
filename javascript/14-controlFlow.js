// const  balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");
// if (balance<500){
//     console.log("less than 500");

// }
// else if (balance <750)
// {
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 750");
//  } else {
//     console.log("less than 1200");
//  }


// task 
//  function sum(n){
//  total=0
//  for(let i=1; i<=n;i++){
//     // sum += i;
//     total += i;
//  }
// //  return sum;
//  return total;
//  }
//  let n=5;
//  console.log(sum(n));

//2.task/...............
const myArray = [1, 5, 4, 5, 6, 4, 2, 3]
function occurence(arr, y) {
   let count = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] == y) {
         count++;
      }
   }
   return count;
}
console.log(occurence(myArray, 5));
