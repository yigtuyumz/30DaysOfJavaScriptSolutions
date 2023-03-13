'use strict';

/**
 * Returns timestamp.
 * @param {Number} x : Timestamp format.
 * @example
 * x = 1 -> YYYY-MM-DD HH:mm:SS
 * x = 2 -> DD-MM-YYYY HH:mm:SS
 * x = 3 -> DD/MM/YYYY HH:mm:SS
 * @return {String} timestamp
 */
function timeStamp(x)
{
	let d = new Date();
	let year = (+d.getFullYear());
	let month = (+d.getMonth() < 10 ? ('0' + (+d.getMonth() + 1)) : (+d.getMonth() + 1));
	let day = (+d.getDate() < 10 ? ('0' + (+d.getDate()) ) : d.getDate());
	let hour = (+d.getHours() < 10 ? ('0' + (+d.getHours())) : d.getHours());
	let mins = (+d.getMinutes() < 10 ? ('0' + (+d.getMinutes())) : d.getMinutes());
	let secs = (+d.getSeconds() < 10 ? ('0' + (+d.getSeconds())) : d.getSeconds());
	
	let currdateFormat1 = `${year}-${month}-${day} ${hour}:${mins}:${secs}`;
	let currdateFormat2 = `${day}-${month}-${year} ${hour}:${mins}:${secs}`;
	let currdateFormat3 = `${day}/${month}/${year} ${hour}:${mins}:${secs}`;
	if (x === 1)
	{
		return (currdateFormat1);
	}
	else if (x === 2)
	{
		return (currdateFormat2);
	}
	else if (x ===3)
	{
		return (currdateFormat3);
	}
	else
	{
		return ('Wrong Input!!');
	}
}

console.log(timeStamp(1));

// Last Edit : 2023-02-24 14:15:51
