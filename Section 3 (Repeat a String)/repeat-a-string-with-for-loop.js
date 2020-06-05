// Repeat a String

// Challenge
// write a function that takes two arguments, a string and a number.
// The function should return a single string that contains the original string,
// repeated the number of times specified by the second argument,
// or an empty string if the number is negative.

// Examples
// 'car', 4 -> 'carcarcarcar'
// 'bar', 3 -> 'barbarbar'

// Approach 1 - for loop

// Tools
// for loop
// http://bit.ly/for-loop-javascript
// arithmetic operators
// http://bit.ly/arithmetic-operators-js

// practice
// for loop
let letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// expected output:
/* a
b
c */

// practice
// arithmetic operators
let accumulator = 0;

accumulator + 5; // 5

accumulator; // 0

accumulator += 5; // 5

accumulator; // 5

let string = '';

string + 'a'; // 'a'

string; // ''

// string = string + 'a';
string += 'a'; // 'a'

string; // 'a'

// Challenge - Solution
function repeatString(str, num) {
  // Step 1 -> Declare a variable `finalString` and set it to an empty string
  let finalString = '';

  // Step 2 -> If statement conditional to check if the number is `0` or less
  // Step 3 -> In the code block return `finalString`
  if (num <= 0) {
    return finalString;
  }

  // Step 4 -> Create a for loop that runs `num` times.    
  // In code block add `str` to `finalString` for each number we iterate through
  for (let i = 1; i <= num; i++) {
    finalString += str;
  }

  // Step 5 -> Return `finalString` 
  return finalString;
}

// tests
console.log(repeatString('car', 4));
console.log(repeatString('bar', 3));
/* expected output:
'carcarcarcar'
'barbarbar' */