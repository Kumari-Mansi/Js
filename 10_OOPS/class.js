// // everything is after ES6

// class user {
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//       return `${this.password}abc`  
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const code = new user("rishu","rishu2@gmail.com","232")
// console.log(code.encryptPassword());
// console.log(code.changeUsername());

// behind the scene 
function person(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
person.prototype.encryptPassword=function(){
    return `${this.password}abc`  
}
person.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const path = new person("Hangkie","hank12@gmail.com","192")
console.log(path.encryptPassword());
console.log(path.changeUsername());