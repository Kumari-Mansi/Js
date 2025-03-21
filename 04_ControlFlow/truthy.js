// const userEmail = "rahul55@gmail.com"
const userEmail = ""
if (userEmail) {
  console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

/*
Falsy values include:
false, 0, -0, BigInt, "",null,undefined,NaN

Truthy values include:
"0", 'false', " ",[], {}, function(){}

*/

if (userEmail.length===0) {
  console.log("Array is empty")
}

// Nullish Coalescing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10
console.log(val1); //5

let val2 = 10??5
console.log(val2); //10

let val3 = null??10
console.log(val3);  //10

let val4 = null??null
console.log(val4);  //null

let val5 = 10??null
console.log(val5);  //10

let val6 = null??undefined
console.log(val6);  //undefined

let val7 = undefined??null
console.log(val7);  //null

var val8 = undefined??10
console.log(val8);

var9 = null??11??22
console.log(var9);

var10 = 1??null??2
console.log(var10);








