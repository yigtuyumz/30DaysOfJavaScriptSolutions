'use strict';

for (let i = 0; i <= 10; i++)
{
	if (i === 0)
	{
		process.stdout.write('i\ti^2\ti^3\n');
	}

	process.stdout.write(`${i}\t${Math.pow(i, 2)}\t${Math.pow(i, 3)}\n`);
}

// Last Edit : 2023-02-24 14:35:29
