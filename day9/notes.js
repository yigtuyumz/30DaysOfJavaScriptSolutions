'use strict';

/*
	Callback Functions

		forEach
		filter
		map
		reduce
		every
		find
		findIndex
		some
		sort
*/


///////////////////////////////////////////////////////////////////////////////

const arr1 = [1, 3, 5, 7, 9, 10, 12];

/**
 * @description\
 * The forEach function applies callback on every item of array.
*/
function forEachCallback(currentElement, currentElementIndex, array)
{
	if (array[currentElementIndex] % 2 === 0)
	{
		console.log('%s', currentElement);
	}
}

arr1.forEach(forEachCallback);

///////////////////////////////////////////////////////////////////////////////

/**
 * @description\
 * Filters an array and returns values which provides indicated conditions in callback.
*/
function filterCallback(currentElement, currentElementIndex, array)
{
	if (array[currentElementIndex] % 2 === 0)
	{
		return (currentElement);
	}
}

const arr2 = arr1.filter(filterCallback);
console.log(arr2);

///////////////////////////////////////////////////////////////////////////////

/**
 * @description\
 * map iterates an array over it's elements and modify array elements.\
 * Returns a new array.
*/
function mapCallback(currentElement, currentElementIndex, array)
{
	if (array[currentElementIndex] % 2 === 0)
	{
		return (Math.pow(currentElement, 2));
	}

}

const arr3 = arr2.map(mapCallback);
console.log(arr3);

///////////////////////////////////////////////////////////////////////////////

/**
 * @description\
 * A function that accepts up to four arguments.\
 * The reduce method calls the callback function one time for each element in the array.
*/
function reduceCallback(accumulator, currentElement, currentIndex, array)
{
	/* accumulator, return edilen degere esittir. ilk dongu icin accumulator array[0]'a esittir, cunku henuz herhangi bir sey return edilmemistir. */
	console.log(`accumulator:\t${accumulator}\t\tcurrentElement:\t${array[currentIndex]/*currentElement*/}\t\tcurrentIndex:\t${currentIndex}`);
	return (currentElement);
}

arr1.reduce(reduceCallback);

///////////////////////////////////////////////////////////////////////////////
/* eslint-disable no-unused-vars */
/**
 * @description\
 * Check if all the elements are similar in one aspect.\
 * It returns a boolean value.
*/
function everyCallback(element, index, array)
{
	if (element % 2 === 1)
	{
		return (true);
	}
}

let booleanValue = arr1.every(everyCallback);
console.log(booleanValue);
/* eslint-enable no-unused-vars */
///////////////////////////////////////////////////////////////////////////////

/**
 * @description\
 * Returns the first element that satisfies the providing callback function.\
 *  If no values satisfy the callback function, 'undefined' is returned.
*/
function findCallback(element, index, array)
{
	if ((element % 3 === 0) && (element % 4 === 0))
	{
		return array[index];
	}
}

const val1 = arr1.find(findCallback);
console.log(val1);

///////////////////////////////////////////////////////////////////////////////

/**
 * @description\
 * Returns the position of the first element which satisfies the condition.
*/
function findIndexCallback(element, index, array)
{
	if ((element % 3 === 0) && (element % 4 === 0))
	{
		return array[index];
	}
}

const val2 = arr1.findIndex(findIndexCallback);
console.log(val2);

///////////////////////////////////////////////////////////////////////////////

/**
 * @description\
 * Tests whether at least one element in the array passes the test implemented by the provided function.
*/
function someCallback(element, index, array)
{

	return ((array[index] % 2) === 0);
}

const val3 = arr1.some(someCallback);
console.log(val3);

///////////////////////////////////////////////////////////////////////////////

/**
 * @description\
 * The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.
*/
function sortCallback(element1, element2)
{
	if (element1 < element2)
	{
		/* a value that smaller than 0 */
		return (-24);
	}
	else if (element1 === element2)
	{
		return (0);
	}
	else
	{
		/* a value that greater than 0 */
		return (53);
	}

}

const arr4 = [0b11100001, 0b00001000, 0b10100111, 0b00011011, 0b11111011, 0b01110000, 0b10101011, 0b10101011, 0b11101110, 0b11011010];
const val4 = arr4.sort(sortCallback);
console.log(val4);

///////////////////////////////////////////////////////////////////////////////

// Last Edit : 2023-02-18 13:39:56
