'use strict';

const arr = require('../../../common/arrays.js').countryListLong;

function reverseCountries(arr = [])
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


console.log('Reversed Array:', reverseCountries(arr));

// Last Edit : 2023-02-24 18:02:13
