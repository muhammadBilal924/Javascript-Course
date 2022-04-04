console.log('this is tut 16');
let element = document.createElement('li');

// add a class to the li element
element.className = 'childul';
element.id = 'createdli';
 element.setAttribute('title','mytitle');

let ul = document.querySelector('ul,this');
// ul.appendChild('element');
console.log(ul);
console.log(element);