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

function rgbColorGenerator()
{
	let arr = [];
	
	let R = Math.floor((Math.random()*256));
	let G = Math.floor((Math.random()*256));
	let B = Math.floor((Math.random()*256));

	arr.push('rgb(', R, ', ', G, ', ', B, ')');

	return(arr.join(''));
}

/**
 * @param {string} arg = 'hexa' | 'rgb' - Determines what type the output will be.
 * @param {Number} count - Specifies the number of output.
 * 
 * @returns {Array<String>} colorArray - List of colors.
 * 
 * @example generateColors('hex', 10);
 */
function generateColors(arg, count)
{
	let retArr = [];
	if (arg === 'hexa')
	{
		for (let i = 0; i < count; i++)
		{
			retArr[i] = randomHexaNumberGenerator(false);
		}
	}
	else if (arg === 'rgb')
	{
		for (let i = 0; i < count; i++)
		{
			retArr[i] = rgbColorGenerator();
		}
	}
	else
	{
		return ('Wrong Input..');
	}

	return (retArr);
}

console.log(generateColors('hexa', 42));

// Last Edit : 2023-02-25 16:28:56
