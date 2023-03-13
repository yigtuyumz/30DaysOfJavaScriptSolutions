'use strict';

let str = 'You cannot end a sentence with because because because is a conjunction';
let ans = str.match(/because/g).length;

console.log(ans);

// Last Edit : 2023-02-24 14:02:15
