'use strict';

function evensAndOdds(number)
{
	let odds = 0;
	let evens = 0;

	while (number >= 0)
	{
		if (number % 2)
		{
			odds++;
		}
		else
		{
			evens++;
		}
		number--;
	}
	console.log('The number of odds are ' + odds + '.');
	console.log('The number of evens are ' + evens + '.');
}

evensAndOdds(100);

// Last Edit : 2023-02-25 16:26:28
