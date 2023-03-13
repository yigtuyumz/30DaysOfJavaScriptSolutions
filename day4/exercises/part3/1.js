'use strict';

const prompt = require('prompt');
prompt.start();

const properties =
[
	{
		name			:	'month',
		hidden			:	false,
		message			:	'Enter a month',
		warning			:	'Invalid input, please try again.',
		validator		:	/^[a-zA-Z]+$/,
	}
];

prompt.get(properties, function(err, result){
	if (err)
	{
		return (err);
	}
	else
	{
		console.log(getMonthDay(result.month));
	}
});

function capitalize(string)
{
	return (string.charAt(0).toUpperCase() + string.slice(1));
}

function getMonthDay(monthName)
{
	monthName = monthName.toLowerCase();
	if ((monthName === 'january') || (monthName === 'march') || (monthName === 'may') || (monthName === 'july') || (monthName === 'august') || (monthName === 'october') || (monthName === 'december'))
	{
		return (`${capitalize(monthName)} has 31 days.`);
	}
	else if ((monthName === 'april') || (monthName === 'june') || (monthName === 'september') || (monthName === 'november'))
	{
		return (`${capitalize(monthName)} has 30 days.`);
	}
	else if (monthName === 'february')
	{
		return (`${capitalize(monthName)} has 28 days.`);
	}
	else
	{
		return ('Wrong input.');
	}
}

// Last Edit : 2023-02-24 14:20:26
