'use strict';

const data = require('../../../common/objects').day9Data;

const callback = function(element)
{
	return (element.toUpperCase());
};

const uppercaseNames = data.names.map(callback);

console.log(uppercaseNames);

// Last Edit : 2023-02-17 13:56:13