console.log("Hello world")

let firstName // definiera
firstName = "Jens" // tilldelar ett värde
let lastName = "Andreasson" // definiera och tilldelar ett värde, deklarera
let num = 23
console.log(typeof(num))

const NAME = "Stina"
// NAME = "Frasse" Nej, kan inte assigna en constant
console.log(NAME)
let i;
for (let i = 0; i < 10; i++) {
    const NAME = "Sture"
    console.log(NAME)
    var bosse = "tuff"
}
console.log(bosse)
var skola = "NTI"
console.log(skola)

let a = "Jens" // string
let b = 'Jens' // string rekommenderas
let c = `Mitt namn är ${a}` // string med template literals
let d = 'Mitt namn är ' + b // konkatenering
let e = 12 // num
let f = 16.7 // num
let g = true // boolean
let h = false

console.log(c, e, g)


