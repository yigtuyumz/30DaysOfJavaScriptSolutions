'use strict';
/* eslint-disable */

/*
	Belirtilen array'in her bir elemani uzerinde callback fonksiyonunu
	calistirirve mevcut array'i degistirmeden, yeni bir array olusturur.
*/
///////////////////////////////////////////////////////////////////////////////

const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya',
];
const countryAbbr = countries.map((e) => (e.slice(0 , 3).toUpperCase()));

///////////////////////////////////////////////////////////////////////////////


let array = [2, 4, 8];

function square(e)
{
	return (e * e);
}

array = array.map((element) => square(element));


///////////////////////////////////////////////////////////////////////////////


((e) => (e.map((e) => (e * e))))([2, 4, 8]);


///////////////////////////////////////////////////////////////////////////////


( (e) => {return (e);} )((
	(x) => (x)
)(
	((y) => (y)
	)(
		(z) => {return (z);}
	)('selam')
)
);

///////////////////////////////////////////////////////////////////////////////

function sFunc(x)
{
	function sFunc2(y)
	{
		function sFunc3(z)
		{
			return (z);
		}
		return (sFunc3(y));
	}
	return (sFunc2(x));
}

sFunc('selamettin');

///////////////////////////////////////////////////////////////////////////////


let d = [1, 2, , , , 3];
let d2 = [...d];
d2.length = 100;

///////////////////////////////////////////////////////////////////////////////

const myArr = [3, 5, 8, 9];

const myArr2 = myArr.map((value) => {
	return (value * value);
}).filter((element) => {
	if (element % 2 === 0)
	{
		return (element);
	}
}).map((element) => {
	return (element * 3);
}).every((name) => {
	return (typeof name === 'number');
});

///////////////////////////////////////////////////////////////////////////////

const arrayWithObjects = {
	innerObj : {
		tags : [
			{tagName : 'tag0', tagID : 0},
			{tagName : 'tag1', tagID : 1},
			{tagName : 'tag2', tagID : 2},
			{tagName : 'tag3', tagID : 3},
			{tagName : 'tag4', tagID : 4},
			{tagName : 'tag5', tagID : 5},
			{tagName : 'tag6', tagID : 6},
			{tagName : 'tag7', tagID : 7},
			{tagName : 'tag8', tagID : 8},
			{tagName : 'tag9', tagID : 9},
			{tagName : 'tag10', tagID : 10},
		],
	},
};

console.log(Object.values(arrayWithObjects.innerObj.tags.map(e => e.tagID)));

///////////////////////////////////////////////////////////////////////////////
/* eslint-enable */


// Last Edit : 2023-02-19 13:12:57
