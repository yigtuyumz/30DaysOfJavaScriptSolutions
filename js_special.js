'use strict';

/* eslint-disable */

/**
 * @description A `for` loop that can access all elements of the array.
 */
function accessAllElements()
{
	const arr = ["Apple", "Banana", "Orange"];
	for (let x of arr)
	{
		console.log(x);
	}
}


/**
 * @description sleep(milliseconds) in JS. Because of sleep function is a Promise, it can be used only in async functions. 
 */
function sleepInJs()
{
	const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
	async function test(){await sleep(10000);/* code here... */}
	test();
}


/**
 * @description Capitalize a word.
 */
function capitalizeFirstLetter(string)
{
	return (string.charAt(0).toUpperCase() + string.slice(1));
}


/**
 * @description ASCII to char
 */
function ASCIItoChar(arr)
{
	return (String.fromCharCode(...arr));
}


/**
 * @description RNG with range
 */
function randomNumberGenerator(min, max)
{
	/* min and max values are included the range. */
	return (parseInt(((Math.random() * (max - min + 1)) + min)));
}


/**
 * @description Random HEX color code generator
 */
function randomHex()
{
	var arr = [];
	arr.unshift('#');
	arr.push(Math.floor((Math.random()*256*256*256) - 1).toString(16));
	arr = arr.join('');
	return (arr);
}


/**
 * @description Reverses an array without using reverse method.
 */
function reverseArray(arr)
{
	var j = arr.length - 1;
	for (let i = 0; i < (arr.length / 2); i++)
	{
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
		j--;
	}

	return (arr);
}


/**
 * @description Get all arguments in arrow function
 */
function getAllArguments()
{
	((...args) => {
		for (let element of args)
		{
			console.log(element);
		}
	})(1, 2, 3, 4, 5, 6, 7);
}


/**
 * @description SQL Formatted Current Timestamp
 */
function current_timestamp()
{
	let d = new Date();

	let month = (+d.getMonth() < 10 ? ('0' + (+d.getMonth() + 1)) : (+d.getMonth() + 1));
	let day = (+d.getDate() < 10 ? ('0' + (+d.getDate()) ) : d.getDate());
	let hour = (+d.getHours() < 10 ? ('0' + (+d.getHours())) : d.getHours());
	let mins = (+d.getMinutes() < 10 ? ('0' + (+d.getMinutes())) : d.getMinutes());
	let secs = (+d.getSeconds() < 10 ? ('0' + (+d.getSeconds())) : d.getSeconds());
	let currDate = `${d.getFullYear()}-${month}-${day} ${hour}:${mins}:${secs}`;

	return (currDate);
}


/**
 * @description
 * Generates unique user ID for registering users to the database.
 * @param len
 * Character count of the ID. If isNaN or undefined or less than zero, @returns empty string.
 * Otherwise, @returns
 * The string (ID value)
 */
function generateUID(len) {
	if (len < 0 || isNaN(len) || len === undefined) {
		return ('');
	}
	let randomIndex;
	let str;

	str = '';
	while (len !== 0) {
		/* ASCII code of len.th character */
		randomIndex = randomNumberGenerator(48, 122);
		if ((randomIndex > 57 && randomIndex < 65) || (randomIndex > 90 && randomIndex < 97)) {
			continue;
		}
		str += String.fromCharCode(randomIndex);
		len--;
	}
	return (str);
}


/**
 * @description Compares @param dest[] and @param src[]
 * if dest and src is same, @returns {boolean} true
 */
function isSameArr(dest = [], src = [])
{
	if (dest.length !== src.length)
	{
		return (false);
	}

	let i = 0;
	let j = src.length;

	while (i !== j)
	{
		if (dest[i] !== src[i])
		{
			console.log(`function stopped at index ${i}`);
			return (false);
		}
		i++;
	}
	return (true);
}


/**
 * @description
 * Checks whether if @param src and @param dest contains same values. \
 * The order of the values may be different.
 */
function isSameArrExtended(src = [], dest = [])
{
	src = src.sort();
	dest = dest.sort();

	if (src.length !== dest.length) {
		return (false);
	}
	let j;
	for (let i = 0; i < src.length; i++) {
		/* if arrays are sorted, (j = i), otherwise (j = 0) */
		j = i;

		while (dest[j] !== src[i] && j++ < dest.length);

		if (j >= dest.length) {
			return (false);
		}
	}
	return (true);
}


/**
 * @description Removes specified value from the array, and returns the new array.
 * @param {[]} arr
 * @param {*} value
 */
function removeItemFromArray(arr, value)
{
	let index = arr.indexOf(value);

	/* if arr has value, then remove it. */
	if (index > -1)
	{
		arr.splice(index, 1);
	}

	return (arr);
}


/**
 * @description A self-executing function
 */
function selfExecutingFunction(n = '')
{
	(function(param){ console.log(param) })(n);
}


/**
 * @description Function wrapping
 */
 /* console.log */	(((x) => ((m) => ((n) =>{return (n + m + x);})(100))(200))(500));


/**
 * @description Concats two arrays with spread syntax.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax Detailed Information}
*/
function concatArraysWithSpread(arr1, arr2)
{
	return ([...arr1, ...arr2]);
}


/**
 * @description This function invokes itself and takes only one parameter.
*/
function selfInvokedOneParameterArrowFunction()
{
	(a => console.log(a)) ('Hello, There!');
}


/* eslint-enable */
// Last Edit : 2023-02-25 10:35:09
