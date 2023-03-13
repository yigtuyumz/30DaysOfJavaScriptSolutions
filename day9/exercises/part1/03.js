'use strict';

const data = require('../../../common/objects').day9Data;

const callback = function(element)
{
	console.log(element);
};

data.countries.forEach(callback);

// Last Edit : 2023-02-17 13:46:36
