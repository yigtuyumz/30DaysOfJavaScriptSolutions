'use strict';

const data = require('../../../common/objects').day9Data;

function callback(element)
{
	return (element.length >= 6);
}

let sixCharactersOrMore = data.countries.filter(callback);

console.log(sixCharactersOrMore);

// Last Edit : 2023-02-17 14:10:35
