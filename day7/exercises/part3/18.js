'use strict';

const specialCharList = require('../../../common/arrays.js').specialCharacters;


/* O(1) */
function isValidVariableName(name)
{
	let len = 0;
	let counter = 0;
	/* if first char is digit */
	if ((name[len] === '0') || (name[len] === '1') || (name[len] === '2') || (name[len] === '3') || (name[len] === '4') || (name[len] === '5') || (name[len] === '6') || (name[len] === '7') || (name[len] === '8') || (name[len] === '9'))
	{
		return (false);
	}

	/* if variable name contains special characters */
	while (len !== name.length)
	{
		if (counter < specialCharList.length)
		{
			/* excepts '$' or '_' */
			if (specialCharList[counter] === '$' || specialCharList[counter] === '_')
			{
				counter++;
				continue ;
			}
			else
			{
				if (name[len] === specialCharList[counter])
				{
					return (false);
				}
			}
			counter++;
		}

		if (counter === specialCharList.length)
		{
			len++;
			counter = 0;
		}
	}
	return (true);
}


/* O(n^2) */
function isValidVariableName2(name)
{
	/* if first char is digit */
	if ((name[0] === '0') || (name[0] === '1') || (name[0] === '2') || (name[0] === '3') || (name[0] === '4') || (name[0] === '5') || (name[0] === '6') || (name[0] === '7') || (name[0] === '8') || (name[0] === '9'))
	{
		return (false);
	}

	for (let i = 0; i < name.length; i++)
	{
		for (let j = 0; j < specialCharList.length; j++)
		{
			if (specialCharList[j] !== '$' && specialCharList[j] !== '_')
			{
				if (name[i] === specialCharList[j])
				{
					return (false);
				}
			}
		}
	}
	return (true);
}


let variableName = '$_xX_camPer26_Xx_$';

console.log(isValidVariableName(variableName));
console.log(isValidVariableName2(variableName));

// Last Edit : 2023-02-24 18:09:57
