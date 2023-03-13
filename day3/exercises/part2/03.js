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
		name: 'width',
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
		let area = rectArea(result.width, result.height);
		let perimeter = rectPerimeter(result.width, result.height);
		console.log('Area of the rectangle is : ', area);
		console.log('Perimeter of the rectangle is : ', perimeter);
	}
});

function rectArea(width, height)
{
	width = +width;		/* typecasting String to Number */
	height = +height;	/* typecasting String to Number */

	return (width * height);
}

function rectPerimeter(width, height)
{
	width = +width;		/* typecasting String to Number */
	height = +height;	/* typecasting String to Number */

	return (2 * (width + height));
}

// Last Edit : 2023-02-24 14:09:26
