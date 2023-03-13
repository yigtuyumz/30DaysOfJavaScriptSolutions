'use strict';

/* eslint-disable no-unused-vars */

/* declaring an empty Array */
let arr1 = Array();
let arr2 = new Array();
let arr3 = [];


/* creating array with values */
let numbers = [1, 135, 235, 23, 34, 34, 0, 9];
let teams = ['Galatasaray', 'FC Barcelona', 'Eskişehirspor', 'Şikebahçe', 'Beşiktaş'];


/* element count in an array */
let len = teams.length;
console.log('\'teams\' array has', len, 'elements');


/* In JS, arrays can hold values with different data types. */
let arr4 = [
	'Name',
	200,
	false,
	{ country: 'Finland', city: 'Helinski' },
	{ skills : ['HTML', 'CSS', 'JS', 'Python', 'React'] }
];

/* Modifying array elements */
let arr5 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

for (let i = 0; i < arr5.length; i++)
{
	arr5[i] = 'Turkey';
}

/* last element of an array*/ 
let lastElement = arr5.length - 1;

/* eslint-enable no-unused-vars */

// Last Edit : 2023-02-24 14:24:44
