'use strict';

const data = require('../../../common/objects').day9Data;

function callback(element)
{
	/* i am not sure about capitalized 'Land' condition. */
	return (element.includes('land') || element.includes('Land'));
}

const containsLand = data.countries.filter(callback);

console.log(containsLand);

// Last Edit : 2023-02-17 14:04:55
