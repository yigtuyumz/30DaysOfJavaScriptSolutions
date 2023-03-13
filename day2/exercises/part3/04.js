'use strict';

let str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
str = str.split(' ');

console.log(str);

let numbers = [];
let j = 0;

for (let i = 0; i < str.length; i++)
{
	if (str[i].search(/[^0-9]/gm))
	{
		numbers[j] = +str[i];
		j++;
	}
}

let ans = ((numbers[0] + numbers[2]) * 12) + numbers[1];

console.log(ans);

// Last Edit : 2023-02-24 14:02:51
