'use strict';

const countries = require('../../../common/arrays.js').countryListLong;

function reverseArray(arr)
{
	let j = arr.length - 1;
	for (let i = 0; i < (arr.length / 2); i++)
	{
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		j--;
	}

	return (arr);
}

for (let i = 0; i < countries.length; i++)
{
	countries[i] = countries[i].toUpperCase();
}

console.log(reverseArray(countries));

// Last Edit : 2023-02-24 18:01:04
