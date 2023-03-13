'use strict';

const testArr = require('../../../common/arrays.js').randomIntegerList;

function sumOfArrayItems(arr)
{
	let sum = 0;
	let counter = 0;
	while (typeof(arr[counter]) === 'number')
	{
		sum += arr[counter];
		counter++;
	}
	if (counter === arr.length)
	{
		return (sum);
	}
	else
	{
		return (`Wrong input at arr[${counter}] === '${arr[counter]}', typeof(${typeof(arr[counter])})`);
	}
}

console.log(sumOfArrayItems(testArr));

// Last Edit : 2023-02-25 16:28:08
