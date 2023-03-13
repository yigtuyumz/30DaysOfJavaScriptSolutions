'use strict';

const countries = require('../../../common/objects').countries;


let index = countries.length - 1;

process.stdout.write(`Name : ${countries[index].name}\t
Capital : ${countries[index].capital}\t
Population : ${countries[index].population}\t
Languages : ${countries[index].languages}`);

/*	Returns the country which has the biggest population

let counter = 0;

let biggestPop = -1;
while (counter < countries.length)
{
	if (countries[counter].population >= biggestPop)
	{
		biggestPop = countries[counter].population;
	}
	counter++;
}

let biggestCountryKey = Object.keys(countries).find(key => countries[key].population === biggestPop);

countries[biggestCountryKey].languages.forEach((e) => {
	process.stdout.write(e);
})
*/

// Last Edit : 2023-02-25 16:30:31
