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
