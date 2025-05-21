const myArr =[5,2,8,5,2];
console.log(typeof myArr);
console.log(myArr.length);
console.log(myArr.includes(2));//check 2 element include this array true or false 
console.log(myArr.indexOf(8));// what is the index of 8

console.log(myArr.push(4));
console.log(myArr.pop());
console.log(myArr.join());// array object to convert string 

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);// array =1,2
console.log("B ", myArr);//array = 0,1,2,3,4,5


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//array = 0,4,5
console.log(myn2);// array = 1,2,3


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros)

 console.log(marvel_heros);
 console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros) // "concat is the process off add two element in one element"
 console.log(allHeros);

// split process add n number of array in one array
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

// ---------------------------------------------------------------------------------
// arrayvitore array thakle thake jodi akta array te ante hoi tahole "flat" use korte hoi .
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting output is a empty string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// add 3 element in one array use "of"