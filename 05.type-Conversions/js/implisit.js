// numeric string used with + gives string types
let result;
result = '5' +3;
console.log(result);

result  = '8' + true;
console.log(result);

result = '3' + Number;
console.log(result);

result = '9' + undefined;
console.log(result);
 
result = '2' + null;
console.log(result);

//  numeric string used with -, /,*,% result number types

result = '4' - 2;
console.log(result);

result = '8' / 4;
console.log(result);

result = '6' * 2;
console.log(result);

result = '9' % 3;
console.log(result);

result = '4' + 9;
console.log(result);

// non-numeric String used with *,/ result to NaN

let result2;
result2 = 'hello'/'world';
console.log(result2);

result2 = '4' * 'hello';
console.log(result2);

// if boolean
let result3 = '6' - true;
console.log(result3);

let rule1 = '9' - false;
console.log(rule1);

