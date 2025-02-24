/*
Datatypes are basically divided into 2 types
1. Primitive DataType (Call by value)
These are of 7 types
It includes : String,Number,Boolean,null,undefined,symbol,BigInt

2. Non-Primitive Datatypes (Call by reference)
These are of mainly 3 types
arrays, objects, Functions

JavaScript is dynamically typed, meaning you do not need to declare variable types explicitly.
The type of a variable is determined at runtime based on the value assigned to it.

*/

let x = 10;    // x is a number
x = "Hello";   // Now x is a string (type changed dynamically)

const score = 100
const scroreValue = 100.9

const isLOggedIn = false
const outsideTemp = null
let userEmail
console.log(userEmail)

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id==anotherId)

const bigNumber = 12324564365326723612n
console.log(bigNumber)

// Arrays 
const heros = ["Papa", "Bhaiya","Su"]

//objects
let myobj={
    name:"Rani",
    age:23,
}

//Functions
const myFunction = function(){
    console.log("Hello Princy")
}

console.log(typeof bigNumber)  //BigInt
console.log(typeof id)
console.log(typeof anotherId)  //symbol

// +++++++++++++++++++++++++++++++Memory Management+++++++++++++++++++++++++++++++++++++
// stack memory => primitive dataTypes
// heap memory => non-primitive dataTypes

let myName = "Swati"
let othername = myName
othername = "Sarita"

console.log(myName) //Swati
console.log(othername) //Sarita

let userOne = {
    Email: "mymail12@gmail.com",
    upi: "User@ybl"
}
let userTwo = userOne
userTwo.Email="abc23@gmail.com"

console.log(userOne.Email) //mymail12@gmail.com
console.log(userTwo.Email)  //mymail12@gmail.com