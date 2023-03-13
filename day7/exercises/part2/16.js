'use strict';

function randomMacAddress()
{
	/* RNG with range */
	function randomNumberGenerator(min, max)
	{
		/* min and max values are included the range. */
		return parseInt(((Math.random() * (max - min + 1)) + min));
	}

	let macFormat1 = '';
	let macFormat2 = '';

	let block;
	for (let i = 0; i <= 5; i++)
	{
		let randNum = randomNumberGenerator(0, 255);
		if (randNum < 16)
		{
			block = '0' + randNum.toString(16);
		}
		else
		{
			block = randNum.toString(16);
		}

		macFormat1 += block;
		macFormat2 += block;

		if (i !== 5)
		{
			macFormat1 += '-';
			macFormat2 += ':';
		}
	}

	return ({format1 : macFormat1 , format2 : macFormat2});
}

console.log(randomMacAddress());

// Last Edit : 2023-02-25 16:26:46
