'use strict';

/**
 * See
 * {@link https://en.wikipedia.org/wiki/Variadic_function Variadic Functions}
 * for more information about this example.
*/
function sum()
{
	let sum = 0;
	for (let i = 0; i < arguments.length; i++)
	{
		sum +=arguments[i];
	}

	return (sum);
}

console.log(sum(4, 6, 10, 5, 6));

// Last Edit : 2023-02-25 16:28:00
