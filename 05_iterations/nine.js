const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc,currval){
    return acc+currval
},0)
console.log(myTotal); //6

const Total = myNums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    
    return acc+currval
},0)
console.log(`After computation the value is : ${Total}`); 

/*
acc:0 and currval:1
acc:1 and currval:2
acc:3 and currval:3
After computation the value is : 6
*/

const value = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(value) // 6

const shoppingCart = [
   {
    itemName:"js course",
    price: 999
   },
   {
    itemName:"Py course",
    price: 1999
   },
   {
    itemName:"java course",
    price: 2999
   },
]
const priceToPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(priceToPay);  //5997
