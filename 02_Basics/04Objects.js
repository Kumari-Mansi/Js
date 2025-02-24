//const tinderUser = new Object() // singleton object
const tinderUser = {}  // non singleton object
tinderUser.id = "132abs"
tinderUser.name = "Sumeer"
tinderUser.IsloggedIn = false

console.log(tinderUser)   // { id: '132abs', name: 'Sumeer', IsloggedIn: false }

const user = {
    email:"Suhana@google.com",
    name:{
        firstName:"Suhana ",
        lastName:"Sharama"
    }
}
console.log(user)
/*
{
  email: 'Suhana@google.com',
  name: { firstName: 'Suhana ', lastName: 'Sharama' }
}
  */

console.log(user.name.firstName)  // Suhana 

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = {obj1, obj2}
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3= Object.assign({} ,obj1,obj2)
// console.log(obj3)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2}
console.log(obj3)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id:1,
        name:"Ananaya",
        email:"ananyandas25@gmail.com"
    },

    {
        id:2,
        name:"Anmol",
        email:"anmolkumar215@gmail.com"
    },
    {
        id:3,
        name:"Aryan",
        email:"aryanmishra20@gmail.com"
    }
]
users[1].email
console.log(tinderUser)  // { id: '132abs', name: 'Sumeer', IsloggedIn: false }


console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'IsloggedIn' ]

console.log(Object.values(tinderUser)) // [ '132abs', 'Sumeer', false ] 

console.log(Object.keys(users))  // [ '0', '1', '2' ]
console.log(Object.values(users))
/*
[
  { id: 1, name: 'Ananaya', email: 'ananyandas25@gmail.com' },
  { id: 2, name: 'Anmol', email: 'anmolkumar215@gmail.com' },
  { id: 3, name: 'Aryan', email: 'aryanmishra20@gmail.com' }
]
*/

const course = {
    coursename:"js",
    price:"999",
    courseDuration:"10 hours"
}
const {courseDuration:d} = course
console.log(d)  // 10 hours

const navbar = ({company}) =>{
    //destructuring (react)
}

// json
// {
//  "name":"Himanshu",
//  "course":"jn",
//  "Price": "free"

// }