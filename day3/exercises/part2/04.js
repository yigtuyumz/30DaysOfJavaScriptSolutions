'use strict';

const prompt = require('prompt');
prompt.start();
const PI = Math.PI;

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
		name: 'radius',
		warning: 'invalid input, please try again.',
		validator: /^[\d]+$/,
		hidden: false
	},
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
		let perimeter = circlePerimeter(result.radius);
		let area = circleArea(result.radius);
		console.log('Perimeter of the circle is : ', Number(perimeter.toFixed(3)));
		console.log('Area of the circle is : ', Number(area.toFixed(3)));
	}
});

function circlePerimeter(radius)
{
	radius = Number(radius);	/* typecasting String to Number */

	return (2 * PI * radius);
}

function circleArea(radius)
{
	radius = Number(radius);	/* typecasting String to Number */

	return (PI * Math.pow(radius, 2));
}

// Last Edit : 2023-02-24 14:09:32
