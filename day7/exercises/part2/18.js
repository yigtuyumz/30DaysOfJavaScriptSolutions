'use strict';

const characters = require('../../../common/arrays.js').alphanumeric;

function userIdGenerator()
{
	let id = '';

	/* RNG with range */
	function randomNumberGenerator(min, max)
	{
		/* min and max values are included the range. */
		return parseInt(((Math.random() * (max - min + 1)) + min));
	}

	for (let i = 0; i <= 6; i ++)
	{
		id += characters[randomNumberGenerator(0, characters.length - 1)];
	}

	return (id);
}

console.log(userIdGenerator());

// Last Edit : 2023-02-25 16:26:57
