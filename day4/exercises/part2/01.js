'use strict';

function getGrade(score)
{
	if ((score > 89) && (score <= 100))
	{
		return ('A');
	}
	else if ((score >= 70) && (score <= 89))
	{
		return ('B');
	}
	else if ((score >= 60) && (score < 70))
	{
		return ('C');
	}
	else if ((score >= 50) && (score <= 59))
	{
		return ('D');
	}
	else if ((score >= 0) && (score <= 49))
	{
		return ('F');
	}
	else
	{
		return ('Wrong input!');
	}
}


for (let score = 0; score <= 100; score++)
{
	process.stdout.write(score + '\t' + getGrade(score) + '\n');
}

// Last Edit : 2023-02-24 14:19:56
