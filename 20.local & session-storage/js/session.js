console.log('this is tute 20');
let impArray = ['adrak','piaz','bindi',];

// add a key-value pair inside local storage
localStorage.setItem('name','Bilal')
localStorage.setItem('name','Sufyan')


// clear the entire local storage
// localStorage.clear();
let name = localStorage.getItem('name');
name = JSON.parse(localStorage.getItem('sabzi'));
console.log(name);

console.time('this is a time');
console.warn('This is a warning');
console.error('this is a error');
console.log('My name is Bilal Khan');
console.assert('this is a asserts');
console.table('this is a table');
console.timeEnd('this is a timeEnd');