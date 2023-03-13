'use strict';

function randomNumberGenerator(min, max)
{
	return parseInt(((Math.random() * (max - min + 1)) + min));
}

let str = 'JavaScript';
let randomNumber = randomNumberGenerator(0, str.length);

console.log(str[randomNumber]);

// Last Edit : 2023-02-24 13:58:40
