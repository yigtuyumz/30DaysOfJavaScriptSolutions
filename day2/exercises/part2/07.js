'use strict';

function randomNumberGenerator(min, max)
{
	return parseInt(((Math.random() * (max - min + 1)) + min));
}

let ans = randomNumberGenerator(0, 100);

console.log(ans);

// Last Edit : 2023-02-24 13:58:29
