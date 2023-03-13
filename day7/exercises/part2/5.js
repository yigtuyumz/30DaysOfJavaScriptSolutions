'use strict';

let variables = {a : 24, b : 42};

function swapValues(obj)
{
	obj.a = obj.a + obj.b;
	obj.b = obj.a - obj.b;
	obj.a = obj.a - obj.b;
}

console.log(variables.a, variables.b);

swapValues(variables);

console.log(variables.a, variables.b);

// Last Edit : 2023-02-25 16:27:27
