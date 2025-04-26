// let myName = "Piyush     "
// console.log(myName.truelength);
// i want a method in which true length is identified

let myHeros = ["Papa","Su"]

let heroPower={
    Papa:"Silence",
    Su:"Words",

    getPower:function(){
        console.log(`Bhaiya's power is ${this.Su}`);
        
    }
}
Object.prototype.mansi=function(){
    console.log(`mansi is present in all objects`);
    
}
Array.prototype.heyMons=function(){
    console.log(`Mansi wishes Namaste`);
    
}


myHeros.mansi()
myHeros.heyMons()
//heroPower.heyMons() //heroPower.heyMons is not a function
heroPower.mansi()

const user={
    name:"Mansi",
    email:"mansi.com"
}

const teacher = {
    teach:true
}
const assistant={
    isAvail:false
}
const support={
    makeassignment:'JS assignment',
    fullTime:true
}
teacher.__proto__=user

// modern syntax
Object.setPrototypeOf(support,teacher)

let ammu = "Manas     "
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
    

}
ammu.truelength()
