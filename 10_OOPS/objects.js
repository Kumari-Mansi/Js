// new keyword and its significance in js

function multiplyBy5(num){
    this.num=num
return num*5
}
multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    username.this=username
    this.score = score
}
createUser.prototype.increment=function(){
   this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`); //jis->this mtlb jisne score pucha hai uska bta do   
}
createUser.prototype.show=function(){
    console.log(`User is ${this.username}`);
    
}
const bhai = new createUser("Bhai",500)
const di = new createUser("Di",250)

bhai.printMe()
di.printMe()
bhai.show()
di.show()

/*
overview of new keyword

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/