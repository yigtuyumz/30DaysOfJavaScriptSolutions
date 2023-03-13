'use strict';

function equation(x1, x2)
{
	let y1 = (2 * x1) - 2;
	let y2 = (2 * x2) - 2;

	return ((y2 - y1) / (x2 - x1));
}

function slope(x1, y1, x2, y2)
{
	return ((y2 - y1) / (x2 - x1));
}

/* comparing */

let x1 = 10;
let x2 = 20;
let y1 = 30;
let y2 = 40;

let eq1 = equation(x1, x2);
let eq2 = slope(x1, y1, x2, y2);

if (eq1 > eq2)
{
	console.log(`${eq1} is > than ${eq2}`);
}
else
{
	console.log(`${eq2} is > than ${eq1}`);
}

// Last Edit : 2023-02-24 14:09:48
