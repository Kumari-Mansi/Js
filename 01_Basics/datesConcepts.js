let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(typeof myDate)

let mycd = new Date(2025,4,8)
console.log(mycd.toDateString())
console.log(mycd.toLocaleDateString())
console.log(mycd.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycd.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate.getHours())
console.log(newdate.getMonth())
console.log(newdate.getFullYear())
console.log(newdate.getMinutes())
console.log(newdate.getDate())
console.log(newdate.getDay())

// use of interpolation in describing the date
//console.log(`${newdate.getDay()} and the time ${newdate.getTime()}`)