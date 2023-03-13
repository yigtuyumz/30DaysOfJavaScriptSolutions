'use strict';

function convertRgbToHexa(color, alpha = false)
{
	/* this regexp can be improved. */
	let expression = color.match(/\d+/g);
	console.log(expression	);


	let R = (+expression[0] <= 15 ) ? ('0' + (+expression[0]).toString(16)) : (+expression[0]).toString(16);
	let G = (+expression[1] <= 15 ) ? ('0' + (+expression[1]).toString(16)) : (+expression[1]).toString(16);
	let B = (+expression[2] <= 15 ) ? ('0' + (+expression[2]).toString(16)) : (+expression[2]).toString(16);
	
	if (alpha)
	{
		let A = +(expression[3] + '.' + expression[4]) * 255;

		if (A % 1 >= 0.5)
		{
			A = Math.ceil(A).toString(16);
		}
		else
		{
			A = (Math.floor(A)).toString(16);
		}
		return ('#' + R + G + B + A);
	}

	return ('#' + R + G + B);
}


console.log(convertRgbToHexa('rgb(255, 55, 155, 0.154)', true));
console.log(convertRgbToHexa('rgb(254, 253, 252)'));

// Last Edit : 2023-02-25 16:28:52
