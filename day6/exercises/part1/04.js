'use strict';

let i = 1;

while (i < 8)
{
	let j = 0;
	while (j < i)
	{
		process.stdout.write('#');
		j++;
	}

	process.stdout.write('\n');
	i++;
}

for (let i = 1; i < 8; i++)
{
	for (let j = 0; j < i; j++)
	{
		process.stdout.write('#');
	}
	
	process.stdout.write('\n');
}

// Last Edit : 2023-02-24 14:33:17
