'use strict';

let monthArr = require('../../../common/arrays.js').months;

function checkSeason(month, arr = monthArr)
{
	let monthIndex = arr.indexOf(month);

	if ((monthIndex === 11) || (monthIndex === 0) || (monthIndex === 1))
	{
		return ('Winter');
	}
	if ((monthIndex === 2) || (monthIndex === 3) || (monthIndex === 4))
	{
		return ('Spring');
	}
	if ((monthIndex === 5) || (monthIndex === 6) || (monthIndex === 7))
	{
		return('Summer');
	}
	if ((monthIndex === 8) || (monthIndex === 9) || (monthIndex === 10))
	{
		return ('Autumn');
	}
}

console.log(checkSeason('November', monthArr));

// Last Edit : 2023-02-25 16:25:05
