class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
       return `${this._password}mansi`
    }
    set password(value){
        this._password=value
    }
}
const mansi = new user("mk@gmail.com","abc")
console.log(mansi.password);
console.log(mansi.email);


