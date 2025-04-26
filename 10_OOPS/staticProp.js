class user{
    constructor(username){
        this.username=username;
    }
    loginMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `142`
    }
}
const mansi = new user("Mansi")
// console.log(mansi.createId());

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new teacher("IPhone","iphone.com")
console.log(iphone.createId);
iphone.loginMe()
