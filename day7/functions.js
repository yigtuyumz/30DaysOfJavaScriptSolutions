'use strict'; 

/*

	Declaration function
	Expression function
	Anonymous function
	Arrow function

*/


/* declaring a function */
function funcName()
{
	// function block
}
/* calling a function */
funcName();


/* unlimited arguments in a function */

function unlimitedArgs()
{
	/* 'arguments' builtin variable, displays all arguments that used for this function while calling this function. */
	console.log('unlimitedArgs\n', arguments);
	/* this is an object. (key : value) */
	console.log('typeof\t', typeof(arguments));
}

unlimitedArgs(2, 'asd', '5', {a : 'a'}, [4, 'b', 9]);

/* unlimited arguments in arrow function */

const unlimitedArgsinArrowFunction = (...args) => {
	console.log('unlimitedArgsinArrowFunction\n', args);
	console.log('typeof\t', typeof(args));
};
unlimitedArgsinArrowFunction(2, 5, 2, '8');


/* self invoked arrow function */
((...args) => {
	console.log('Unlimited parameters in self invoked arrow function');
	console.log(args);
	console.log('typeof\t', typeof(args));
})(2, 5, 'asd', '9');


/* Anonymous function */
let anonymousFunction = function()
{
	// function without name
	console.log('I am an anonymous function!');
};
anonymousFunction();


/* Function with default values */
function defValues(arr = [], len = arr.length)
{
	console.log(len);
}
defValues();

// Last Edit : 2023-02-25 16:29:16
