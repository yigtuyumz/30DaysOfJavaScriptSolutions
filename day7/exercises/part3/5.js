'use strict';

function convertHexaToRgb(color, alpha = false)
{
	let len;
	if (alpha)
	{
		len = 9;
	}
	else
	{
		len = 7;
	}

	if (color[0] === '#' && color.length === len)
	{
		let R = parseInt(color.slice(1, 3), 16).toString();
		let G = parseInt(color.slice(3, 5), 16).toString();
		let B = parseInt(color.slice(5, 7), 16).toString();
		if (alpha)
		{
			let A = (parseInt(color.slice(7, 9), 16) / 255).toFixed(2);
			return ('rgba(' + R + ', ' + G + ', ' + B + ', '+ A + ')');
		}
		else
		{
			return ('rgb(' + R + ', ' + G + ', ' + B + ')');
		}
	}
}

console.log(convertHexaToRgb('#ffffff0A', true));

// Last Edit : 2023-02-25 16:28:48
