const code = ["js","c","Ruby","Python"]
code.forEach(function (val){
    console.log(val);
})
/*
js
c
Ruby
Python
*/

code.forEach((item) => {
    console.log(item);
})
/*
js
c
Ruby
Python
*/

function print(item){
    console.log(item);
}
code.forEach(print)
/*
js
c
Ruby
Python
*/

code.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
/*
js 0 [ 'js', 'c', 'Ruby', 'Python' ]
c 1 [ 'js', 'c', 'Ruby', 'Python' ]
Ruby 2 [ 'js', 'c', 'Ruby', 'Python' ]
Python 3 [ 'js', 'c', 'Ruby', 'Python' ]
*/

const mycode = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

mycode.forEach((item)=>
{
    console.log(`language is :- ${item.languageName} and its file type is :- ${item.languageFileName}`);
    
})


