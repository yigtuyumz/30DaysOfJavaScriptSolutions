'use strict';

const prompt = require('prompt');
prompt.start();

const properties =
[
	{
		name			:	'age',
		hidden			:	false,
		message			:	'Please enter your age',
		warning			:	'Invalid input, please try again.',
		validator		:	/^[0-9]+$/,
	},
];

prompt.get(properties, function(err, result){
	if (err)
	{
		return (err);
	}
	if (result.age.length === 0)
	{
		return (err);
	}
	else
	{
		console.log(`${( validateAge(result.age) ) ? 'You are old enough to drive.' : 'You are left with ' + (18 - result.age) + ' years to drive.'}`);
	}
});

function validateAge(age)
{
	/* age string to number */
	age = +age;

	if (age < 18)
	{
		return (false);
	}
	else
	{
		return (true);
	}
}

// Last Edit : 2023-02-24 14:19:13
