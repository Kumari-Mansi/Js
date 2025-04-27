const myArr = []
//%DebugPrint(myArr)

/*
array is of 2 types in Js
1.continuous
2.Holey

optimization in Js
1. SMI(small integer)
2. Packed element
3. Double (float,String,function)

*/

const arrtwo = [1,2,3,4,5,6]
// Packed SMI Elements(continuous)

arrtwo.push(1.5)
// packed Double Elements

arrtwo.push('7')
// Packed Elements

arrtwo[10]=11
// Holey elements

console.log(arrtwo);
console.log(arrtwo.length);
console.log(arrtwo[18]);

//bound check
//hasOwnProperty(arrtwo,9)
// hasOwnProperty(arrtwo.prototype,10)
//hasOwnProperty(Object.prototype,10)
// holes are very expensive in Js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

let arrFour = new Array(3)
// just 3 holes .Holey_SMI_Elements
arrFour=[2,4,6,8]
arrFour[0]='1'//holyElements
// console.log(arrFour[0]);
arrFour[1]='2'//holyElements
arrFour[2]='3'//holyElements

const arrFive=[]
arrFive.push('1') // Packed elements
arrFive.push('2') // Packed elements
arrFive.push('3') // Packed elements
arrFive.push('4') // Packed elements

const arrSix = [1,2,3,4,5]
arrFive.push(Infinity)
// console.log(arrSix[5]);
