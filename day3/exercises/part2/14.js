'use strict';

const prompt = require('prompt');
prompt.start();


const properties =
[
	{
		name: 'year',
		warning: 'invalid year, please try again.',
		/* max age is 100 */
		validator: /^100\d{0,3}$|^\d{0,2}$/,
		message: 'Enter number of years you live',
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
		console.log(`You lived ${calculate(result.year)} seconds.`);
	}
});

function calculate(year)
{
	return (+year * 365 * 24 * 60 * 60);
}

// Last Edit : 2023-02-24 14:15:46
