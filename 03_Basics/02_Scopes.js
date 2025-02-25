// ++++++++++++++++++++++++++++++PART-2+++++++++++++++++++++++++++++++++++++


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


// ++++++++++++++++++++++++++++++PART-2+++++++++++++++++++++++++++++++++++++

function one(){
    const username="Madhu"

    function two(){
        const werbsite = "U-Tube"
        console.log(username)
    }
    //console.log(website)
    
    two()
}
//one()


if(true){
    const username = "Soni"
    if(username==="Soni"){
        const website = " youtube"
        console.log(username+" studys from " +website);
        
    }
    // console.log(website)  // ReferenceError: website is not defined
}
// console.log(username);  // ReferenceError: username is not defined

// +++++++++++++++++++++++++++Intresting++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
   return num+1 
}

const addTwo = function(num){ // addTwo is known as expressions
    return num+2
}
console.log(addTwo(5));
