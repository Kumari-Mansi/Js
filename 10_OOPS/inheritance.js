class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const call = new teacher("Rahul","rahulrana@hoogle.com","23562")
call.addCourse()

const dept = new user("Shalini")
dept.logMe()
console.log(call instanceof teacher);
