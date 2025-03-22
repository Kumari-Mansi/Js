const myNums = [1,2,3,4,5,6,7,8,9,10]
const nums = myNums.map((num)=>{return num+10})
console.log(nums);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

const number = myNums
               .map((num)=>num*10)
               .map((num)=>num+1)

console.log(number)
/*
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/

const number1 = myNums
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num>40)

console.log(number1)
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
  
*/
const number2 = myNums
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num%2!=0)
               .filter((num)=>num>40 && num<90)

console.log(number2)
// [ 41, 51, 61, 71, 81 ]