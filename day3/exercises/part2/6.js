'use strict';

/**
 * @param {Number} x1 x coordinate of the first point
 * @param {Number} y1 y coordinate of the first point
 * @param {Number} x2 x coordinate of the second point
 * @param {Number} y2 y coordinate of the second point
 * @returns {Number} slope of the line 
 */
function slope(x1, y1, x2, y2)
{
	return ((y2 - y1) / (x2 - x1));
}

console.log(slope(25, 100, 0, 0));

// Last Edit : 2023-02-24 14:09:43
