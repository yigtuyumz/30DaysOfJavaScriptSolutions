'use strict';

/* raises an alert on page load. */
let message = 'This is an alert text.';
alert(message);

/* prompt, stores the input. */
let number = prompt('Header', 'Your Input Goes Here.');
/* typecasting to integer. */
number = +number;

if (isNaN(number))
{
	console.log('please provide a numerical value.');
}
else
{
	console.log(number);
}


/* if user clicks Ok, agree is true, else false. */
const agree = confirm('Are you sure about that?');

if (agree)
{
	console.log(agree);
}
else
{
	console.log('Coward!!');
}

// Last Edit : 2023-02-24 14:05:35
