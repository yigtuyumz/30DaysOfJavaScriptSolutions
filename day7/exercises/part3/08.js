'use strict';

let testArray = [0, 1, 2, 3, 4, 5, 6];

console.log(`Before shuffle: ${testArray}`);


/**
 * @param {Array} arr List to shuffle
 * 
 * See {@link https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle Fisher-Yates Shuffle Algorithm}
 */
function shuffleArray(arr = [])
{
	for (let i = 0; i < arr.length; i++)
	{
		let randomElementIndex = parseInt((Math.random() * (i + 1)));
		/* swap array elements */
		let temp = arr[i];
		arr[i] = arr[randomElementIndex];
		arr[randomElementIndex] = temp;
		/* END */
	}
	return (arr);
}

console.log(`After shuffle:  ${shuffleArray(testArray)}`);

// Last Edit : 2023-02-25 16:29:02
