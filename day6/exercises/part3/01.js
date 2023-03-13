'use strict';

const countries = require('../../../common/arrays.js').countryListLong;

function copyArray(arr)
{
	let retArr = [];
	for (let i = 0; i < arr.length; i++)
	{
		retArr[i] = arr[i];
	}

	return (retArr);
}

const copyWithoutMutation = copyArray(countries);

console.log(copyWithoutMutation);

// Last Edit : 2023-02-24 17:55:05
