// Remove Odd Numbers from an Array

// Challenge
// Create a function that takes an array of numbers and returns
// only the even values. The function should return an array containing
// only even numbers

// Examples
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [2, 4, 6, 8, 10]
// [21, 26, 28, 29] -> [26, 28]

// Approach 2 - filter method

// Tools
// filter method
// http://bit.ly/array-filter-method
// remainder/modulus operator
// http://bit.ly/remainder-operator

// practice
// filter method
let numbers = [1, 2, 3, 4, 5, 6, 7];

let greaterThanFour = numbers.filter(function (number) {
  return number > 4;
});

console.log(greaterThanFour);
// expected output: [5, 6, 7]

// filter method
/* 1. callback function on each item in array.
2. returns all items that are true. */

// practice
// remainder/modulus operator
5 % 2; // 1
6 % 2; // 0
7 % 2; // 1
8 % 2; // 0

// Challenge - Solution
function evensOnly(arr) {
  // Step 1 -> Use the filter method for each item in the array
  // use modulus operator to evaluate even numbers and `return` the items
  // that have a remainder of `0`
  return arr.filter(function (number) {
    return number % 2 === 0;
  });
}

console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evensOnly([21, 26, 28, 29]));
/* expected output:
[2, 4, 6, 8, 10]
[26, 28] */