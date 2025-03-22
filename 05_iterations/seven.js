
// Use of filter

const code = ["Java", "Python","C","JavaScript"]
const values = code.forEach((item)=>{
    console.log(item);
})
console.log(values);
/*
Java
Python
C
JavaScript
undefined
*/

const arr = [1,2,3,4,5,6,7,8,9,10]
const num = arr.filter((num)=>num>4)
console.log(num);         // [ 5, 6, 7, 8, 9, 10 ]

const newNums = []
arr.forEach((num)=>{
    if(num>4)
{
    newNums.push(num)
}})
console.log(newNums);   //  [ 5, 6, 7, 8, 9, 10 ]

const books = [
    {title:'Book1',genre:'Fiction',publish:1892,edition:2001},
    {title:'Book2',genre:'Non-Fiction',publish:1992,edition:2005},
    {title:'Book3',genre:'History',publish:1999,edition:2009},
    {title:'Book4',genre:'Science',publish:2002,edition:2011},
    {title:'Book5',genre:'Fiction',publish:2005,edition:2020},
];

const user1 = books.filter((bk)=>bk.genre==='Fiction')
console.log(user1);
/*
[
  { title: 'Book1', genre: 'Fiction', publish: 1892, edition: 2001 },
  { title: 'Book5', genre: 'Fiction', publish: 2005, edition: 2020 }
]
*/
const user2 = books.filter((bk)=>{return bk.publish>=2000})
console.log(user2);
/*
[
  { title: 'Book4', genre: 'Science', publish: 2002, edition: 2011 },
  { title: 'Book5', genre: 'Fiction', publish: 2005, edition: 2020 }
]
*/
