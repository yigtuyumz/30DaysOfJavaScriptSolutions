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

let dogName = dog.name;
let dogLegs = dog.legs;
let dogColor = dog.color;
let dogAge = dog.age;

console.log(dogName, dogLegs, dogColor, dogAge);

// Last Edit : 2023-02-25 16:29:41
