'use strict';

// x = y at 0, y = x at 0
function solveLinEquation(a, b, c)
{
	let x = (-1 * (c / a));
	let y = (-1 * (c / b));

	return ({x : x, y : y});
}


// certain point x
function solveLinEquation2(a, b, c, x)
{

	let y = ((a * x) + c) / (b * -1);

	return ({x : x, y : y});
}

console.log(solveLinEquation(3, 5, 42));
console.log(solveLinEquation2(3, 5, 42, -505));

// Last Edit : 2023-02-25 16:26:01
