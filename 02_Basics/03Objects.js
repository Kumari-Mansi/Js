// singleton (from constructors)
// Object.create

//symbols
const sym = Symbol("Key1")

// object literals
const jsuser = {
    name:"Heema",
    "full name":"Heema Rani",
    [sym]:"Mykey1",
    age: 19,
    location: "Pune",
    email:"heemarani24@gmail.com",
    isLoggedIn: false,
    lastLoggedD:["Monday","Thursday"]
}
console.log(jsuser.email)  // heemarani24@gmail.com
console.log(jsuser["email"])  // heemarani24@gmail.com
console.log(jsuser["full name"])  // Heema Rani
console.log(jsuser[sym])  // Mykey1

jsuser.email="heemarani134@google.com"
//Object.freeze(jsuser)
jsuser.email="heema56@microsoft.com"
console.log(jsuser)
/*
{
  name: 'Heema',
  'full name': 'Heema Rani',
  age: 19,
  location: 'Pune',
  email: 'heemarani134@google.com',
  isLoggedIn: false,
  lastLoggedD: [ 'Monday', 'Thursday' ],
  [Symbol(Key1)]: 'Mykey1'
}
  */

jsuser.greeting = function(){
    console.log("Hello Js User")
}
console.log(jsuser.greeting())  //Hello Js User
// it will throw errors if the object is freezed
// to remove the error make sure the obj is unfreezed

jsuser.greeting2 = function(){
    console.log(`Hello Js User, ${this["full name"]}`)
}
console.log(jsuser.greeting2())  // Hello Js User, Heema Rani