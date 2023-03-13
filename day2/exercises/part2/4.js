'use strict';

let var1 = parseFloat('9.8');

if (var1 !== 10)
{
	var1 = Math.ceil(var1);
}

console.log(`${var1 === 10 ? true : false}`);

// Last Edit : 2023-02-24 13:58:10
