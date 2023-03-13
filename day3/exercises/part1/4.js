'use strict';

let a = 10;
let b = '10';

let arg1 = (a === +b);
let arg2 = (typeof(a) === typeof(+b));
let arg3 = (a !== b);
console.log(arg1);
console.log(arg2);
console.log(arg3);

let c = 'string1';
let d = 'string22';

let arg4 = (c === d) ? true : false;
/* eslint-disable no-constant-condition*/
let arg5 = 0 ? true : false;
/* eslint-enable no-constant-condition */
let arg6 = (c.length === 10) ? true : false;

console.log(arg4);
console.log(arg5);
console.log(arg6);

// Last Edit : 2023-02-24 14:06:15
