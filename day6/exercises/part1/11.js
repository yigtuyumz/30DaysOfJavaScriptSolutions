'use strict';

/* The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500. */

let odds = 0;
let evens = 0;

for (let i = 0; i <= 100; i++)
{
	// (i % 2) ? odds += i : evens += i;
	if (i % 2)
	{
		odds += i;
	}
	else
	{
		evens += i;
	}
}

process.stdout.write(`The sum of all evens from 0 to 100 is ${evens}. And the sum of all odds from 0 to 100 is ${odds}.`);

// Last Edit : 2023-02-24 14:36:08
