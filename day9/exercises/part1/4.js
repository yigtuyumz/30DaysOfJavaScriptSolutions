'use strict';

const data = require('../../../common/objects').day9Data;

const callback = function(element)
{
	console.log(element);
};

data.names.forEach(callback);

// Last Edit : 2023-02-17 13:47:59
