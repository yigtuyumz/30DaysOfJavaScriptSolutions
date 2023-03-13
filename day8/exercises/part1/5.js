'use strict';

let dog = {
	name		:	'Jax',
	legs		:	4,
	color		:	'#ffff00',
	age			:	53,
	bark() {
		return ('woof woof');
	},
};

dog.breed = 'Afghan Hound';
dog.getDogInfo = function() {
	return (
		'Name : '	+	this.name	+ '\n' +
		'Color : '	+	this.color	+ '\n' +
		'Age : '	+	this.age	+ '\n' +
		'Legs : '	+	this.legs
	);
};

console.log(dog.getDogInfo());

// Last Edit : 2023-02-25 16:29:56
