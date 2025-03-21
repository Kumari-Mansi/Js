// for loops
for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element==8) {
        console.log("8 is the best number");
        
    }
    console.log(element);
}

for (let i = 1; i <=10; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <=10; j++) {
   //console.log(`Inner loop value : ${j} and outer loop value : ${i}`);
   console.log(i+'*'+j+' = '+i*j);
  }
}

let arr = ["Aryan","Piyush","Rishabh"]
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// Break and Continue
for (let i = 1; i <=10; i++) {
    if (i==5) {
        console.log(`detected 5`);
        break
       }
   console.log(`value of i is : ${i}`);
    
}

for (let i = 1; i <=10; i++) {
    if (i==5) {
        console.log(`detected 5`);
       continue
       }
   console.log(`value of i is : ${i}`);
    
}
