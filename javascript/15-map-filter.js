let m1 = new Map();
m1.set("1", "India")
m1.set("2", "india")
m1.set("3", "US")
m1.set("4", "PAK")
m1.set("5", "pak")
m1.set({}, "pak") //{object}
m1.set("2", "us")  // override key value has cannot be duplicate
m1.set("anjali", "us")  // override key value has cannot be duplicate
// console.log(m1.get("2"));
// console.log(m1);
// console.log(m1.keys());
// console.log(typeof m1.keys()); //[Map Iterator] { '1', '2', '3', '4', '5', {}, 'anjali' }
console.log(m1.keys().next()); //1

   // for of 
   for(const i of m1){
    console.log(i);
   }

//destructing array of key values

//    for (const [i,j] of m1);
//    console.log(i,j);


// var map =new Map();
// map.set("1","india")
// map.set("2","us")
// map.set("3","india")
// map.set("4","us")
// map.set("5","PAk")
// console.log(map.get("map"));
// console.log(map);

// m1.forEach(printMe)

// function printMe(item) {
//     console.log(item);
// }

// const mycoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },

//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     }
// ]


// console.log(mycoding[2].languageFileName);
// mycoding.forEach((item, index) => {
//     console.log(item, index);
// })
// // check value in array greater than 5
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr5=[]
// //for using mapfilter
// arr3.filter((i)=>5).forEach((i)=>console.log(i))
// // const aar3=(arr3.filter((i)=>{
// //     return i>5==0
// // }));
// console.log(arr3.filter((i)=>{
//     return i%2==0
// }));

// // const arr5 = []
// // for (const i = 0; i < arr3.length; i++); {
// //     if (arr3[i] >= 5) { //1>=5
// //         arr5.push(arr3[i])
// //     }
// // }


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   console.log(books.filter((bk)=>bk.genre =="History"));
//   console.log(books.filter((books)=> books.publish<=1999 & books.edition==2007));

//   //chaining of maps and filter

//   const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//   // const newNums = myNumers.map( (num) => { return num + 10})

//   const newNums = myNumers
//                   .map((num) => num * 10 )
//                   .map( (num) => num + 1)
//                   .filter( (num) => num >= 40)

//   console.log(newNums);




