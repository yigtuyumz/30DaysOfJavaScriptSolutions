'use strict';

function randomRGBA()
{
	let arr = [];
	
	let R = Math.floor((Math.random()*256));
	let G = Math.floor((Math.random()*256));
	let B = Math.floor((Math.random()*256));
	let A = (Math.random().toFixed(3));

	arr.push('rgba(', R, ', ', G, ', ', B, ', ',A , ')');

	return(arr.join(''));
}

function randomRGB()
{
	let color = 'rgb(';
	
	let R = (Math.floor((Math.random()*256))).toString();
	let G = (Math.floor((Math.random()*256))).toString();
	let B = (Math.floor((Math.random()*256))).toString();

	color += R + ', ' + G + ', ' + B + ')';

	return(color);
}

function randomRGBA2()
{
	let color = 'rgba(';
	
	let R = (Math.floor((Math.random()*256))).toString();
	let G = (Math.floor((Math.random()*256))).toString();
	let B = (Math.floor((Math.random()*256))).toString();
	let A = (Math.random().toFixed(3)).toString();

	color += R + ', ' + G + ', ' + B + ', ' + A + ')';

	return(color);
}

console.log(randomRGB());
console.log(randomRGBA());
console.log(randomRGBA2());


// Last Edit : 2023-02-25 16:24:03
