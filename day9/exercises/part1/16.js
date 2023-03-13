'use strict';

const getStringLists = (array = []) => {
	return (array.filter((e) => {
		return (typeof(e) === 'string');
	}));
};

console.log(getStringLists([1, 2, 'str1']));

// Last Edit : 2023-02-18 13:25:50
