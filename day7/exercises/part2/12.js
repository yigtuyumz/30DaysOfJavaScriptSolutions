'use strict';

/* number can be positive or negative */
const sumOfEven = (number) => {
	let sum = 0;

	if (number < 0)
	{
		number--;
	}
	else
	{
		number++;
	}

	while (number !== 0)
	{
		if ((Number.isInteger(number)) && !(Array.isArray(number)))
		{
			if (number < 0)
			{
				number++;
			}
			else
			{
				number--;
			}
			/* eslint-disable no-extra-boolean-cast */
			if (!Boolean(number % 2))
			/* eslint-enable no-extra-boolean-cast */
			{
				sum += number;
			}
		}
		else
		{
			return (-1);
		}
	}
	return (sum);
};

/* sum of all even numbers from 1 to number */
const sumOfEvenWithMath = (number) => {
	let ans = Math.floor(number / 2) * (Math.floor(number / 2) + 1);

	return (ans);
};


console.log(sumOfEven(100));
console.log(sumOfEvenWithMath(100));

// Last Edit : 2023-02-25 16:26:19
