'use strict';

const prompt = require('prompt');
prompt.start();

const properties =
[
	{
		name		:	'day',
		hidden		:	false,
		message		:	'What is the day today?',
		warning		:	'Invalid input, please try again.',
	},
];

prompt.get(properties, function(err, result){
	if (err)
	{
		return (err);
	}
	else
	{
		console.log(isWorkingDay(result.day));
	}
});

function isWorkingDay(day)
{
	day = day.toLowerCase();
	let dayCapitalized = day.charAt(0).toUpperCase() + day.slice(1);
	
	if ((day === 'saturday') || (day === 'sunday'))
	{
		return (`${dayCapitalized} is a weekend.`);
	}
	else if ((day === 'monday') || (day === 'tuesday') || (day === 'wednesday') || (day === 'thursday') || (day === 'friday'))
	{
		return (`${dayCapitalized} is a working day.`);
	}
	else
	{
		return ('Invalid input.');
	}
}

// Last Edit : 2023-02-24 14:20:15
