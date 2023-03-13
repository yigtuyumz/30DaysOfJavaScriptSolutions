'use strict';

let countries = require('../../../common/arrays.js').countryListLong;

let highestCharCountIndex = 0;
let highestCharArray = [];

for (let i = 0; i < countries.length; i++)
{
	if (countries[i].length >= countries[highestCharCountIndex].length)
	{
		highestCharCountIndex = i;
	}

}

for (let i = 0; i < countries.length; i++)
{
	if (countries[i].length === countries[highestCharCountIndex].length)
	{
		highestCharArray.push(countries[i]);
	}
}

console.log(highestCharArray);
console.log('Central African Republic'.length);

// Last Edit : 2023-02-24 17:59:36
