'use strict';

const data = require('../../../common/objects').day9Data;

let firstOccuranceIndex = ((array) => {
	function callback(element)
	{
		return (element.length === 6);
	}

	let x = array.findIndex(callback);

	return (x);

}) (data.countries);

console.log(firstOccuranceIndex);

// Last Edit : 2023-02-18 14:29:27
