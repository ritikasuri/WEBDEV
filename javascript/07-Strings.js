let  str1="  hello-my - name-is-ritika     "
//str="ddffdfd"// in js string is mutable
console.log (str1);
// 1. trim()
let str2=str1.trim();
console.log(str2);
 // 2. repalce and replaceALL 
 console.log(str1.trim().replace("-"," ")); //replace only first occurence
 console.log(str1.trim().replaceAll("-"," "));//replace all occurence
//  console.log(str1) //doesn't make any chnages to original string
 //any string function returns a new string or an any object