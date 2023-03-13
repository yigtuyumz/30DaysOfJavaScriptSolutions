'use strict';

const countries = require('../../../common/arrays.js').countryListLong;

let answerArray = [];

for (let i = 0; i < countries.length; i++)
{
	if (countries[i].split(' ').length >= 2)
	{
		answerArray.push(countries[i]);
	}
}

console.log(answerArray);

// Last Edit : 2023-02-24 18:00:40
