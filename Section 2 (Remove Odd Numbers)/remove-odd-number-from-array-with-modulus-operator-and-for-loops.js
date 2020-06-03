// Remove Odd Numbers from an Array

// Challenge
// Create a function that takes an array of numbers and returns
// only the even values. The function should return an array containing
// only even numbers

// Examples
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> [2, 4, 6, 8, 10]
// [21, 26, 28, 29] -> [26, 28]

// Approach 1 - for loop/remainder operator

// Tools
// for statement
// http://bit.ly/for-loop-javascript
// remainder/modulus operator
// http://bit.ly/remainder-operator
// Array.prototype.push()
// http://bit.ly/array-push

// practice
// for statement
let letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// expected output:
/* a
b
c */

// practice
// remainder/modulus operator
5 % 2; // 1
6 % 2; // 0
7 % 2; // 1
8 % 2; // 0

// practice
// Array.prototype.push()
let numbers = [1, 2, 3];

numbers.push(4);
// expected output: 4

numbers;
// expected output: [1, 2, 3, 4]

// Challenge - Solution
function evensOnly(arr) {
  // Step 1 -> Declare `evenArray` variable and set to empty array
  let evenArray = [];
  // Step 2 -> Loop through `arr` starting with the first item
  for (let i = 0; i < arr.length; i++) {
    // on each item -> use modulus operator `%` in conditional to check
    // if the item is an even number. If even, push into `evenArray`
    if (arr[i] % 2 === 0) {
      evenArray.push(arr[i]);
    }
  }

  // Step 3 -> Return `evenArray`
  return evenArray;
}

console.log(evensOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(evensOnly([21, 26, 28, 29]));
/* expected output:
[2, 4, 6, 8, 10]
[26, 28] */