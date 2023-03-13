'use strict';

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

function currentTimestamp()
{
	let d = new Date();

	let month = (+d.getMonth() < 10 ? ('0' + (+d.getMonth() + 1)) : (+d.getMonth() + 1));
	let day = (+d.getDate() < 10 ? ('0' + (+d.getDate()) ) : d.getDate());
	let hour = (+d.getHours() < 10 ? ('0' + (+d.getHours())) : d.getHours());
	let mins = (+d.getMinutes() < 10 ? ('0' + (+d.getMinutes())) : d.getMinutes());
	let secs = (+d.getSeconds() < 10 ? ('0' + (+d.getSeconds())) : d.getSeconds());
	let currDate = `${d.getFullYear()}-${month}-${day} ${hour}:${mins}:${secs}`;

	return (currDate);
}

async function main()
{
	for (let loopCount = 3; loopCount !== 0; --loopCount)
	{
		console.log(currentTimestamp());
		/* print 2 times the TIMESTAMP_CURR, */
		if (loopCount === 2)
		{
			break;
		}
		else
		{
			/* with 1 sec delay. */
			await sleep(1000);
		}
	}
}

main();

// Last Edit : 2023-02-24 14:16:15
