'use strict';

const data = require('../../../common/objects').day9Data;

const upperCaseCountries = data.countries.map((e) => { return (e.toUpperCase()); });

console.log(upperCaseCountries);

// Last Edit : 2023-02-17 13:50:45
