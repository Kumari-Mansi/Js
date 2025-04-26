const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
console.log(Math.PI)
Math.PI=4
console.log(Math.PI);

const chai = {
    name:'Ginger chai',
    price:250,
    isAvail:true,

    orderChai:function(){
        console.log("Chai avi nhi bni hai, thode der me lati hun");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,'name',{
    writable:false,
   // enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for(let[key,value]of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }   
}