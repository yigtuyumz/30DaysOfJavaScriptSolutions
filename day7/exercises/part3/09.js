'use strict';

function factorial(number)
{
	if (number > 1)
	{
		return (number * factorial(--number));
	}
	else
	{
		return (1);
	}
}

console.log(factorial(1));

// Last Edit : 2023-02-25 16:29:08
