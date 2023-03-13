'use strict';

console.clear();
console.log('Script Start..\n');
// undefined
// if we don't assign a value to a variable, the value is undefined.
/* eslint-disable no-var */
var variableTest;
/* eslint-enable no-var */
console.log(variableTest);			// expected output : `undefined`
// null
// null means an empty value.
variableTest = null;
console.log(variableTest);			// expected output : `null`

// checking Data Types
console.log('\tChecking Data Types');
console.log(typeof('Yigit'));		// expected output : `string`
console.log(typeof(5));				// expected output : `number`
console.log(typeof(true));			// expected output : `boolean`
console.log(typeof(null));			// expected output : `object`
console.log(typeof(undefined));		// expected output : `undefined`


// declaring variables
console.log('\tDeclaring Variables');
let firstName = 'Yigit';
let lastName = 'Uyumaz';
let age = 255;
let isMarried = false;

/* eslint-disable no-unused-vars */
const PI = 3.14;
const gravity = 9.81;
/* eslint-enable no-unused-vars */


console.log(firstName, lastName, age, isMarried);
// variables can also be declared in one line, separated by comma.

let a = 0, b = 10, c = 100;
console.log(a, b, c);


///////////////////EXERCISES///////////////////////////////////////////////////

// comments can make code readable
// Welcome to 30DaysOfJavaScript
/* comments can make code readable, easy to reuse and informative */

// Last Edit : 2023-02-24 01:30:06
