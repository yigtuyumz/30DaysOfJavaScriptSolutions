'use strict';

let usersArray = require('../../../common/arrays.js').users;

const exampleUser = {
	_id: 'fVY31z',
	username: 'wagabond12',
	email: 'waga@bond12.com',
	password: 'superSecReTpassWorD1@3',
	createdAt: '23/12/2022 10:54 PM',
	isLoggedIn: false
};

function signUp(userList, user)
{
	/*	es-lint throws `no-prototype-builtins` error.
	if (user.hasOwnProperty('_id') && user.hasOwnProperty('username') && user.hasOwnProperty('email') &&
		user.hasOwnProperty('password') && user.hasOwnProperty('createdAt') && user.hasOwnProperty('isLoggedIn'))
	*/
	if (Object.prototype.hasOwnProperty.call(user, '_id')			&&
		Object.prototype.hasOwnProperty.call(user, 'username')		&&
		Object.prototype.hasOwnProperty.call(user, 'email')			&&
		Object.prototype.hasOwnProperty.call(user, 'password')		&&
		Object.prototype.hasOwnProperty.call(user, 'createdAt')		&&
		Object.prototype.hasOwnProperty.call(user, 'isLoggedIn'))
	{
		for (let i = 0; i < userList.length; i++)
		{
			if (user.username === userList[i].username || user._id === userList[i]._id)
			{
				process.stdout.write('Username or UserID already taken.\n');
				return ;
			}
		}
		userList.push(user);
		process.stdout.write(`User ${user.username}(${user._id}) added successfully.\n`);
	}
}


function signIn(userList, user)
{
	if (userList.includes(user))
	{
		/*	es-lint throws `no-prototype-builtins` error.
		if (user.hasOwnProperty('_id') && user.hasOwnProperty('username') && user.hasOwnProperty('email') &&
			user.hasOwnProperty('password') && user.hasOwnProperty('createdAt') && user.hasOwnProperty('isLoggedIn'))
		*/
		if (Object.prototype.hasOwnProperty.call(user, '_id')			&&
			Object.prototype.hasOwnProperty.call(user, 'username')		&&
			Object.prototype.hasOwnProperty.call(user, 'email')			&&
			Object.prototype.hasOwnProperty.call(user, 'password')		&&
			Object.prototype.hasOwnProperty.call(user, 'createdAt')		&&
			Object.prototype.hasOwnProperty.call(user, 'isLoggedIn'))
		{
			if (user.isLoggedIn === false)
			{
				user.isLoggedIn = true;
				process.stdout.write('User login success.\n');
			}
			else
			{
				process.stdout.write('User is already logged in!\n');
			}
		}
		else
		{
			process.stdout.write('User data is broken.\n');
		}
	}
	else
	{
		process.stdout.write(`User ${user.username}(${user._id}) does not found!\n`);
	}
}


function signOut(userList, user)
{
	if (userList.includes(user))
	{
		/*	es-lint throws `no-prototype-builtins` error.
		if (user.hasOwnProperty('_id') && user.hasOwnProperty('username') && user.hasOwnProperty('email') &&
			user.hasOwnProperty('password') && user.hasOwnProperty('createdAt') && user.hasOwnProperty('isLoggedIn'))
		*/
		if (Object.prototype.hasOwnProperty.call(user, '_id')			&&
			Object.prototype.hasOwnProperty.call(user, 'username')		&&
			Object.prototype.hasOwnProperty.call(user, 'email')			&&
			Object.prototype.hasOwnProperty.call(user, 'password')		&&
			Object.prototype.hasOwnProperty.call(user, 'createdAt')		&&
			Object.prototype.hasOwnProperty.call(user, 'isLoggedIn'))
		{
			if (user.isLoggedIn === true)
			{
				user.isLoggedIn = false;
				process.stdout.write('User logout success.\n');
			}
			else
			{
				process.stdout.write('User is already logged out!\n');
			}
		}
		else
		{
			process.stdout.write('User data is broken.\n');
		}
	}
	else
	{
		process.stdout.write(`User ${user.username}(${user._id}) does not found!\n`);
	}
}

signUp(usersArray, exampleUser);
signIn(usersArray, exampleUser);
signOut(usersArray, exampleUser);

// Last Edit : 2023-02-25 10:16:41
