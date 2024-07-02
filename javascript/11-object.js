//singleton objects=only one instance of the class can be possible.
//for eg= single database object is used throughtout the program
//object literals
const users={
    name: "Ritika", //entries
    age: 23,
    email: "ritikasuri225@gmail.com",
    isAdult:false,
    loggedInDays:["monday","tuesday","wednesday","thu","fri"]
}

//two types of execute program 1. is  . ,[]
console.log(users.name);
console.log(users.age);
console.log(users.loggedInDays[4]);
console.log(users.loggedInDays.length);
console.log(users.loggedInDays.slice(1));
console.log(users.loggedInDays.splice(4));

console.log(users["name"]);
console.log(Object.keys(users)); // returns a array of all the keys
console.log(Object.values(users)); // returns a array of all the values
console.log("nnnn",Object.entries(users)[2,1]);
console.log(Object.entries(users)[2][1]);
console.log(Object.entries(users)[4][1][0]);

console.log(users.hasOwnProperty("name"));

// defining a symbol and use as key  inside object

const mysym=Symbol() //or =symbol("key1223")
 const users1={
    name: "Ritika", //entries
    [mysym]:"key222",
     age: 21,
    email: "ritikasuri225@gmail.com",
    isAdult:false,
   loggedInDays:["monday","tuesday","wednesday","thu","fri"]
}
console.log(users1);
console.log(users1[mysym]);
console.log(typeof users1[mysym]); 

//editing the value inside the object

 users.email ="xyz@gmail.com"
 console.log(users.email);
 console.log(users);
//freeze the object by making user1 immutable
 Object.freeze(users1)
 users1.age=99;
 console.log(users1.age);
 console.log(users1);


 const app2user ={
    email:"ritu@gmail.com",
     id: "1245ree",
     fullname:{
        userfullname: {
            firstname:"ritu",
            secondname: "suri"
        
        }
     }
 }
 // how to merge array 
  const obj1={ 1:"a",2:"b"}
  const obj2={3:"c",4:"d"}
  const obj3 ={obj1,obj2}
  console.log(obj3);
  
  const obj4={...obj1,...obj2}
  console.log(obj4);

  //how to assign object 
  const obj5= Object.assign({},obj1,obj2)
  console.log(obj5);



