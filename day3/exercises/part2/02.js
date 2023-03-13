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
		name: 'a',
		warning: 'invalid input, please try again.',
		validator: /^[\d]+$/,
		hidden: false
	},
	{
		name: 'b',
		warning: 'invalid input, please try again.',
		validator: /^[\d]+$/,
		hidden: false,
	},
	{
		name: 'c',
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
		let perimeter = trianglePerimeter(result.a, result.b, result.c);
		console.log('Perimeter of the triangle is : ', perimeter);
		return (perimeter);
	}
});

function trianglePerimeter(a, b, c)
{
	a = +a;		/* typecasting String to Number */
	b = +b;		/* typecasting String to Number */
	c = +c;		/* typecasting String to Number */

	return (a + b + c);
}

// Last Edit : 2023-02-24 14:09:21
