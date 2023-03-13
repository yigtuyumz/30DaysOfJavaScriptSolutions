'use strict';

const myArr = require('../../../common/arrays.js').daysTurkish;

function reverseArray(arr = [])
{

	let j = arr.length - 1;
	
	for (let i = 0; i < (arr.length / 2); i++)
	{
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		j--;
	}
	return (arr);
}

console.log(myArr);
reverseArray(myArr);
console.log(myArr);

// Last Edit : 2023-02-25 16:27:32
