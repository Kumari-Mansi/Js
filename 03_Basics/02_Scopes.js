// block scope and global scope

// var c = 200
let a = 300
if(true){
    let a = 10;
    const b = 20;
   // var c = 30
    console.log("Inner value of a ",a) 
}
//console.log(b) //error
console.log(a)  //error
//console.log(c)   // 30 thats why var should be avoided

// { } it is called the scope of the program e.g in if else and functions