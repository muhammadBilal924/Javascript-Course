// let i = 10;
// do {
//     console.log(i)
// }
// while (i < 10) {
//     console.log()
// }



// let k = 0;
// do {
//     if (k === 7) {
//         continue;
//     }
//     console.log(k + 1);
//     k += 1;
// } while (k < 10);
// console.log('done');


// Array.forEach(function (elements,index,array) {
//     console.log(elements); 
// });


let obj = {
    name: 'Bilal Khan',
    age: 19,
    type: 'Dangerouse',
    os:'Ubuntu'
}
for (let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`)
    }
console.log('done');