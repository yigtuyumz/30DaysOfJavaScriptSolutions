'use strict';

const prompt = require('prompt');
prompt.start();

const properties =
[
	/* only numeric values */
	{
		name			:	'number',
		warning			:	'Invalid number, please try again.',
		validator		:	/^\d+$/,
		message			:	'Enter a number',
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
		console.log(oddEven(result.number));
	}
});

function oddEven(nb)
{
	if (nb % 2)
	{
		return (`${nb} is an odd number`);
	}
	else
	{
		return (`${nb} is a even number`);
	}
}

// Last Edit : 2023-02-24 14:19:42
