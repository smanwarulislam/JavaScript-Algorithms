// The Spread Operator ...

// Spread Operator
/* The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables (for destructuring assignment) are expected. */

// Syntax
// The Spread Operator ...

// Arrays
let letters = ['a', 'b', 'c'];

console.log(letters); // ['a', 'b', 'c']
console.log(...letters); // 'a' 'b' 'c'

// The spread operator can also be used in constructing arrays
// An ES5 approach to constructing arrays
var alpha = ['a', 'b', 'c'];
var bet = ['d', 'e', 'f'];

var alphabet = alpha.concat(bet);

alphabet; // ['a', 'b', 'c', 'd', 'e', 'f']

// refresh browser

// An ES6 approach to constructing arrays
let bet = ['d', 'e', 'f'];
let alphabet = ['a', 'b', 'c', ...bet];

alphabet; // ['a', 'b', 'c', 'd', 'e', 'f']

// Functions
let first = [1, 2, 3];
let second = [2, 4, 6];

function productOfThree(a, b, c) {
  let result = a * b * c;
  console.log(result);
}

// An ES5 approach
productOfThree(first[0], first[1], first[2]); // 6
productOfThree(second[0], second[1], second[2]); // 48

// An ES6 approach
productOfThree(...first); // 6
productOfThree(...second); // 48