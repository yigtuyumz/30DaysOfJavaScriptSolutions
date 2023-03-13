'use strict';

const characters = require('../../../common/arrays.js').alphanumeric;
const readline = require('readline');
const rL = readline.createInterface({
	input			:		process.stdin,
	output			:		process.stdout,
});

rL.question('Count: ', (count) => {
	rL.question('Length: ', (len) => {
		process.stdout.write(userIdGeneratedByUser(+count, +len) + '\n');
		rL.close();
	});

});


function userIdGeneratedByUser(count = 0, len = 0)
{
	let id = '';

	/* RNG with range */
	function randomNumberGenerator(min, max)
	{
		/* min and max values are included the range. */
		return parseInt(((Math.random() * (max - min + 1)) + min));
	}

	for (let i = 0; i < count; i++)
	{
		for (let j = 0; j < len; j++)
		{
			id += characters[randomNumberGenerator(0, characters.length - 1)];
		}
		if (i + 1 < count)
		{
			id += '\n';
		}
	}

	return (id);
}

rL.on('close', function () {
	// console.log('__close event__');
	process.exit(0);
});


// Last Edit : 2023-02-25 16:27:49
