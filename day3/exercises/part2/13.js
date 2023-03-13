'use strict';

const prompt = require('prompt');
prompt.start();


const properties =
[
	{
		name: 'year',
		warning: 'invalid year, please try again.',
		/* bigger than 1899 */
		validator: /^[1][9]\d{2}$|^[2]\d{3}$/,
		message: 'Enter birth year',
		hidden: false
	}
];

prompt.get(properties, function (err, result) {
	/*
	if (err)
		// return the return value of anonymous function
		return () => {
			console.log(err);
			return(1);
		};
	*/
	if(err)
	{
		return (err);
	}
	else
	{
		calculate(result.year);
	}
});

function calculate(year)
{
	let d = new Date();
	let thisYear = d.getFullYear();
	let age = thisYear - year;
	if (age > 18)
	{
		console.log(`You are ${age}. You are old enough to drive`);
	}
	else
	{
		console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
	}
}

// Last Edit : 2023-02-24 14:15:42
