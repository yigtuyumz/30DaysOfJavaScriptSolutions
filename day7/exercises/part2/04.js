'use strict';

function showDateTime()
{
	let d = new Date();

	let month = (+d.getMonth() < 10 ? ('0' + (+d.getMonth() + 1)) : (+d.getMonth() + 1));
	let day = (+d.getDate() < 10 ? ('0' + (+d.getDate()) ) : d.getDate());
	let hour = (+d.getHours() < 10 ? ('0' + (+d.getHours())) : d.getHours());
	let mins = (+d.getMinutes() < 10 ? ('0' + (+d.getMinutes())) : d.getMinutes());
	let currDate = `${day}/${month}/${d.getFullYear()} ${hour}:${mins}`;

	return (currDate);
}

console.log(showDateTime());

// Last Edit : 2023-02-25 16:27:17
