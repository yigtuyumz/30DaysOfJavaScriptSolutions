'use strict';


const countries = require('../../../common/arrays.js');

function checkCountry(countryList, countryName)
{
	/* country name does not exists in the array, adding. */
	if (countryList.indexOf(countryName) === -1)
	{
		countryList.push(countryName);
	}
	/* country name exists in the country list, just printing it. */
	else
	{
		console.log(countryName.toUpperCase());
	}

	return (countryList);
}

let newArray = checkCountry(countries.countryList, 'England');

console.log(newArray);

// Last Edit : 2023-02-24 14:29:03
