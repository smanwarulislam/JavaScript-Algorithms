// Array Filter

// Challenge
// Create a function that takes an array of positive numbers and strings and
// returns a new array without the strings.

// Examples
// [2, 'two', 4, 'four', 6, 'six'] -> [2, 4, 6];
// ["a", 24, "d", 32, "b", 7] -> [24, 32, 7];

// Approach 1 - for loop

// Tools
// for loop
// http://bit.ly/for-loop-javascript
// Number.isInteger()
// http://bit.ly/isInteger    
// typeof
// http://bit.ly/typeof-operator

// practice
// for loop
let numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4

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
// Number.isInteger()
function noStringArray(arr) {
  // step 1 -> create an empty `filteredArray` that we will add our
  // non-string elements and return value at end of function
  let filteredArray = [];

  // step 2 -> create a for loop to iterate through our array
  for (let i = 0; i < arr.length; i++) {
    // step 3 -> use `if` statement and `Number.isInteger` to check if
    // element being looped through is an integer
    // OR use `if` statement with `typeof` element being looped through is
    // a number
    if (Number.isInteger(arr[i])) {
      // step 4 -> push element being looped through into `filteredArray`
      filteredArray.push(arr[i]);
    }
  }

  // return `filteredArray`
  return filteredArray;
}

console.log(noStringArray([2, 'two', 4, 'four', 6, 'six']));
console.log(noStringArray(["a", 24, "d", 32, "b", 7]));
/* expected output:
[2, 4, 6]
[24, 32, 7] */

// typeof
function noStringArray(arr) {
  // step 1 -> create an empty `filteredArray` that we will add our
  // non-string elements and return value at end of function
  let filteredArray = [];

  // step 2 -> create a for loop to iterate through our array
  for (let i = 0; i < arr.length; i++) {
    // step 3 -> use `if` statement and `Number.isInteger` to check if
    // element being looped through is an integer
    // OR use `if` statement with `typeof` element being looped through is
    // a number
    if (typeof (arr[i]) === "number") {
      // step 4 -> push element being looped through into `filteredArray`
      filteredArray.push(arr[i]);
    }
  }

  // return `filteredArray`
  return filteredArray;
}

console.log(noStringArray([2, 'two', 4, 'four', 6, 'six']));
console.log(noStringArray(["a", 24, "d", 32, "b", 7]));
/* expected output:
[2, 4, 6]
[24, 32, 7] */