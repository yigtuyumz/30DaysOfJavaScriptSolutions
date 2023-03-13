'use strict';

/*
	Object Methods

		Object.assign()				:	To copy an object without modifying the original object.
		Object.keys()				:	To get the keys or properties of an object as an array.
		Object.values()				:	To get values of an object as an array.
		Object.entries()			:	To get the keys and values in an array.
		Object.hasOwnProperty()		:	To check if a specific key or property exist in an object.
*/

const userList = require('../../../common/objects').users;

let newUser = {
	wagabond12 : {
		email			:	'wagabond12@wagabond.com',
		skills			:	['C', 'JavaScript', 'Bash', 'FreeBSD', 'Nginx', 'MariaDB'],
		age				:	24,
		isLoggedIn		:	false,
		points			:	999
	}
};

Object.assign(userList, newUser);

console.log(userList);
console.log(Object.keys(userList));


// Last Edit : 2023-02-25 16:30:17
