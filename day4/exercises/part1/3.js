'use strict';

function comparison(a, b)
{
	if (a > b)
	{
		return ('a is greater than b');
	}
	else if (a < b)
	{
		return ('a is less than b');
	}
	else
	{
		return ('equal values');
	}
}

let a = 10;
let b = 10;

console.log(comparison(a, b));

// console.log(`${( a < b ) ? 'a is less than b' : 'a is greater than b'}`);

// Last Edit : 2023-02-24 14:19:38
