'use strict';

/*
const { countryListLong } = require('../../../common/arrays');

function generate(array = [])
{
	let retArr = [];
	let keyValue = 65;

	while (keyValue <= 90)
	{
		let letter = {};
		letter[String.fromCharCode(keyValue)] = array.filter((e) => {
			return (e[0] === String.fromCharCode(keyValue));
		}).length;
		retArr.push(letter);
		keyValue++;
	}

	return (retArr);
}


const ans = generate(countryListLong);

console.log(ans);
*/


const { countries } = require('../../../common/objects');


function generate2(countryList = [])
{
	let retArr = [];
	let keyValue = 65;		/* ASCII 'A' */

	while (keyValue <= 90)	/* ASCII 'Z' */
	{
		let letter = {};
		letter[`${String.fromCharCode(keyValue)}`] = countryList.filter((e) => {
			return (e.name[0] === String.fromCharCode(keyValue));
		}).length;
		retArr.push(letter);
		keyValue++;
	}

	return (retArr);
}

console.log(generate2(countries));

// Last Edit : 2023-03-13 13:02:29
