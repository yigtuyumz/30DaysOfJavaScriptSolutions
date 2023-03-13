'use strict';

for (let i = 0; i <= 100; i++)
{
	if (i % 2 === 1)
	{
		process.stdout.write(i + '\n');
	}
}

let j = 0;

while (j <= 100)
{
	if (j % 2)
	{
		process.stdout.write(j + '\n');
		j++;
	}
	else
	{
		j++;
	}
}

// Last Edit : 2023-02-24 14:35:58
