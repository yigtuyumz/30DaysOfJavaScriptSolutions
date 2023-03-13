'use strict';

const allCountries = require('../../../common/arrays.js').countryListLong;


function getMiddleCountry(countryList = [])
{
	if ((!(Array.isArray(countryList))) || (countryList.length === 0))
	{
		return ('Wrong Input.');
	}

	let countryLen = countryList.length;
	if (countryLen % 2)
	{
		return (
			{
				'name' : countryList[(countryLen - 1) / 2],
				'type' : 'Country',
				'index' : ((countryLen - 1) / 2)
			});
	}
	else
	{
		return (
			[
				{
					'name' : countryList[(countryLen - 2) / 2],
					'type' : 'Country',
					'index' : ((countryLen - 2) / 2)
				},
				{
					'name' : countryList[((countryLen - 2) / 2) + 1],
					'type' : 'Country',
					'index' : (((countryLen - 2) / 2) + 1)
				}
			]
		);
	}
}


console.log(getMiddleCountry(allCountries));

// Last Edit : 2023-02-24 14:31:02
