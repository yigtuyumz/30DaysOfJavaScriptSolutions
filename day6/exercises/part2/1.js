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

	return (false);
}

/* RNG with range */
function randomNumberGenerator(min, max)
{
	/* min and max values are included the range. */
	return parseInt(((Math.random() * (max - min + 1)) + min));
}

/* unique Integer array */
function uniqueIntegerArray(arr = [])
{
	/* alphanumerical unique char count  max 62 */
	let len = randomNumberGenerator(62, 62);

	/* creating the array */
	let index = 0;

	while (index < len)
	{
		let element = randomNumberGenerator(0, 127);

		if (!(arr.includes(element)) && isAlphaNum(element))
		{
			arr[index++] = element;
		}
	}

	return (arr);
}

/* not unique integer array */
function integerArray(arr = [])
{
	let len = randomNumberGenerator(62, 62);

	/* creating the array */
	let index = 0;

	while (index < len)
	{
		let element = randomNumberGenerator(0, 127);
		if (isAlphaNum(element))
		{
			arr[index++] = element;
		}
	}

	return (arr);
}


let e = codesToString(uniqueIntegerArray());
process.stdout.write(e + '\t    UNIQUE\n');

let e2 = codesToString(integerArray());
process.stdout.write(e2 + '\tNOT UNIQUE\n');


// Last Edit : 2023-02-25 16:23:39
