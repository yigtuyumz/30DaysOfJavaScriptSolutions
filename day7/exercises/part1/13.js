'use strict';

/*
	Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
	Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
	Check if a person is underweight, normal, overweight or obese based the information given below.
*/


/* height in m */
function calculateBMI(mass, height)
{
	let bmi = mass / Math.pow(height, 2);

	return (bmi);
}

function getResult(bmi)
{
	if (bmi < 18.5)
	{
		return ('Underweight');
	}
	else if ((bmi >= 18.5) && (bmi <= 24.9))
	{
		return ('Normal Weight');
	}
	else if ((bmi >= 25) && (bmi <= 29.9))
	{
		return ('Overweight');
	}
	else if (bmi >= 30)
	{
		return ('Obese');
	}
	else
	{
		return ('Wrong Input..');
	}
}

let bmiResult = calculateBMI(65, 1.75);

console.log(bmiResult);
console.log(getResult(bmiResult));


// Last Edit : 2023-02-25 16:25:00
