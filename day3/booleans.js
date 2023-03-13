'use strict';

/* all of them are TRUE */
let val1 = true;
let val2 = 'string';
let val3 = Number(13);

if (val1 && val2 && val3)
{
	console.log(true);
}


/* all of them are FALSE */

let val4 = 0;
let val5 = 0 * 213;
let val6;		/* undefined */
let val7 = NaN;
let val8 = false;
let val9 = '';

if (!(val4 && val5 && val6 && val7 && val8 && val9))
{
	console.log(false);
}

console.log('mango'.length === 'avocado'.length);		// false
console.log('mango'.length !== 'avocado'.length);		// true
console.log('mango'.length < 'avocado'.length);			// true
console.log('milk'.length === 'meat'.length);			// true
console.log('milk'.length !== 'meat'.length);			// false
console.log('tomato'.length === 'potato'.length);		// true
console.log('python'.length > 'dragon'.length);			// false

/* increment operators */

// pre-increment/decrement
let test = 0;
console.log(++test);
// post-increment/decrement
console.log(test--);

/* Ternary Operator */

let isHungry = false;

console.log(`${( isHungry ) ? 'You are hungry, you need to eat something.' : 'You are full, you can\'t eat more.'}`);

// Last Edit : 2023-02-24 14:04:13
