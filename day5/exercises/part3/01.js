'use strict';


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sortedAges = ages.sort();
let minAge = sortedAges[0];
let maxAge = sortedAges[sortedAges.length - 1];

let average = 0;
for (let i = 0; i < sortedAges.length; i++)
{
	average += sortedAges[i];
}
average /= sortedAges.length;

/* eslint-disable no-unused-vars */
let median = (sortedAges.length % 2) ? sortedAges[(sortedAges.length - 1) / 2] : ((sortedAges[sortedAges.length / 2] + sortedAges[(sortedAges.length / 2) - 1]) / 2);
let range = maxAge - minAge;
/* eslint-enable no-unused-vars */


if (Math.abs(minAge - average) > Math.abs(maxAge - average))
{
	console.log('Min is Greater');
}
else if (Math.abs(minAge - average) < Math.abs(maxAge - average))
{
	console.log('Max is Greater');
}
else
{
	console.log('Equal.');
}

// Last Edit : 2023-02-24 14:30:24
