'use strict';

const data = require('../../../common/objects').day9Data;

function callback(element)
{
	return (Math.pow(element, 2));
}

const squareNumbers = data.numbers.map(callback);

console.log(squareNumbers);

// Last Edit : 2023-02-17 13:53:51
