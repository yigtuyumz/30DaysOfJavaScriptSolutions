'use strict';

function getMax(a, b, c)
{
	let biggest = a;

	if (biggest < b)
	{
		biggest = b;
		if (biggest < c)
		{
			biggest = c;
		}
	}

	return (biggest);
}

console.log(getMax(4, 6, 2));

// Last Edit : 2023-02-25 16:25:12
