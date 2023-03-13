'use strict';

/**
 * Solves the equation 'y = x^2 + 6x + 9'
 * @returns {Number} the x value where y = 0
 */
function solveEquation()
{
	let x = 0;
	let equation = (Math.pow(x, 2) + (6 * x) + 9);
	/* this is an Increasing Function. Therefore, x is decreasing. Otherwise, infinite loop error raises on the runtime. */
	while (equation !== 0 && --x)
	{
		equation = (Math.pow(x, 2) + (6 * x) + 9);
	}

	return (x);
}

console.log(solveEquation());

// Last Edit : 2023-02-24 14:09:51
