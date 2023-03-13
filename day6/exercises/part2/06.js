'use strict';

const countries = require('../../../common/arrays.js').countryList;

console.log(((arr) => {
	let retArr = [];
	for (let i = 0; i < arr.length; i++)
	{
		let subArr = [];
		subArr[0] = arr[i];
		subArr[1] = arr[i].slice(0, 3).toUpperCase();
		subArr[2] = arr[i].length;
		
		retArr[i] = subArr;
	}

	return (retArr);
})(countries));

// Last Edit : 2023-02-25 16:24:24
