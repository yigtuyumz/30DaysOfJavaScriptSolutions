'use strict';

/* ASCII to char */
function codesToString(arr)
{
	return (String.fromCharCode(...arr));
}

/* is ASCII character code alphanumerical ? */
function isAlphaNum(charCode)
{
	if ((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))
	{
		return (true);
	}
	else
	{
		return (false);
	}
}

/* unique Integer array */
function uniqueIntegerArray(arr = [], len = 5, maxValue = 127)
{
	if (len > maxValue)
	{
		return (-1);
	}

	let index = 0;

	while (index < len)
	{
		let element = +((Math.random() * maxValue).toFixed(0));
		
		if (!(arr.includes(element)) && isAlphaNum(element))
		{
			arr[index++] = element;
		}
	}

	return (arr);
}

console.log(codesToString(uniqueIntegerArray([], 6)));

// Last Edit : 2023-02-25 16:23:31
