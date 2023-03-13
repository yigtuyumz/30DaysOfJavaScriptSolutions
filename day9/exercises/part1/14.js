'use strict';

const data = require('../../../common/objects').day9Data;

const callback = function(element = '')
{
	// return (element[0] === 'E');
	return (element.startsWith('E'));
};


const startsWithE = data.countries.filter(callback);

console.log(startsWithE);

// Last Edit : 2023-02-17 14:14:33
