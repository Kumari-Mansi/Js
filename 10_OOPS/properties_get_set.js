function user(password,email){
this._email=email
this._password=password

Object.defineProperty(this,'email',{
    get:function(){
        return this._email.toUpperCase()
    },
    set:function(value){
        this._email=value
    }
})
Object.defineProperty(this,'password',{
    get:function(){
        return this._password.toUpperCase()
    },
    set:function(value){
        this._password=value
    }
})
}
const mansi=new user("abc","abc@google.com")
console.log(mansi.email);
console.log(mansi.password);

