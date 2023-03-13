'use strict';

/* First remove all the punctuations and change the string to array and count the number of words in the array */

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

/* removing the punctuation */
while (text.indexOf('.') !== -1)
{
	text = text.replace('.', '');
}
while (text.indexOf(',') !== -1)
{
	text = text.replace(',', '');
}
/* END */

let textArray = text.split(' ');
let wordCount = textArray.length;

console.log(`Text has ${wordCount} word(s).`);

// Last Edit : 2023-02-24 14:28:56
