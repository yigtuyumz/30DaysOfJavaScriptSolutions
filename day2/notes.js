'use-strict';

/*
Data types can be divided into two:

%	Primitive data types

		Number
		String
		Boolean
		Null
		Undefined
		Symbol

	immutable (the data is non-modifiable)


%	Non-primitive data types(Object References)

		Object
		Array

	mutable (the data is modifiable)

*/

let word = 'JavaScript';
word[0] = 'A';			// string is immutable
console.log(word);		// expected output : `JavaScript`

let word2 = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'];
word2[0] = 'A';			// array is mutable
console.log(word2);		// expected output : `'A', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'`

// Last Edit : 2023-02-24 14:03:21

