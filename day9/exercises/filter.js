'use strict';

const d = [1, 36, 3, 2, 7, 57, 4, 19, 9, 21, 72, 6];

const d2 = d.filter((e) => (e % 2 === 0 && e % 3 === 0 ));

console.log(d2);

///////////////////////////////////////////////////////////////////////////////

const scores = [
	{ name: 'Asabeneh', score: 95 },
	{ name: 'Lidiya', score: 98 },
	{ name: 'Mathias', score: 80 },
	{ name: 'Elias', score: 50 },
	{ name: 'Martha', score: 85 },
	{ name: 'John', score: 100 },
];


const passedScores = scores.filter((e) => {
	return (e.score > 80);
});

console.log(passedScores);

///////////////////////////////////////////////////////////////////////////////

const passedValues = scores.filter((e) => {
	return(e.name.startsWith('M'));
});

console.log(passedValues);

///////////////////////////////////////////////////////////////////////////////

// Last Edit : 2023-02-25 16:33:19
