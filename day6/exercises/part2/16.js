'use strict';

let fullstack = require('../../../common/arrays.js').fullstack;

for (let i = 0; i < fullstack.length; i++)
{
	for (let j = 0; j < fullstack[i].length; j++)
	{
		console.log(fullstack[i][j].toUpperCase());
	}
}

// Last Edit : 2023-02-25 16:23:47
