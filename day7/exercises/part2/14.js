'use strict';

function sumOfNumbers()
{
	let sum = 0;
	for (let i = 0; i < arguments.length; i++)
	{
		if (!(isNaN(arguments[i])) && !(Array.isArray(arguments[i])))
		{
			sum += arguments[i];
		}
	}
	return (sum);
}

console.log(sumOfNumbers(2, 3, 'a', [2], +Math.PI.toFixed(3), {3 : 4}, (()=>{return ('a');})()));

// Last Edit : 2023-02-25 16:26:36
