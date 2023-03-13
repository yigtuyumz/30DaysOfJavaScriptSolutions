'use strict';

/* creating an empty array which has 8 empty items. */
const arr = new Array(8);

console.log(arr);


/* fill() fills all the array elements with a static value */
let arr2 = new Array(5).fill(0);
console.log(arr2);


/* concat() concatenate 2 arrays */
let arr3 = arr.concat(arr2);
console.log(arr3);


/* length() to get array size */
let len = arr3.length;
console.log('length of arr3 is : ', len);


/* indexOf(element) returns the first index that element occurs. otherwise returns -1 */
let isContain = arr3.indexOf(0);
console.log(isContain);


function checkElement(array, fruit)
{
	/* is banana in arr1 ?? */
	let control = array.indexOf(fruit);

	/* checking */
	if (control === -1)
	{
		console.log('\'' + fruit + '\'', 'is not in the array.');
	}
	else
	{
		console.log('array has \'' + array[control] + '\' and its index is', control);
	}

	/* checking with ternary */
	console.log(`${( control === -1 ) ? 'doesn\'t exists..' : 'element exists at index[' + control + ']'}`);
}
checkElement(['mango', 'apple', 'cherry', 'banana', 'watermelon'], 'banana');


/* lastIndexOf(element) gives last occurance, otherwise returns -1 */
let arr6 = [1, 25, 653, 3, 1, 2, 7, 9, 3, 0, 2, 5, 31, 6, 9, 8];
console.log(`array: ${arr6}\n\tthe last index of element '1' is: ${arr6.lastIndexOf(1)}`);


/* Array.isArray() checks if the variable is array */
let arr7 = [];
console.log(Array.isArray(arr7));


/* toString() converts array to string, similiar join() default */
let arr8 = [1, 2, 3, 4, 5];
console.log(arr8.toString());


/* join(string) converts array to string but inside, we can specify the character. */

let arr9 = ['wagabond', '12'];
console.log(arr9.join(''));


/* slice(start, end) To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position. */
let arr10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr10.slice(1,3));
console.log(`slices all items ${arr10.slice()}`);

// TODO splice.js
/* splice(start, deleteCount, item1, item2, itemN) */
let arr11 = ['b', 'c', 'd', 'e', 'f', 'g', 'h'];
arr11.splice(0, 0, 'a');			/* inserts at beginning, removes nothing. */
arr11.splice(1, 3, 'b', 'c', 'd');	/* inserts at 1, removes three element after first element, then puts values into array. */
console.log(arr11);


/* push(value) inserts the value at the end of the array. */
let arr12 = [ {a : 'a', b : 'b'}, 25, 32, 'wagabond' ];
arr12.push( { c : 'c', d : 'd' } );
console.log(arr12);


/* pop() removes the value at the end of the array. */
arr12.pop();
console.log(arr12);


/* shift() similiar to the rotate left, shifts 1 step left, so that the first element disappears. */
arr12.shift();
console.log(arr12);


/* unshift(element0, element1, elementN) similar to the rotate right. shifts 1 step right, so that needs an element to insert into the beginning of the array. */
arr12.unshift('i am unshifted.');
console.log(arr12);


/* reverse() reverses the array. */
arr12.reverse();
console.log(arr12);


/* sort(compareFunction) sorts the array. */
let arr13 = ['z', 'a', 'd', 'b', 'o'];
arr13.sort();

console.log(arr13);


/* 2D arrays */
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let arr14 = [];
arr14.push(a1, a2);
console.log(arr14);

// Last Edit : 2023-02-24 14:23:31
