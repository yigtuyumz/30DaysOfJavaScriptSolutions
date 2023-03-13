'use strict';

const data = require('../../../common/objects').day9Data;

let indexOfCountry = function(searchVal, array = [])
{
	let callback = function(element)
	{
		return (element === searchVal);
	};

	let x = array.findIndex(callback);
	if (x === -1)
	{
		return (`Country '${searchVal}' doesn't exists!`);
	}
	else
	{
		return (`Index of ${searchVal} is ${x}`);
	}
};

console.log(indexOfCountry('Russia', data.countries));

// Last Edit : 2023-02-18 14:35:26
