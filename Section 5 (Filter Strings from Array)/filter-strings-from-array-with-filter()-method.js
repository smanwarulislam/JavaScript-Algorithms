// Array Filter

// Challenge
// Create a function that takes an array of positive numbers and strings and
// returns a new array without the strings.

// Examples
// [2, 'two', 4, 'four', 6, 'six'] -> [2, 4, 6];
// ["a", 24, "d", 32, "b", 7] -> [24, 32, 7];

// Approach 2 - filter method

// Tools
// filter method
// http://bit.ly/array-filter-method
// Number.isInteger()
// http://bit.ly/isInteger    
// typeof
// http://bit.ly/typeof-operator

// practice
// filter method
let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

rainbow.filter(function (color) {
  return color !== 'blue';
});

console.log(rainbow);
// expected output: ["red", "orange", "yellow", "green", "indigo", "violet"]

// practice
// Number.isInteger()
Number.isInteger('Raju'); // false

Number.isInteger({}); // false

Number.isInteger(31); // true

// practice
// typeof
console.log(typeof 'two');
// expected output: "string"

console.log(typeof 2);
// expected output: "number"

// Challenge - Solution
function noStringArray(arr) {
  // step 1 -> use filter method to check if each item in array is a number.
  // You can use either the `typeof` operator or `Number.isInteger()` method
  // on each item in your array in your return statement.
  return arr.filter(function (item) {
    // return typeof item === "number";
    return Number.isInteger(item);
  });
}

console.log(noStringArray([2, 'two', 4, 'four', 6, 'six']));
console.log(noStringArray(["a", 24, "d", 32, "b", 7]));
/* expected output:
[2, 4, 6]
[24, 32, 7] */