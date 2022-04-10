console.log('wellcome to tut with 14');
// get the parent element
/*
 let heading = document.querySelector("#heading");
let heading = document.querySelector("#links")
console.log(heading.parentNode)
*/

// sibling
/*
let activeElement = document.querySelector(".active");
// let nextSibling = activeElement.nextElementSibling;
 let prevSibling = activeElement.previousElementSibling;
console.log(activeElement);
*/

// cildren
let menu = document.getElementById("links");
let firstChild = menu.firstElementChild;
let lastChild = menu.lastElementChild;
let allChild = menu.allChild;
console.log(menu);