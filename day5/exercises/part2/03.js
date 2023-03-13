'use strict';

const shoppingList = require('../../../common/arrays.js');

function modifyList(arr = [])
{
	/* adding 'Meat' at index 0 */
	arr.unshift('Meat');

	/* adding 'Sugar' at the end of the array */
	arr.push('Sugar');

	/* removing 'Honey' */
	let isAllergic = true;
	if (isAllergic)
	{
		arr.splice(arr.indexOf('Honey'), 1);
	}

	/* modify 'Tea' to 'Green Tea' */
	arr[arr.indexOf('Tea')] = 'Green Tea';


	return (arr);
}

modifyList(shoppingList.shoppingCart);

console.log(shoppingList.shoppingCart);


// Last Edit : 2023-02-24 18:03:46
