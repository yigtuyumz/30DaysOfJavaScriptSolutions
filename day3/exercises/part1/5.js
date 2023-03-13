'use strict';

console.log(4 > 3);				// true
console.log(4 >= 3);			// true
console.log(4 < 3);				// false
console.log(4 <= 3);			// false
console.log(4 == 4);			// true
console.log(4 === 4);			// true
console.log(4 != 4);			// false
console.log(4 !== 4);			// false
console.log(4 != '4');			// false
console.log(4 == '4');			// true
console.log(4 === '4');			// false
/*
	Find the length of python and jargon and make a falsy comparison statement.
*/
let a = 'python';
let b = 'jargon';

console.log(a.length);
console.log(b.length);

let arg7 = (a.startsWith('p') && b.startsWith('p')) ? true : false;
console.log(arg7);

// Last Edit : 2023-02-24 14:07:24
