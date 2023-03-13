'use-strict';
/* eslint-disable no-var */

let st1 = 'Hello !';


/* length() gives character count of string */
console.log(st1.length);


/* accessing characters in a string */
/* in js, we can think a string is like a char array in C. */
for (var i = 0; i < st1.length; i++)
{
	console.log(st1[i]);
}


/* toUpperCase() converts all characters to upper case. */
var st2 = 'Goodbye, Cruel World!';
console.log(st2.toUpperCase());


/* toLowerCase() converts all characters to lower case. */
var st3 = 'I am a rich boy.';
console.log(st3.toLowerCase());


/* substr() takes 2 arguments substr(starting index, number of characters) */
/* DEPRECEATED */
var st4 = 'Wow, you are a pyro!';
console.log(st4.substr(0, 3));
/* use substring() instead. */
console.log(st4.substring(0, 3));


/* split() splits string at given character and places all substrings in array. */
var st5 = 'I am gonna be an array, YAY!';
var st5Arr = st5.split(' ');
/* all of content goes as 1 element in the array */
var st5Arr2 = st5.split();
console.log(st5Arr);
console.log(st5Arr2);


/* trim() removes trailing space characters at the end or beginning of the string */
var st6 = '\t         I like you.      \t\t';
console.log(st6.trim());


/* includes(substring) if the substring occurs in the string, this function returns true */
var st7 = 'i am a test string.';
console.log(st7.includes('test'));


/* replace(old_substr, new_substr) changes them. {changes only first occurance of old_substr} */
var st8 = 'i will be changed.';
console.log(st8.replace('i', 'you'));


/* charAt(index) gives the character on the index. */
var st9 = 'lol, lmao';
console.log(st9.charAt(st9.length - 3));


/* charCodeAt(index) returns the ASCII value of the character on the index. */
var st10 = 'abc';
console.log(st10.charCodeAt(0));	// a = 97


/*
	indexOf(substring) gives the starting index of the substring.
	if no substring found in the string, returns -1
*/
var st11 = 'abc def gh';
console.log(st11.indexOf('c de'));


/* lastIndexOf(substring) starting index of the last substring occurance */
var st12 = 'a abc abcd abcde';
console.log(st12.lastIndexOf('a'));


/* concat(strings ...) it takes strings, and joins them together. */
var aa = 'hel';
var bb = 'p';
var cc = ' me!';
var dd = aa.concat(bb, cc);
console.log(dd);


/* startsWith(substr) checks the string starts with substring. */
var st13 = 'aaa bbb ccc ddd';
console.log(st13.startsWith('aaa'));


/* endsWith(substr) checks the string ends with substring. */
var st14 = 'dfgdfrwer wesdf asf seg';
console.log(st14.endsWith('seg'));


/* search(substr) search text in a string, returns first index that matching pattern in the string. */
var st15 = 'Mahmut Kel';
console.log(st15.search('mut'));	/* "mut" starts at index 3 */


/*
	match(substr) it takes a substring or regular expression pattern
	as an argument and it returns an array if there is match if not it returns null.
*/
var st16 = 'yigit uyumaz';
console.log(st16.match('uyumaz'));


/* repeat(n) repeats the string `n` times. */
var st17 = 'top';
console.log(st17.repeat(3));


/*
	slice(start_index, end_index)
	returns sub array
*/
var myArr = ['a', 'b', 'c', 'd', 'e'];
console.log(myArr.slice(0, 2));
/* eslint-enable no-var */

// Last Edit : 2023-02-24 02:45:31
