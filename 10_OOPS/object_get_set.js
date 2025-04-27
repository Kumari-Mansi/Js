const user ={
    email:"raja27@yahoo.ac.in",
    _password:"rajag",


get email(){
    return this._email.toUpperCase()
},

set email(value){
    this._email=value
},
get password(){
    return this._password.toUpperCase()
},

set password(value){
    this._password=value
}
}
console.log(user.email);
console.log(user.password);

// const naam = Object.create(user)
// console.log(naam._email);
// console.log(naam.password);

