console.log('We ar in tute7.js and lets discuss about array');
const fruits = ["Mango", "Orange", "Apple"];
let marks = [43, 33, 56, 84, 35];
const mixed = [43, 'str', ["mango", "Orange"]];

console.log(fruits[1]);
console.log(mixed);
console.log(marks);
//  console.log(arr);
console.log(Array.isArray('Bilal'));
// arr[1] = 'Bilal';
// console.log(arr);

marks.splice(1, 3);
console.log(marks);
 
let marks2 = [1, 2, 3, 4, 5]
marks = marks.concat(marks2);
console.log(marks);