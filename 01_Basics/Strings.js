//Alternative (outdated syntax)

const name = "Soni "
const repo = 5
console.log(name+repo+" value")

// New (Better)syntax
console.log(`Hello my name is ${name} and i have ${repo} repository count`)

const gameName = new String("COD Game")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('e'))

const newString = gameName.substring(0,6)
console.log(newString)

const anotherString = gameName.slice(0,-6)
console.log(anotherString)

const str = "   Pragya "
console.log(str)
console.log(str.trim(0))

const url = "https://ram.com/sita%01aaodhaya"
console.log(url.replace('%01','-'))
console.log(url.includes('sita'))
console.log(url.split('/'))

