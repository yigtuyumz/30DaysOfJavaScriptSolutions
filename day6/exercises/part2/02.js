function randomHex()
{
	'use strict';
	let arr = [];
	arr.unshift('#');
	arr.push(Math.floor((Math.random()*256*256*256) - 1).toString(16));
	arr = arr.join('');
	return (arr);
}

console.log(randomHex());

// Last Edit : 2023-02-25 16:23:55
