'use strict';

const prompt = require('prompt');
prompt.start();


const properties =
[
/*
	{
		name: 'username',
		validator: /^[a-zA-Z\s-]+$/,
		warning: 'Username must be only letters, spaces, or dashes'
	},
	{
		name: 'password',
		hidden: true
	},
	{
		name: 'security',
		hidden: false
	}
*/
	{
		name: 'base',
		warning: 'invalid input, please try again.',
		validator: /^[\d]+$/,
		hidden: false
	},
	{
		name: 'height',
		warning: 'invalid input, please try again.',
		validator: /^[\d]+$/,
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
		let area = triangleArea(result.base, result.height);
		console.log('Area of the triangle is : ', area);
		return (area);
	}
});

function triangleArea(base, height)
{
	base = +base;		/* typecasting String to Number */
	height = +height;	/* typecasting String to Number */

	return (base * height / 2);
}

// Last Edit : 2023-02-24 14:08:56
