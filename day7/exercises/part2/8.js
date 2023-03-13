'use strict';

let myArr = ['myolditem'];

function addItem(item)
{
	let arr = myArr;
	for (let i = 0; i < arguments.length; i++)
	{
		arr.push(item);
	}

	return (arr);
}

function addItemExtended()
{
	let arr = myArr;
	for (let i = 0; i < arguments.length; i++)
	{
		arr.push(arguments[i]);
	}
	return (arr);
}

console.log(addItemExtended('newitem', 'newitem2', 5, {}, [2], Math.E));
console.log(addItem('newitem'));

// Last Edit : 2023-02-25 16:27:37
