'use strict';

const techs = require('../../../common/arrays.js').techList;

console.log(((arr) => {
	let biggestIndex = 0;

	for (let i = 0; i < arr.length; i++)
	{
		if (arr[i].length > arr[biggestIndex].length)
		{
			biggestIndex = i;
		}
	}

	return (arr[biggestIndex]);
})(techs));

// Last Edit : 2023-02-24 18:04:37
