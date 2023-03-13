'use strict';

const data = require('../../../common/objects').day9Data;

function sixLettersCountry(array)
{
	let callback = function(element)
	{
		return (element.length === 6);
	};
	let x = array.find(callback);

	return (x);
}

/* first occurance */
console.log(sixLettersCountry(data.countries));

// Last Edit : 2023-02-18 14:27:12
