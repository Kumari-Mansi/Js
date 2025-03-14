//  IIFE : immediately invoked function expression & to remove the global scope pollution and problems

(function write(){  // named iife
    console.log(`Database Connected`);
})(); // it terminate the first iife otherwise the second function will show errors

/*
first () => function definition
ending() => Execution call
*/

(()=>{  //Un-named iife
console.log("Arrow Function")
})();

(function code(name)  {
    console.log(`DB Connected to ${name}`);
    
})(`Rameshawaram`)