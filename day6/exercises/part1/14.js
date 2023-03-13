'use strict';

/* Develop a small script which generate array of 5 random numbers and the numbers must be unique */

function uniqueArrayWithForLoop(arr = [], len = 5, maxValue = 5)
{
	if (len > maxValue)
	{
		return (-1);
	}

	for (let i = 0; i < len; i++)
	{
		let element = +((Math.random() * maxValue).toFixed(0));
		if (!(arr.includes(element)))
		{
			arr[i] = element;
		}
		else
		{
			i--;
		}
	}

	return (arr);
}

function uniqueArrayWithWhileLoop(arr = [], len = 5, maxValue = 5)
{
	if (len > maxValue)
	{
		return (-1);
	}

	let index = 0;

	while (index < len)
	{
		let element = +((Math.random() * maxValue).toFixed(0));
		if (!(arr.includes(element)))
		{
			arr[index++] = element;
		}
	}

	return (arr);
}

console.log(uniqueArrayWithWhileLoop([], 5, 500));
console.log(uniqueArrayWithForLoop());

// Last Edit : 2023-02-24 14:36:18
