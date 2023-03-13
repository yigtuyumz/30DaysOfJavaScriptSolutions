'use strict';

const data = require('../../../common/objects').day9Data;

function callback(element)
{
	return (element.length === 6);
}

let sixCharacters = data.countries.filter(callback);

console.log(sixCharacters);

// Last Edit : 2023-02-17 14:09:06
