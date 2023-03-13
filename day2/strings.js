'use-strict';

/* eslint-disable no-var */
/* string concatenation */

var st1 = 'Hello, ' + 'World!!';

console.log(st1);

/* long strings can be divided via '\' character at the end of the line */
var paragraph = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem\
 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo\
 inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\
 Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\
 sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\
 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,\
 adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore\
 et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis\
nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid\
ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea\
voluptate velit esse quam nihil molestiae consequatur, vel illum qui\
dolorem eum fugiat quo voluptas nulla pariatur?';
console.log(paragraph);

/* template literal */

var a = 10;
var b = 100;

console.log(`a + b is ${a + b}`);

/* template literal with ternary.. */

console.log(`${a} is greater than ${b}: ${a > b}`);

console.log(`${( a > b ) ? a + ' is greater than ' + b : a + ' is smaller than ' + b}`);
/* eslint-enable no-var */

// Last Edit : 2023-02-24 02:45:52
