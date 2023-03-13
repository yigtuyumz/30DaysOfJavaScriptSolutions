'use strict';

const userList = require('../../../common/arrays').users;
let productList = require('../../../common/arrays').products;


function rateProduct(user, product, point)
{
	/* checking the arguments */
	if (point > 5 || point % 0.5 !== 0 || point < 0)
	{
		process.stdout.write('Wrong point format! (Only 0.5 and its multiples & point must be <= 5)');
		return ;
	}
	if (user === undefined)
	{
		process.stdout.write('User does not exists!');
		return ;
	}
	if (product === undefined)
	{
		process.stdout.write('Product does not exists!');
		return ;
	}
	/* checking the arguments END */

	/* if the user rated this product before */
	for (let i = 0; i < product.ratings.length; i++)
	{
		if (user._id === product.ratings[i].userId)
		{
			process.stdout.write(`The user ${user.username} (ID : ${user._id}) voted "${product.name}, ${product.description} (ID : ${product._id})" before.`);
			return ;
		}
	}
	/* if the user rated this product before END */

	let newRating;

	newRating = {
		userId	:	user._id,
		rate	:	point
	};

	product.ratings.push(newRating);
}


function averageRating(product)
{
	if (product !== undefined && Object.prototype.hasOwnProperty.call(product, 'ratings') && product.ratings.length > 0)
	{
		let total;
		let i;

		total = 0;
		i = 0;
		for (i = 0; i < product.ratings.length; i++)
		{
			total += product.ratings[i].rate;
		}

		return (total / i);
	}
	else
	{
		return ;
	}
}


rateProduct(userList[0], productList[0], 4.5);
process.stdout.write(`\nAverage rating: ${averageRating(productList[0])}`);

// Last Edit : 2023-02-25 16:32:50
