'use strict';

const userList = require('../../../common/objects.js').users;

let MERNusers = [];

Object.keys(userList).forEach(key => {
	let userSkills = userList[key].skills;
	if(userSkills.includes('MongoDB') && userSkills.includes('Express') && userSkills.includes('React') && userSkills.includes('Node'))
	{
		MERNusers.push(key);
	}
});

console.log('MERN users :', MERNusers);

// Last Edit : 2023-02-25 16:30:12