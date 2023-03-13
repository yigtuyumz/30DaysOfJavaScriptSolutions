'use strict';

function isPrime(nb)
{
	let temp = 2;
	
	/* jshint curly: false */
	while (((nb % temp) !== 0) && (temp++ <= nb));
	/* jshint curly: true */
	if (temp === nb)
	{
		return (true);
	}
	else
	{
		return (false);
	}
}

console.log(isPrime(42));

// Last Edit : 2023-02-25 16:28:18
