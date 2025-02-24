// console.log("M")
// console.log("A")
// console.log("N")
// console.log("A")
// console.log("S")

function name(){
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("A")
    console.log("S")
}
name()
/*
M
A
N
A
S
*/


// function sum(num1, num2){ // num1, num2 are parameters
//     console.log("Sum of 2 number is: ",num1+num2)
// }
// sum(10,7) // values passes for execution is argument

function sum(num1, num2){ // num1, num2 are parameters
// let result = num1 + num2
// return result 
return num1+num2
}
const result = sum(3,5)
console.log("Result : ",result);  // Result :  8

function user(name){
    if(name===undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${name} just logged in`
}
console.log(user("Priyank"))  // Priyank just logged in

function calculateprice(val1,val2,...num1){
    return num1
}
console.log(calculateprice(100,250,400,650,800))

const costumber1={
    name:"Rachna",
    price: 233
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)

}
//handleObject(costumber1)
handleObject({
    name:"Radha",
    price:999
}) // Username is Radha and price is 999

const arr = [100,200,300,400,500]
function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(arr)) // 400

console.log(returnSecondValue([1,2,3,4,5,6])) // 4