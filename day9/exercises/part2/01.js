'use strict';

const { day9Data } = require('../../../common/objects');

const totalPrice = day9Data.products.map(element => element.price).filter(e => typeof(e) === 'number').reduce((a, b) => a + b);

console.log(`totalPrice:\t${totalPrice}`);

///////////////////////////////////////////////////////////////////////////////

const totalPrice2 = (array = []) => {
	return (array.map((e) => {
		return (e.price);
	}).filter((e) => {
		return (typeof(e) === 'number');
	}).reduce((a, b) => {
		return (a + b);
	}));
};

console.log(`totalPrice2:\t${totalPrice2(day9Data.products)}`);

// Last Edit : 2023-02-18 16:07:32
