//arrays

const arr = [1,2,3,4,5]
console.log(arr)  //[ 1, 2, 3, 4, 5 ]

const arr2 = new Array(1,'a',3,"Anu",5)
console.log(arr2)  //[ 1, 'a', 3, 'Anu', 5 ]

//Arrays methods
arr.push(8) 
console.log(arr) //[ 1, 2, 3, 4, 5, 8 ]

arr2.pop()
console.log(arr2)  //[ 1, 'a', 3, 'Anu' ]

arr.unshift(10)
console.log(arr) 
/*
[
    10, 1, 2, 3,
     4, 5, 8
  ]
*/
arr.shift()


//QnA from arrays
console.log(arr.includes(2)) //true
console.log(arr.indexOf(20)) //-1

console.log(arr.indexOf(5)) // 4

const newa = arr.join()
console.log(arr) // [ 1, 2, 3, 4, 5, 8 ]
console.log(newa)  // 1,2,3,4,5,8
console.log(typeof newa)  //string

// slice, splice 
console.log("A ",arr) //  A  [ 1, 2, 3, 4, 5, 8 ]
const myn1 = arr.slice(1,3)  
console.log(myn1)  // [ 2, 3 ]
console.log("B ",arr)   // B  [ 1, 2, 3, 4, 5, 8 ]
const myn2 = arr.splice(1,3)  
console.log(myn2)  // [ 2, 3, 4 ]
console.log(arr)  // [ 1, 5, 8 ]