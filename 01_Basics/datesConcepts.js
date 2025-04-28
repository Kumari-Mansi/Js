let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(typeof myDate)
/*
2025-04-28T07:24:50.771Z
Mon Apr 28 2025 07:24:50 GMT+0000 (Coordinated Universal Time)
Mon Apr 28 2025
2025-04-28T07:24:50.771Z
4/28/2025
4/28/2025, 7:24:50 AM
2025-04-28T07:24:50.771Z
object*/

console.log();


let mycd = new Date(2025,4,8)
console.log(mycd.toDateString())
console.log(mycd.toLocaleDateString())
console.log(mycd.toLocaleString())
/*
Thu May 08 2025
5/8/2025
5/8/2025, 12:00:00 AM
*/

console.log();


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycd.getTime())
console.log(Math.floor(Date.now()/1000))
/*
1745825090792
1746662400000
1745825090
*/

console.log();


let newdate = new Date()
console.log(newdate.getHours())
console.log(newdate.getMonth())
console.log(newdate.getFullYear())
console.log(newdate.getMinutes())
console.log(newdate.getDate())
console.log(newdate.getDay())
/*
7
3
2025
24
28
1
*/

// use of interpolation in describing the date
//console.log(`${newdate.getDay()} and the time ${newdate.getTime()}`)