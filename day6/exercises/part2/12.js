'use strict';

const techs = require('../../../common/arrays.js').techList;

console.log(((arr) => {
	let retArr = [];

	for (let i = 0; i < arr.length; i++)
	{
		let subArr = [];
		subArr[0] = arr[i];
		subArr[1] = arr[i].length;
		retArr.push(subArr);
	}

	return (retArr);
})(techs));

// Last Edit : 2023-02-24 18:04:51
