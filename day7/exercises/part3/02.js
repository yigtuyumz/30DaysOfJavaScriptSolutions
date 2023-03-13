'use strict';
function rgbColorGenerator()
{
	let arr = [];
	
	let R = Math.floor((Math.random()*256));
	let G = Math.floor((Math.random()*256));
	let B = Math.floor((Math.random()*256));

	arr.push('rgb(', R, ', ', G, ', ', B, ')');

	return(arr.join(''));
}

console.log(rgbColorGenerator());

// Last Edit : 2023-02-25 16:28:32
