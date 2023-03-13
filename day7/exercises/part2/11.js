'use strict';

/* number can be positive or negative */
const sumOfOdds = (number) => {
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
			if (number % 2)
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

/* sum of all odd numbers from 1 to number */
const sumOfOddsWithMath = (number) => {
	let ans = Math.pow(Math.floor((1 + number) / 2), 2);

	return (ans);
};

process.stdout.write(sumOfOdds(100).toString() + '\n');
process.stdout.write(sumOfOddsWithMath(100).toString() + '\n');

// Last Edit : 2023-02-25 16:26:14
