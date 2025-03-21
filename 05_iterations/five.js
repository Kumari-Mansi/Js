// forin loop

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'Python',
    swift: 'Swift by apple'
}
for (const key in myObject) {
   console.log(`${key} is shortcut for ${myObject[key]}`);

}
const lan = ["C","C++","Java","python"]
for (const key in lan) {
   console.log(key);
   
}