'use strict';

function randomHexaNumberGenerator(alpha = false)
{
	let color = '#';
	let len;

	if (alpha)
	{
		len = 8;
	}
	else
	{
		len = 6;
	}

	for (let i = 0; i < len; i++)
	{
		let randomNumber = parseInt(((Math.random() * (15 - 0 + 1)) + 0));
		color += randomNumber.toString(16);
	}

	return (color);
}

function arrayOfHexaColors(count = 0)
{
	let arr = [];

	for (let i = 0; i < count; i++)
	{
		arr[i] = randomHexaNumberGenerator(false);
	}

	return (arr);
}


console.log(arrayOfHexaColors(42));

// Last Edit : 2023-02-25 16:28:38
