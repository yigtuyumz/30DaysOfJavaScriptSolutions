'use strict';

const prompt = require('prompt');
prompt.start();

const properties =
[
	/* max age is 100 */
	{
		name			:	'my_age',
		warning			:	'Invalid age, please try again.',
		validator		:	/^100\d{0,3}$|^\d{0,2}$/,
		message			:	'My age is',
		hidden			:	false,
	},
	{
		name			:	'your_age',
		warning			:	'Invalid age, please try again.',
		validator		:	/^100\d{0,3}$|^\d{0,2}$/,
		message			:	'Please enter your age',
		hidden			:	false,
	},
];

prompt.get(properties, function(err, result){
	if (err)
	{
		return (err);
	}
	else
	{
		let comparison = validateAge(result.my_age, result.your_age);
		if (comparison === null)
		{
			console.log('We are at the same age!!');
		}
		else if (comparison === true)
		{
			console.log(`I am ${result.my_age - result.your_age} year(s) older than you.`);
		}
		else
		{
			console.log(`You are ${result.your_age - result.my_age} year(s) older than me.`);
		}
	}
});

function validateAge(myAge, yourAge)
{
	if (Number(myAge) > Number(yourAge))
	{
		return (true);
	}
	else if (myAge < yourAge)
	{
		return (false);
	}
	else
	{
		return (null);
	}
}

// Last Edit : 2023-02-24 14:19:27
