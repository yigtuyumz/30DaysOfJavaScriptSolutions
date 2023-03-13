'use strict';

const countries = require('../../../common/arrays.js').countryList;

console.log(((arr) => {
	
	let land = [];
	let noLand = [];
	
	for (let i = 0; i < arr.length; i++)
	{
		/* if search value success, it returns starting index of searched value. else returns -1 */
		let searchVal = arr[i].search('land');

		if (searchVal > 0)
		{
			land.push(arr[i]);
		}
		else
		{
			noLand.push(arr[i]);
		}
	}


	if (land.length === 0)
	{
		return (noLand);
	}
	else
	{
		return (land);
	}

})(countries));

// Last Edit : 2023-02-24 17:53:08
