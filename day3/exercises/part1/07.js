'use strict';

const d = new Date();


/* What is the year today? */
console.log(d.getFullYear());

/* What is the month today as a number? */
console.log((d.getMonth() + 1) % 13);

/* What is the date today? */
console.log(d);

/* What is the day today as a number? */
console.log(d.getDay());

/* What is the hours now? */
console.log(d.getHours());

/* What is the minutes now? */
console.log(d.getMinutes());

/* UNIX time 1970, passed seconds */
console.log(d.getTime());

// Last Edit : 2023-02-24 14:08:44
