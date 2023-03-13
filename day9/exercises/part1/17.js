'use strict';

const data = require('../../../common/objects').day9Data;

function sumAllNumbers(arr = [])
{
	let x = arr.reduce((a, b) => a + b);

	return (x);
}

console.log(sumAllNumbers(data.numbers));

// Last Edit : 2023-02-18 13:28:56
