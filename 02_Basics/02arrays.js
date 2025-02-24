const marvel_heros = ["Thor","Ironman","spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)  // [ 'Thor', 'Ironman', 'spiderman', [ 'Superman', 'Flash', 'Batman' ] ]


console.log(marvel_heros.concat(dc_heros)) // [ 'Thor', 'Ironman', 'spiderman', 'Superman', 'Flash', 'Batman' ]

const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros)

const another_array = [1,2,[3,4,5],6,7,[8,9,[10,11,[13,14,15],16]]]
const feasible = another_array.flat(Infinity)
console.log(feasible)

//data scrapping
console.log(Array.isArray("Manas"))  // false
console.log(Array.from("Manas"))  // [ 'M', 'a', 'n', 'a', 's' ]
console.log(Array.from({name:"Manas"})) // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]