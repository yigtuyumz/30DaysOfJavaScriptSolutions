'use strict';

let arr = [1, 2, 3];

function callback(prev, curr, index, arr)
{
	console.log(`index : ${index}\tArray : [${arr}]`);
	return (prev + curr);
}

let val = arr.reduce(callback);

console.log(val);

// Last Edit : 2023-02-17 13:39:07
