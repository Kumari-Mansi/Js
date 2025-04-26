const user = {
    username: "Mansi",
    loginCount: 1,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Get the user deatails from the database");
       // console.log(`Username: ${this.username}`); //Username: Mansi
        console.log(this);
        
    }
}
//console.log(user.username);
// console.log(user.getUserDetails());
// /*
// {
//     username: 'Mansi',
//     loginCount: 1,
//     signedIn: true,
//     getUserDetails: [Function: getUserDetails]
//   }
//   undefined
// */
// console.log(this); {}

function User(username,loginCount,isLoggedIn){
this.username=username
this.loginCount=loginCount
this.isLoggedIn=isLoggedIn

this.greeting = function(){
    console.log(`Welcom ${this.username}`);
    
}
//return this
}

const userOne = new User("Mansi",8,true)
const userTwo = new User("Soni",10,true)
console.log(userOne.constructor);
console.log(userTwo);

