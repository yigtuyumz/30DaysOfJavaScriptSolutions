'use strict';

const testArr = require('../../../common/arrays.js').hexLowercase;

function capitalizeArray(arr = [])
{
	for (let i = 0; i < arr.length; i++)
	{
		// arr[i] = ((string) => {return (string.charAt(0).toUpperCase() + string.slice(1));})(arr[i]);
		arr[i] = arr[i].toUpperCase();
	}

	return(arr);
}

console.log(testArr);

capitalizeArray(testArr);

console.log(testArr);

// Last Edit : 2023-02-24 18:05:34
