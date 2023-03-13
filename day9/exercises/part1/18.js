'use strict';

const data = require('../../../common/objects').day9Data;

let modifiedArray = (
	(arr = []) => {
		let x = arr.reduce((element, next, index) => {
			if (index < arr.length - 1)
			{
				return (element + ', ' + next);
			}
			else
			{
				return (element + ' and ' + next);
			}
		});

		return (x + ' are north European countries.');
	}
) (data.countries);


console.log(modifiedArray);

// Last Edit : 2023-02-18 13:32:03
