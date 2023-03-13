'use strict';

function sumOfNumbers(max)
{
	let sum = 0;

	while (max >= 0)
	{
		sum += max;
		max--;
	}
	return (sum);
}

console.log(sumOfNumbers(10));

// Last Edit : 2023-02-25 16:26:06
