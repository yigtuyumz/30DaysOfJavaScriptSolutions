'use strict';

const countries = require('../../../common/arrays.js').countryList;

console.log(
	((arr) => {
		let retArr = [];
		for (let i = 0; i < arr.length; i++)
		{
			retArr[i] = arr[i].length;
		}

		return (retArr);
	})(countries)
);

// Last Edit : 2023-02-25 16:24:17
