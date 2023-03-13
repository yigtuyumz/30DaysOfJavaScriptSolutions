'use strict';

const data = require('../../../common/objects').day9Data;

function filterCallback(element)
{
	return (typeof(element.price) === 'number');
}

function mapCallback(element)
{
	// return ({price : element.price});
	return (Object.entries(element)[1][1]);
}

const filteredOutput = data.products.filter(filterCallback).map(mapCallback);

console.log(filteredOutput);

// Last Edit : 2023-02-18 10:47:21

