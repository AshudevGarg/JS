const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// marvel_heros.concat(dc_heros) // (does not do anything)

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// push works like any thing push in arrray 
// contact combines two or more arrays. This method return a new array without modify any existing arrays

const all_new_heroes = [...marvel_heros,...dc_heros] //better option because add more arrays 
console.log(all_new_heroes) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("Ashudev")) //false
console.log(Array.from("Ashudev")) //[ 'A', 's', 'h', 'u', 'd', 'e', 'v' ]
console.log(Array.from({name:"Ashudev"}))//interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ]













