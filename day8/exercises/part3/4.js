'use strict';

const userList = require('../../../common/arrays').users;
let productList = require('../../../common/arrays').products;


/**
 * @description Removes specified value from the array, and returns the new array.
 * @param {[]} arr
 * @param {*} value
 * 
 */
function removeItemFromArray(arr, value)
{
	let index = arr.indexOf(value);

	/* if arr has value, then remove it. */
	if (index > -1)
	{
		arr.splice(index, 1);
	}

	return (arr);
}


function likeProduct(user, product)
{
	let like;
	like = true;
	/* linear pattern. */
	for (let i = 0; i < product.likes.length; i++)
	{
		if (product.likes[i] === user._id)
		{
			like = false;
			break ;
		}
	}

	if (like)
	{
		product.likes.push(user._id);
	}
	else
	{
		removeItemFromArray(product.likes, user._id);
	}
}

let productIndex = 1;

console.log('Users Liked Before :', productList[productIndex].likes);
likeProduct(userList[0], productList[productIndex]);
likeProduct(userList[1], productList[productIndex]);
likeProduct(userList[2], productList[productIndex]);
likeProduct(userList[3], productList[productIndex]);
likeProduct(userList[4], productList[productIndex]);
console.log('Users Liked After :', productList[productIndex].likes);

// Last Edit : 2023-02-25 16:33:00
