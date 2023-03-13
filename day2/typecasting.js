'use-strict';

/* eslint-disable no-var, camelcase */
/* typecasting in JS */

/*
%	parseInt();
%	Number();
%	Plus Sign (+)
*/



/* STRING TO NUMBER */
var str_number = '10';

console.log(typeof(str_number), str_number);

/* typecasting */
var real_number = +str_number;
console.log(typeof(real_number), real_number);


/* typecasting */
var real_number2 = Number(str_number);
console.log(typeof(real_number2), real_number2);

/* typecasting */
var real_number3 = parseInt(str_number);
console.log(typeof(real_number3), real_number3);



/* STRING TO FLOAT */
var str_number2 = '10.105s5';

/* typecasting */
var float_number = parseFloat(str_number2);
console.log(typeof(float_number), float_number);


/* FLOAT TO INTEGER */

var str_number3 = '18.35';

/* typecasting */
var float_number2 = parseInt(parseFloat(str_number3));

console.log(typeof(float_number2), float_number2);

/* eslint-enable no-var, camelcase */
// Last Edit : 2023-02-24 02:46:08
