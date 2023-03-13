'use strict';

const userList = require('../../../common/objects.js').users;

let user = Object.keys(userList);
let mostSkilledUser = '';
let biggest = 0;


user.forEach(key => {
	if (biggest < userList[key].skills.length)
	{
		biggest = userList[key].skills.length;
		mostSkilledUser = key;
	}
});

/*
for (let key of user)
{
	if (biggest < userList[key].skills.length)
	{
		biggest = userList[key].skills.length;
		mostSkilledUser = key;
	}
}
*/

console.log('The most skilled user is', mostSkilledUser + '.');

// Last Edit : 2023-02-25 16:30:01
