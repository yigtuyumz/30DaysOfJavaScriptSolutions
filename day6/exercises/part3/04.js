'use strict';

const countries = require('../../../common/arrays.js').countryListLong;

let landCountries = [];

for (let i = 0; i < countries.length; i++)
{
	let searchVal = countries[i].search('land');

	if (searchVal > 0)
	{
		landCountries.push(countries[i]);
	}
}

console.log(landCountries);

// Last Edit : 2023-02-24 17:59:16
