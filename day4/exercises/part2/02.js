'use strict';

function getSeason(month)
{
	month = month.toLowerCase();
	if ((month === 'september') || (month === 'october') || (month === 'november'))
	{
		return ('Autumn');
	}
	else if ((month === 'december') || (month === 'january') || (month === 'february'))
	{
		return ('Winter');
	}
	else if ((month === 'march') || (month === 'april') || (month === 'may'))
	{
		return ('Spring');
	}
	else if ((month === 'august') || (month === 'june') || (month === 'july'))
	{
		return ('Summer');
	}
	else
	{
		return ('Wrong input');
	}
}

console.log(getSeason('may'));

// Last Edit : 2023-02-24 14:20:02
