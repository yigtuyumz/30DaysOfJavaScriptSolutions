'use strict';

let var1 = 'string variable';
let var2 = true;
let var3;		/* undefined */
let var4 = 5;
let var5 = null;

console.log(typeof(var1));
console.log(typeof(var2));
console.log(typeof(var3));
console.log(typeof(var4));
console.log(typeof(var5));

/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

var a1;
var a2;
var a3;
var a4;

var b1 = 'some value';
var b2 = 'some other value';
var b3 = false;
var b4 = 42;


var firstName = 'Volkan';
var lastName = 'Konak';
var isMarried = false;
var country = 'TR';
var age = 100;

/* eslint-disable no-redeclare */
var firstName2 = 'Volkan', lastName2 = 'Konak', isMarried2 = true, country2 = 'EN', age = 1000;
/* eslint-enable no-redeclare */

/* eslint-enable no-unused-vars */

var myAge = 25;
var yourAge = 30;
/* eslint-enable no-var */

console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);

// Last Edit : 2023-02-24 02:41:17
