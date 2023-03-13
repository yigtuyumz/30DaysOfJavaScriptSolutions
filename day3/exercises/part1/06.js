'use strict';

console.log(4 > 3 && 10 < 12);						// true
console.log(4 > 3 && 10 > 12);						// false
console.log(4 > 3 || 10 < 12);						// true
console.log(4 > 3 || 10 > 12);						// true
/* eslint-disable no-extra-boolean-cast */
console.log(!Boolean(4 > 3));						// false
console.log(!Boolean(4 < 3));						// true
/* eslint-enable no-extra-boolean-cast */
console.log(!(false));								// true
console.log(!(4 > 3 && 10 < 12));					// false
console.log(!(4 > 3 && 10 > 12));					// true
/* eslint-disable no-extra-boolean-cast */
console.log(!Boolean(4 === '4'));					// true
/* eslint-enable no-extra-boolean-cast */

/* there is no 'on' both dragon and python */
console.log(!('dragon'.endsWith('on', 6) && 'python'.endsWith('on', 6)));

// Last Edit : 2023-02-24 14:08:35
