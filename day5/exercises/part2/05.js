'use strict';


const techs = require('../../../common/arrays.js');

function checkTech(techList, techName)
{
	if (techList.indexOf(techName) === -1)
	{
		techList.push(techName);
		console.log(techList);
	}
	else
	{
		console.log('Sass is a CSS preprocessor.');
	}
}

checkTech(techs.techList, 'Sass');

// Last Edit : 2023-02-24 18:04:17
