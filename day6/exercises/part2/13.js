'use strict';

const techs = require('../../../common/arrays.js').mernStack;

console.log(((arr) => {
	let retVal = [];

	for (let i = 0; i < arr.length; i++)
	{
		retVal[i] = arr[i].slice(0, 1);
	}

	return (retVal.join(''));
})(techs));

// Last Edit : 2023-02-24 18:06:10
