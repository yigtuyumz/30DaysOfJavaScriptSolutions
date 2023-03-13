'use strict';

const userList = require('../../../common/objects.js').users;
let usersLoggedIn = 0;
let okScore = 0;

Object.keys(userList).forEach(key => {
	if (userList[key].isLoggedIn === true)
	{
		usersLoggedIn++;
	}

	if (userList[key].points >= 50)
	{
		okScore++;
	}
});


console.log(`${usersLoggedIn} user(s) are currently logged in.`);
console.log(`${okScore} user(s) have a score greater or equal than 50.`);

// Last Edit : 2023-02-25 16:30:07
