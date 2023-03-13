'use strict';

const PI = Math.PI;
const E = Math.E;
/* creates a number between 0 and 0.999999999999999... */
const randNum = Math.random();

console.log(typeof(PI), PI);

/* 3 */
console.log(Math.round(PI));

/* 3 */
console.log(Math.floor(PI));

/* 4 */
console.log(Math.ceil(PI));

/* returns the minimum value which is 0 */
console.log(Math.min(3, 5, 0, 1, 2));

/* returns the maximum value which is 5 */
console.log(Math.max(3, 5, 0, 1, 2));

/* creates a random number between 0 and 10 */
console.log(randNum * 11);

/* absolute value */
console.log(Math.abs(-8));

/* square root */
console.log(Math.sqrt(100));

/* power, 2 raised by 3 = 8 */
console.log(Math.pow(2, 3));

/* 2.718... */
console.log(+E.toFixed(3));


/* random number generator */
function randomFloatGenerator(min, max)
{
	return +((Math.random() * (max - min)) + min).toFixed(3);
}

/* generates a number between 1 and 10 */
console.log(randomFloatGenerator(1, 10));

// Last Edit : 2023-02-24 14:03:03
