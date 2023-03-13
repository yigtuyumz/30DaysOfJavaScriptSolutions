'use strict';

function randomUserIp()
{
	let ipAddress = '';
	/* RNG with range */
	function randomNumberGenerator(min, max)
	{
		/* min and max values are included the range. */
		return parseInt(((Math.random() * (max - min + 1)) + min));
	}

	for (let i = 0; i < 4; i++)
	{
		ipAddress += randomNumberGenerator(0, 255);
		if (i !== 3)
		{
			ipAddress += '.';
		}
	}
	return (ipAddress);
}


console.log(randomUserIp());

// Last Edit : 2023-02-25 16:26:41
