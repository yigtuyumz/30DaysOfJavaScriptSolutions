'use strict';

let weather = 'cloudy';
switch (weather)
{
case 'rainy':
{
	console.log('You need a rain coat.');
	break;
}
case 'cloudy':
{
	console.log('It might be cold, you need a jacket.');
	break;
}
case 'sunny':
{
	console.log('Go out freely.');
	break;
}
default:
{
	// if no conditions are met then this part runs.
	console.log('No need for rain coat.');
}
}

/* eslint-disable no-constant-condition */
/* same as switch */
while (true)
{
	if (weather === 'rainy')
	{
		console.log('You need a rain coat.');
		break;
	}
	else if (weather === 'cloudy')
	{
		console.log('It might be cold, you need a jacket.');
		break;
	}
	else if (weather === 'sunny')
	{
		console.log('Go out freely.');
		break;
	}
	else
	{
		console.log('No need for rain coat.');
		break;
	}
}
/* eslint-enable no-constant-condition */

// Last Edit : 2023-02-24 14:17:58
