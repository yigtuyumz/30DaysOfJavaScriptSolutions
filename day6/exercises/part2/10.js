'use strict';

const countries = require('../../../common/arrays.js').countryList;

console.log(((arr) => {
	let retArr = [];
	let j = 0;

	for (let i = 0; i < arr.length; i++)
	{
		if (arr[i].length === 5)
		{
			retArr[j++] = arr[i];
		}
	}

	return (retArr);
})(countries));

// Last Edit : 2023-02-24 17:54:53
