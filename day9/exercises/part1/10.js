'use strict';

const data = require('../../../common/objects').day9Data;

function callback(element)
{
	return (element.price);
}

const pricesArray = data.products.map(callback);

console.log(pricesArray);

// Last Edit : 2023-02-17 14:00:14
