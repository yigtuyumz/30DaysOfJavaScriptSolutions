'use strict';

function randomRGB(alpha = false)
{
	let color;
	let R = (Math.floor((Math.random()*256))).toString();
	let G = (Math.floor((Math.random()*256))).toString();
	let B = (Math.floor((Math.random()*256))).toString();

	if (alpha)
	{
		color = 'rgba(';
		let A = (Math.random().toFixed(3)).toString();
		color += R + ', ' + G + ', ' + B + ', ' + A + ')';
	}
	else
	{
		color = 'rgb(';
		color += R + ', ' + G + ', ' + B + ')';
	}

	return(color);
}

function arrayOfRgbColors(count = 0)
{
	let arr = [];

	for (let i = 0; i < count; i++)
	{
		arr[i] = randomRGB(false);
	}

	return (arr);
}

console.log(arrayOfRgbColors(5));

// Last Edit : 2023-02-25 16:28:43
