'use strict';

const testArr = require('../../../common/arrays.js').randomUniqueIntegerList.concat(require('../../../common/arrays.js').countryListLong).concat(require('../../../common/arrays.js').countryList);

function isUnique(arr = [])
{
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i++)
	{
		for (let j = i + 1; j < arr.length; j++)
		{
			if (arr[j] === arr[i])
			{
				return (false);
			}
		}
	}
	return (true);
}

console.log(isUnique(testArr));

// Last Edit : 2023-02-24 18:01:40
