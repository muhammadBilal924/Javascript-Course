let element = document.createElement('li');
let text = document.createTextNode('I am  a gentle man');
element.className = 'child';
element.setAttribute('title', 'mytitle');
element.innerHTML = 'Hello is created by Bilal';
let ul = document.querySelector('ul.this');
// ul.appendChild(element);

// console.log(element);

let elem2 = document.createElement('h2');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById(fui));
myul.removeChild(document.getElementById('lui'));
let pr = elem2.hasAttribute('khan');
console.log(elem2, pr);


// creatElement
function fun() {
    const btn = document.createElement("button");
    btn.innerHTML = "click karo";
    // document.body.appendChild(btn);
    var element = document.getElementById('d1');
    var child = document.getElementById('p1');
    element.insertBefore(btn, child);
}
