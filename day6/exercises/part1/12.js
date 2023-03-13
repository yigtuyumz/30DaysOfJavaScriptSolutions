'use strict';

/* Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array */

let arr = [0, 0];

for (let i = 0; i <= 100; i++)
{
	// (i % 2) ? arr[1] += i : arr[0] += i;
	if (i % 2)
	{
		arr[1] += i;
	}
	else
	{
		arr[0] += i;
	}
}

console.log(arr);

// Last Edit : 2023-02-24 14:36:11
