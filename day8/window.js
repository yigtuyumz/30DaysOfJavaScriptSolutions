/* eslint-disable */

var testArr = [
	'HTML',
	'CSS',
	'JS',
	'React',
	'Redux',
	'Node',
	'MongoDB'
];


/*
	global scope variable defining
	without using keywords, variables goes under the 'window' object.
*/
a = 10;

/* this refers to 'window object'. */
console.log('this.a : ', this.a);

/* let is block scoped */
{
	/* if a was not reassigned, its value would be 10. (same as last assignment) */
	let a = 100;

	/* in inner block, a is 100 */
	console.log('Inner block a :', a);
}

/* in outer block, a is 10 */
console.log('Outer block a :', a);







/* An object is a key value pair. */

/* creating object */

let obj1 = {};

/* creating object with values */

let obj2 =
{
	width		:	100,
	height		:	50
};

/* accessing object values */

let obj2_value1 = obj2.width;		/* 100 */
let obj2_value2 = obj2.height;		/* 50 */

/* creating object methods */

let obj3 =
{
	width		:	220,
	height		:	10,

	getArea		: function () {
		/* 'this' refers this object. */
		// return (obj3.width * obj3.height);
		return (this.width * this.height);
	}
};

console.log('obj3 \'getArea()\' method is called :', obj3.getArea());



/* The arrow function in an object, takes the keyword `this` from the same scope in which the object is defined. */
/* in this case this === window object */
arrowFunctionThis = 'arrowFunctionThis';
let person =
{
	firstName		:	'wagabond',
	lastName		:	'12',
	age				:	999,
	country			:	'Cherry',
	city			:	'Raspberry',
	skills			:	testArr,

	getSkills		:	function () {
		return (this.skills);
	},

	getSkills2() {
		return (this.skills);
	},

	/* The `this` within the arrow is the one that was current where you defined the object. */
	getSkills3		:	() => {
		/* undefined */
		return (this.arrowFunctionThis);
	}
};

console.log('person.getSkills3() : ', person.getSkills3());



/* An object is a mutable data structure and we can modify the content of an object after it gets created. */

person.isMarried = false;
person.skills.push('c++');

person.getPersonInfo = function () {
	return (this.firstName + this.lastName + '\nisMarried : ' + this.isMarried + '\nSkills : ' + this.skills);
}
/*****************************************************************************/

console.log('\n----------Person Info----------\n' + person.getPersonInfo() + '\n--------------END--------------\n');

console.log(this)		/* window in browser, nothing in node console */



console.log('Object Keys (person)\n' + Object.keys(person) + '\n\n');
console.log('Object Values (person)\n' + Object.values(person) + '\n\n');
console.log('Object Keys->Values (person)\n' + Object.entries(person) + '\n\n');



/* Checking properties using hasOwnProperty() */
console.log(person.hasOwnProperty('firstName'));
console.log(person.hasOwnProperty('score'));

/* eslint-enable */

// Last Edit : 2023-02-25 16:33:07
