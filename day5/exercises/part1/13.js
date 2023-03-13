'use strict';

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

function companyCheck(element, array = [])
{
	let control = array.indexOf(element);
	if (control === -1)
	{
		return ('Company is not found.');
	}
	return ({company : array[array.indexOf(element)], index : array.indexOf(element)});
}

console.log(companyCheck('Facebook', itCompanies));

// Last Edit : 2023-02-24 14:27:20
