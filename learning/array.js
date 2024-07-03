const array= [1,2,3,4,5,6];

const myArr = new Array(22, 11, 33);

array.push(7)
array.push(8)
array.push(9)
// console.log(array);
array.pop();
array.pop();
array.pop();
// console.log(array);
array.unshift(19);
// console.log(array);
array.unshift(11);
// console.log(array.includes(8));
// console.log(array);
// console.log(array.indexOf(8));
// console.log(array);
 let hero = array.join();
// console.log(typeof hero);
// console.log("A", array);
const myArray = array.slice(2,5);
// console.log(myArray);
//  console.log("B ", array);

const name = array.splice(2,5)
// console.log("C", name);
const heros= ['Ram','Laxman','Sita', 'Hanuman' ];
const place = ['Jaipur', 'Bangalore', 'Delhi', 'NCR'];
// heros.push(place);

// console.log(heros[4][2]);
const allHeros= heros.concat(place);
// console.log(allHeros);
const all_heros= [...heros, ...place];
// console.log(all_heros);

const numArray = [1, 2, 3, [4,5,6,[7,8,9], 10, 11 ], [12, 13, 14, 15]];

const numNewArray = numArray.flat(Infinity);
// console.log(numNewArray);

// console.log(Array.isArray("sush")); 
// console.log(Array.from("sush")); 
console.log(Array.from({name:"sush" })); 

let num1 = 1;
let num2 = 2;
let num3 = 3;
console.log(Array.of(num1, num2, num3));

