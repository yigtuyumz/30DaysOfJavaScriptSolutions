'use strict';

/*
const { countryListLong } = require('../../../common/arrays');

function categorizeCountries(array = [])
{
	function getArray(arr, phrase)
	{
		let retArr = [];

		arr.some(e => {
			if (e.endsWith(phrase))
			{
				retArr.push(e);
			}
		});

		return (retArr);
	}
	let retVal = {
		landCountries : getArray(array, 'land'),
		iaCountries : getArray(array, 'ia'),
		stanCountries : getArray(array, 'stan'),
		IslandsCountries : getArray(array, 'Islands'),
	};

	return (retVal);
}

const categorizedCountries = categorizeCountries(countryListLong);

console.log(categorizedCountries);
*/

const { countries } = require('../../../common/objects');

function categorizeCountriesByEnd(countryList = [], phraseList = [])
{
	let retVal = new Object();
	phraseList.forEach(element => {
		let subArr = new Array();
		countryList.some(e => {
			/* The user may provide capitalized input, may not. */
			if (e.name.toLowerCase().endsWith(element) || e.name.toUpperCase().endsWith(element))
			{
				subArr.push(e.name);
			}
		});
		/* if country does not found */
		if (subArr.length === 0)
		{
			retVal[`${element}`] = Boolean(0);
		}
		else
		{
			retVal[`${element}`] = subArr;
		}
	});
	return (retVal);
}

const categorizedCountries = categorizeCountriesByEnd(countries, ['']);

console.log(categorizedCountries);

// Last Edit : 2023-03-12 19:46:12
