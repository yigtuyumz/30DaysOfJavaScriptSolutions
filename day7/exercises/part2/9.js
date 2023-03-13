'use strict';

const myArr = require('../../../common/arrays.js').daysTurkish;

function removeItem(index)
{
	if (index < 0 || index+1 > myArr.length)
	{
		return (-1);
	}

	myArr.splice(index, 1);

	return (myArr);
}

console.log(removeItem(3, myArr));

// Last Edit : 2023-02-24 17:43:07
