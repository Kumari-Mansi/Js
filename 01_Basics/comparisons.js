console.log(2>1)
console.log(2>11)
console.log(21==1)
console.log(22>21)
console.log()
/*
true
false
false
true
*/


console.log("2">1)
console.log("02">1)
/*
true
true*/

console.log()
console.log(null>=0)
console.log(null<0)
console.log(null==0)
console.log(null!=0)
/*
true
false
false
true
*/

console.log()
console.log(undefined>=0)
console.log(undefined<0)
console.log(undefined==0)
console.log(undefined!=0)
/*
false
false
false
true
*/

console.log()
console.log(null>=undefined)
console.log(null<undefined)
console.log(null==undefined)
console.log(null!=undefined)
console.log(null==0);
/*
false
false
true
false
false
*/


console.log()

// strict check ===
console.log("2"===2)  // false