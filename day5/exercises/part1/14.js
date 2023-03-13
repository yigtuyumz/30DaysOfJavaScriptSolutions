'use strict';

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];


function getAns(character, arr = [])
{
	if (character.length !== 1)
	{
		return ('Wrong character input. Length must be equal to 1');
	}
	if (!(Array.isArray(arr)))
	{
		return ('Input must be an array.');
	}
	if (arr.length === 0)
	{
		return ('Empty Array.');
	}

	let returnArr = [];
	let index = 0;

	for (let i = 0; i < arr.length; i++)
	{
		let iStr = arr[i].split('');
		let charCount = 0;
		for (let j = 0; j < iStr.length; j++)
		{
			if (iStr[j] === character)
			{
				charCount++;
			}
		}

		if (charCount > 1)
		{
			returnArr[index++] = arr[i];
		}
	}
	return (returnArr);
}

let ans = getAns('o', itCompanies);
console.log(ans);

// Last Edit : 2023-02-24 14:27:24
