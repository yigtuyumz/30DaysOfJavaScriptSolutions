'use strict';

let testArr = require('../../../common/arrays.js').daysTurkish;

function modifyArray(arr = [])
{
	if (arr.length >= 5)
	{
		arr[4] = arr[4].toLocaleUpperCase();
		return (arr);
	}
	else
	{
		return ('Item not found.');
	}
}

console.log(modifyArray(testArr));

// Last Edit : 2023-02-24 17:43:17
