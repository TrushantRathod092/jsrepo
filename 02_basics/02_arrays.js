const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros[3][2]);

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// ... -> spread
const allNewHeros = [...marvel_heros, ...dc_heros]
// console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(1)
// console.log(real_another_array);
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Trushant"));
// console.log(Array.from("Trushant"));

// console.log(Array.from({name : "Trushant"})); //interesting case for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));