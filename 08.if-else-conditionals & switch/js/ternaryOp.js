console.log(age ==19? 'age is 19': 'age is not 19');

// program to check pass or fail
let marks = prompt('enter your marks:');
// check the condition
let result = (marks>=40)? 'pass':'fail';
console.log(`you ${result} the exam.`);

let age = 15;
let result1 =(age>=18)? "You are eligible to vote.":"You are noy eligible for vote"
console.log(result1);

// program to check if number is positive, negative or zero
let a = 3;
let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);