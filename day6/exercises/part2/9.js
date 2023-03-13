'use strict';

const countries = require('../../../common/arrays.js').countryList;

console.log(((arr) => {

	'use strict';

	let biggestIndex = 0;
	for (let i = 0; i < arr.length; i++)
	{
		if (arr[i].length > arr[biggestIndex].length)
		{
			biggestIndex = i;
		}
	}
	return (arr[biggestIndex]);
})(countries));

// Last Edit : 2023-02-24 17:54:30
