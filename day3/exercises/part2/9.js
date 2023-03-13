'use strict';

const prompt = require('prompt');
prompt.start();


const properties =
[
	{
		name: 'hours',
		warning: 'invalid input, please try again.',
		validator: /^[\d]+$/,
		message: 'Enter hours',
		hidden: false,
	},
	{
		name: 'rate',
		warning: 'invalid input, please try again.',
		validator: /^[\d]+$/,
		message: 'Enter rate per hour',
		hidden: false,
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
		let feed = calculateFeed(result.hours, result.rate);
		console.log(`Your weekly earning is ${feed}`);
	}
});

function calculateFeed(hours, rate)
{
	return (hours * rate);
}

// Last Edit : 2023-02-24 14:09:55
