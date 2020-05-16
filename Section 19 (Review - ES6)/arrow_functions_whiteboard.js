// Arrow Functions in ES6

// Arrow Functions
/* Arrow functions - also called "fat arrow" functions, are a more concise syntax for writing function expressions. They utilize a new token =>, that looks like a fat arrow. Arrow functions are anonymous and change the way "this" binds in functions. */

// Function expression in ES5 and ES6

// Function expression in ES5
var es5Func = function () {
  return 2;
}

// Function expression in ES6
// One way of writing arrow functions in ES6
let es6Func = () => 2;

/* - less code
- no function keyword
- () sometimes optional
- implicit return without curly braces */

// Some of the ways we can write out arrow functions in ES6

// Arrow Function - 1 Parameter
let cubed;
cubed = x => x * x * x; // concise body, implicit return

cubed = x => {
  return x * x * x;
}; // block body, needs explicit return statement

cubed = (x) => x * x * x; // concise body, implicit return

cubed = (x) => {
  return x * x * x;
}; // block body, explicit return

// Arrow Function - Two Parameters
let add;
add = (x, y) => x + y; // concise body

add = (x, y) => {
  return x + y;
}; // block body

add = (x, y, z) => x + y + z; // concise body