'use strict';

const { day9Data } = require('../../../common/objects');


function callback(accumulator, currentValue)
{
	let x = 0;

	if (typeof(currentValue.price) === 'number')
	{
		x = currentValue.price;
	}
	return (accumulator + x);
}


const totalPrice = day9Data.products.reduce(callback , 0);

console.log(totalPrice);

// Last Edit : 2023-02-21 15:41:56
