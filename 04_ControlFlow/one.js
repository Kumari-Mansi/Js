// if statements

/*
if(condition){
statements
}

>, <, =, ==, <=, >=, ===, !=, !==

*/

if(2==="2"){ // strict checking
    console.log('Executed')
}

const score = 500
if(score>400){
    const power = "Fly"
    console.log(`User power : ${power}`);
    
}

// console.log(`User power : ${power}`); due to scope

const balance = 1000
if(balance>500) console.log("pass"), console.log("fail"); //not a good practice so it's not recommended
if(balance>500) console.log("pass"); if (balance>56) console.log("fail");

if (balance<500) {
   console.log("less than 500"); 
}
else if (balance<750) {
    console.log("less than 750");  
}
else if (balance<900) {
    console.log("less than 900");  
}
else{
    console.log('Greater than 900');
    
}

const userLoggedIn = true
const debitCard = true
const loggedFromEmail = false
const loggedFromGoogle = true

if (userLoggedIn && debitCard) {
    console.log('Allow pay the fee');
}

if (loggedFromEmail && !(loggedFromGoogle)) {
    console.log('Acces allowed'); 
}


// Ternery Operators
// condition > true:false

const price = 100
price<=80?console.log("Less than 80"):console.log("More than 80");

