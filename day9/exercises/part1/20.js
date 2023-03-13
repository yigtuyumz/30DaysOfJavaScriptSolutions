'use strict';

const data = require('../../../common/objects').day9Data;

let isOK = data.names.some(element => element.length > 7);

console.log(isOK);

// Last Edit : 2023-02-18 14:20:10
