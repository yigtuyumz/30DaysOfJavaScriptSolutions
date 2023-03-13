'use strict';

const characters = require('../../../common/arrays.js').alphanumeric;
const readline = require('readline');
const rL = readline.createInterface({
	input						:		process.stdin,
	output						:		process.stdout,
	completer					:		undefined,
	terminal					:		undefined,
	history						:		undefined,
	historySize					:		undefined,
	prompt						:		undefined,
	crlfDelay					:		undefined,
	removeHistoryDuplicates		:		undefined,
	escapeCodeTimeout			:		undefined,
	tabSize						:		undefined,
});


rL.question('Count: ', (count) => {
	rL.question('Length: ', (len) => {
		if (+count < 0)
		{
			/* When called, the 'close' event will be emitted.*/
			rL.close();
		}
		else
		{
			while (+count !== 0)
			{
				process.stdout.write(userIdGeneratedByUser(+len) + '\n');
				count = +count - 1;
			}
			/* When called, the 'close' event will be emitted.*/
			rL.close();
		}
	});
});


function userIdGeneratedByUser(len = 0)
{
	let id = '';

	/* RNG with range */
	function randomNumberGenerator(min, max)
	{
		/* min and max values are included the range. */
		return parseInt(((Math.random() * (max - min + 1)) + min));
	}

	for (let i = 0; i < len; i++)
	{
		id += characters[randomNumberGenerator(0, characters.length - 1)];
	}

	return (id);
}

/* events */
rL.on('close', function () {
	// console.log('__close_event__');
	process.exit(0);
});

rL.on('line', function () {
	// console.log('__line_event__');
});

rL.on('pause', function () {
	// console.log('__pause_event__');
});

rL.on('resume', function () {
	// console.log('__resume_event__');
});
rL.on('SIGCONT', function () {
	// console.log('__SIGCONT_event__');
});

rL.on('SIGINT', function () {
	// console.log('__SIGINT_event__');
});

rL.on('SIGTSTP', function () {
	// console.log('__SIGTSTP_event__');
});

rL.on('history', function () {
	// console.log('__history_event__');
});

// Last Edit : 2023-02-25 16:28:27
