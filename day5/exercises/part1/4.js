'use strict';

let arr = [235, 23, 123, 64, 345, 46, 4, 1, 46, 78, 35, 44];

let firstItem = arr[0];
let lastItem = arr[arr.length - 1];
let middleItem = ( arr.length % 2 ) ? arr[(arr.length - 1) / 2] : [arr[((arr.length) / 2) - 1], arr[((arr.length) / 2)]];

console.log('First Item :', firstItem);
console.log('Last Item :', lastItem);
console.log('Middle Item(s) :', middleItem);

// Last Edit : 2023-02-24 14:25:53
