'use strict';

const countries = require('../../../common/arrays.js').countryList;

console.log(((arr) => {
	let ok = [];
	let nok = [];

	for (let i = 0; i < arr.length; i++)
	{
		if (arr[i].endsWith('ia'))
		{
			ok.push(arr[i]);
		}
		else
		{
			nok.push(arr[i]);
		}
	}

	if (ok.length === 0)
	{
		return (nok);
	}
	else
	{
		return (ok);
	}

})(countries));

// Last Edit : 2023-02-25 16:24:28
