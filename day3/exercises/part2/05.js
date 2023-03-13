'use strict';

/**
 * Returns the slope and prints x-intersection and y-intersection of the line.
 *
 * @param {Number} x1 arbitrary value
 * @param {Number} x2 arbitrary value
 * @returns {Number} slope
 */
function equation(x1, x2)
{
	let y1 = (2 * x1) - 2;
	let y2 = (2 * x2) - 2;
	/* y = 0, get x from the line equation. */
	/*
		y = 2x - 2
		2 = 2x
		2 / 2 = 2x / 2
		1 = x
	*/
	let xIntersection = 2 / 2;
	/* assuming that the x = 0 */
	/*
		y = 2 * 0 - 2
		y = -2
	*/
	let yIntersection = (2 * 0) - 2;
	console.log(`x Intersection : ${xIntersection}`);
	console.log(`y Intersection : ${yIntersection}`);
	return ((y2 - y1) / (x2 - x1));
}

console.log(equation(2, 6));

// Last Edit : 2023-02-24 14:09:39
