// array =multiple datatype as a list 
//it is dynamic in size
// const myArr = [4, 54, 50, 65, 48, 75]
// myArr[2]=6
// console.log(myArr);

// const newArr=myArr;
// //newArr will have a shallow copy 
// //myArr and newArr will share the sam reference
// newArr[0]=10;
// console.log(newArr[0])
// const myHeors = ["shaktiman", "naagraj",1 , 2,true]
const myArr = new Array(1, 2, 3, 4)
console.log(myArr[3]);
// Array methods
// const myArr = [4, 54, 50, 65, 48, 75]
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //=add element at the 0th index and shift rest to right/ not optimized
// myArr.shift()    //=remove oth index and shift left
console.log(myArr);
console.log(myArr.includes(4));
console.log(myArr.indexOf(65));

const newArr = myArr.join() //=Converts the array in String
console.log(newArr);


let myarr=[1,1,2,3,4,5,6]
removed2 =myarr.splice(5,6);
console.log(myarr);
console.log(removed2);
  ritika=myarr.splice(2)
 console.log(myarr);
 console.log(ritika);
 


//insert 'a' and 'b'
//  myarr.splice( 1,4,"a","b")
//  console.log(myarr);

//  ritu=myarr.splice(3,0,"a","b","11")
// console.log(myarr);
// console.log(ritu);

// const months =['jan','march','april','may']
// months.splice(1,0,'feb');
// console.log(months);

let arr3=[1,2,3]
let arr4=[4,5,6]
arr3.push(arr4)
console.log(arr3);
 suri= arr3.concat(arr4)
console.log(suri);

//spread operator 

// group=[...arr3,...arr4]
//  console.log(group);

 //arr=[1,2,3,[4,5,6]]
//  arr[3]=[4,5,6]
//  arr[3][1]=5
//arr[3][2]=6,
// arr=[4,5,6,[1,2,3,[7,8,9]]]

let rt =[1,2,3,"fruit",5]
console.log(Array.isArray(rt));

// var str="developer hi" 
// console.log(Array.from(str)); // character array 
    // 'd', 'e', 'v', 'e',
    // 'l', 'o', 'p', 'e',
    // 'r', ' ', 'h', 'i']

// let score1=100
// let score2=200
// let score3=300
// let arrayFromInt =Array.of(score1,score2,score3)
// console.log(arrayFromInt);

// let a=1
// console.log(Array.of(a,1,2,3,4,4));
// console.log(Array.of("fruits","mango"));

