const user = {
    userName:"Soni",
    price:99,

    welcomeMessage:function(){
        //console.log(`${this.userName}, Welcome to this website dear`);
        //console.log(this); //current context

        /*
        {
  userName: 'Soni',
  price: 99,
  welcomeMessage: [Function: welcomeMessage]
}
  {
  userName: 'Kabita',
  price: 99,
  welcomeMessage: [Function: welcomeMessage]
} 
  */
    }
}

user.welcomeMessage()
user.userName="Kabita"
user.welcomeMessage()

//console.log(this); //{}
// in browser window object

// function sam(){
//     let name = "Sam"
//     console.log(this.name);
    
// }
// sam()  // undefined


// const sam = function(){
//     let name = "Sam"
//     console.log(this.name);
// }


// Arrow function
const sam = () => {
    let name = "Sam"
    console.log(this.name);
}
//sam()  // undefined

const addTwo= (num1 , num2) =>{
  return num1+num2
}
//console.log(addTwo(3,4));  //7

//implicit return
// no need to use curly braces and return statement
// const add = (num1,num2) => num1+num2 

const add = (num1,num2) => ({username:"Mansi"})
console.log(add(5,6));