
'use strict';

for (let i = 0; i <= 100; i++)
{
	if (i % 2 === 0)
	{
		process.stdout.write(i + '\n');
	}
}

let j = 0;

while (j <= 100)
{
	process.stdout.write(j + '\n');
	j += 2;
}

// Last Edit : 2023-02-24 14:35:39
