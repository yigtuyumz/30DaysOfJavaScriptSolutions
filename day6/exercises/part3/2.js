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

let countriesCopy = copyArray(countries).sort();

console.log(countriesCopy);

// Last Edit : 2023-02-24 17:58:57

