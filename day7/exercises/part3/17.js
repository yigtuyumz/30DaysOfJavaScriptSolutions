'use strict';

const testArr = require('../../../common/arrays.js').countryListLong;

function checkArrayItems(arr = [])
{
	if (arr.length === 0)
	{
		return ('Empty.');
	}

	let type = typeof(arr[0]);
	let counter;

	for (counter = 0; counter < arr.length; counter++)
	{
		let type2 = typeof(arr[counter]);

		if (type2 !== type)
		{
			break ;
		}
	}

	if (counter === arr.length)
	{
		return ('Same Datatype.');
	}
	else
	{
		return ('Different Datatype.');
	}
}

process.stdout.write(checkArrayItems(testArr));

// Last Edit : 2023-02-24 18:01:58
