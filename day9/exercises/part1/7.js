'use strict';

const data = require('../../../common/objects').day9Data;

const countryLengths = data.countries.map((e) => { return (e.length); });

console.log(countryLengths);

// Last Edit : 2023-02-17 13:51:36
