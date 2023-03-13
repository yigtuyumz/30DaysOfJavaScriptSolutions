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
	},
	{
		/* max year 9999999999 */
		name			:	'year',
		hidden			:	false,
		message			:	'Enter a year',
		warning			:	'Invalid input, please try again.',
		validator		:	/^[\d]{1,10}$/,
	},
];

prompt.get(properties, function(err, result){
	if (err)
	{
		return (err);
	}
	else
	{
		console.log(getMonthDay(result.month, result.year));
	}
});

function isLeapYear(year)
{
	/* eslint-disable no-extra-boolean-cast */
	if (!Boolean(year % 4))
	{
		if (!Boolean(year % 100))
		{
			if (!Boolean(year % 400))
			{
				return (true);
			}
			return (false);
		}
		else
		{
			return (true);
		}
	}
	else
	{
		return (false);
	}
	/* eslint-enable no-extra-boolean-cast */
}

function capitalize(string)
{
	return (string.charAt(0).toUpperCase() + string.slice(1));
}

function getMonthDay(monthName, year)
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
		if (isLeapYear(year))
		{
			return (`${capitalize(monthName)} has 29 days.`);
		}
		else
		{
			return (`${capitalize(monthName)} has 28 days.`);
		}
	}
	else
	{
		return ('Wrong input.');
	}
}

// Last Edit : 2023-02-24 14:23:06
