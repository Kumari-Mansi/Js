function setuserName(username){
    // complex db calls
    this.username=username
    console.log("called");
    
}

function createUser(username,email,password){
    setuserName.call(this,username)
    this.email=email
    this.password=password
}
const print = new createUser("Princy","princy102gmail.com","1010")
console.log(print)