// Higher order array loops

//for of
//["", "", ""]
//[{},{},{}]

const arr = ["Mansi","Princy","Muskan"]

for (const num of arr) {
  console.log(num); 
}
/*
Mansi
Princy
Muskan
*/

const greetings = "Hello Man!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);  
}
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is M
Each char is a
Each char is n
Each char is !
*/

// Maps
//collection of key value pairs, unique value
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")
console.log(map);

for (const [key,value] of map) {
   console.log(key, ':-',value);
    
}
