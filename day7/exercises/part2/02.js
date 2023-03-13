'use strict';

function solveQuadEquation(a, b, c)
{
	if (a === 0)
	{
		return ('Not a quadratic equation. \'a\' shouldn\'t be zero.');
	}

	let root1;
	let root2;
	let discriminant;
	
	discriminant = Math.pow(b, 2) - (4 * a *c);

	if (discriminant > 0)
	{
		root1 = ((-1 * b) + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
		root2 = ((-1 * b) - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

		return ({root1 : root1, root2 : root2});
	}
	else if (discriminant === 0)
	{
		root1 = (b / (2 * a) * -1);
		root2 = root1;

		return ({root1 : root1, root2 : root2});
	}
	else
	{
		return (-1);
	}
}

console.log(solveQuadEquation(3, 60, 3));

// Last Edit : 2023-02-25 16:27:02
