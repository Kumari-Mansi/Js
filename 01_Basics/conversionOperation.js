// ************************************Conversions***************************************

let score = "Kumar";
// console.log(typeof score)  //string
// console.log(typeof (score))  //string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)  //number
// console.log(valueInNumber)   //NaN

/*
"33" => 33
"33abc" => NaN
true => 1 , false => 0
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)  //true

let a = 33
let b = String(a)
//console.log(typeof b)  // string



// ************************************Operations***************************************

let value = 10;
let negValue = -value
console.log(value)
console.log(negValue)

let x = 2
let y = 19
console.log(x*y)
console.log(y/x)
console.log(y+x)
console.log(y-x)
console.log(y**x)
console.log(y&x)
console.log(y|x)
console.log(y%x)

let str1 = "Hello "
let str2 = "Mansi"
let str3 = str1+str2
console.log(str3)

console.log(1 + "2")
console.log("1" + 2)
console.log("1" + "2")
console.log(1 + "2"+ 2)
console.log(1 + 2+ "2")
console.log((3+4)*5%3)
console.log(true)
console.log( +true)
console.log(+false)

let num1,num2,num3
num1=num2=num3=2+5
console.log(num1)

let counter=100
counter++
console.log(counter)

let m = 10;
m++
console.log(m)  //11
++m
console.log(m)  //12