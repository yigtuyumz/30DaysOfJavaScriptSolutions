'use strict';

let isPrime;
for (let i = 0; i <= 100; i++)
{
	if (i > 1)
	{
		isPrime = true;
		for (let j = 2; j < i; j++)
		{
			if (i % j === 0)
			{
				isPrime = false;
			}
		}
	}

	if (isPrime)
	{
		process.stdout.write(`${i}\n`);
	}
}

// Last Edit : 2023-02-24 14:36:02
