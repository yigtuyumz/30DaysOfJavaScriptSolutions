'use strict';

const data = require('../../../common/objects').day9Data;

let isOK = data.countries.every(element => element.includes('land'));

console.log(isOK);

// Last Edit : 2023-02-18 14:22:47
