'use strict';


function arrDivide(arr = [])
{
	let arr1;
	let arr2;

	if (arr.length % 2)
	{
		arr1 = arr.slice(0, (arr.length / 2) + 1);
		arr2 = arr.slice(((arr.length / 2) + 1), arr.length);
	}
	else
	{
		arr1 = arr.slice(0, (arr.length / 2));
		arr2 = arr.slice((arr.length / 2), arr.length);
	}
	
	return ({arr1, arr2});
}

const countries = require('../../../common/arrays.js').countryList;

console.log(arrDivide(countries));

// Last Edit : 2023-02-24 17:51:51
