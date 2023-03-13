'use strict';

function uniqueArrayWithWhileLoop(count = 5, maxValue = 5, arr = [])
{
	if (count > maxValue)
	{
		return (-1);
	}

	let index = 0;

	while (index < count)
	{
		let element = +((Math.random() * maxValue).toFixed(0));

		if (!(arr.includes(element)))
		{
			arr[index++] = element;
		}
	}
	return (arr);
}

console.log(uniqueArrayWithWhileLoop(101, 100));

// Last Edit : 2023-02-25 16:28:22
