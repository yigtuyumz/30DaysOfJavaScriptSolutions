'use strict';

const days = require('../common/arrays').daysTurkish;
const months = require('../common/arrays').monthsTurkish;
const d = new Date();

let day = days[d.getDay()];
console.log(day);

let obj1 = document.getElementById('holder1');
let day1 = d.getFullYear();
obj1.innerHTML = day1;

let obj2 = document.getElementById('holder2');
let day2 = months[d.getMonth()];
obj2.innerHTML = day2;

let obj3 = document.getElementById('holder3');
let day3 = d.getDate();
obj3.innerHTML = day3;

let obj4 = document.getElementById('holder4');
let day4 = d.getHours();
obj4.innerHTML = day4;

let obj5 = document.getElementById('holder5');
let day5 = d.getMinutes();
obj5.innerHTML = day5;

let obj6 = document.getElementById('holder6');
let day6 = d.getSeconds();
obj6.innerHTML = day6;

let obj7 = document.getElementById('holder7');
let day7 = d.getMilliseconds();
obj7.innerHTML = day7;

let obj8 = document.getElementById('holder8');
let day8 = d.getTime();		// UNIX date, seconds passed 1970
obj8.innerHTML = day8;

let obj9 = document.getElementById('holder9');
let now = new Date();
obj9.innerHTML = now;		// timestamp

// Last Edit : 2023-02-24 14:05:10
