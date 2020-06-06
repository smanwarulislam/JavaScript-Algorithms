// Repeat a String

// Challenge
// write a function that takes two arguments, a string and a number.
// The function should return a single string that contains the original string,
// repeated the number of times specified by the second argument,
// or an empty string if the number is negative.

// Examples
// 'car', 4 -> 'carcarcarcar'
// 'bar', 3 -> 'barbarbar'

// Approach 1 - while loop

// Tools
// while loop
// http://bit.ly/while-loop
// arithmetic operators
// http://bit.ly/arithmetic-operators-js

// practice
// while loop
let number = 5;

number; // 5

while (number > 0) {
  number--;
  console.log(number);
}

// expected output:
/* 4
3
2
1
0 */

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
  if (num <= 0) {
    // Step 3 -> In the code block return `finalString`
    return finalString;
  }

  // Step 4 -> Set the while loop with `(num > 0)` as the condition to check if a
  // number is greater than 0
  while (num > 0) {
    // Step 5 -> In code block add `str` to `finalString`
    // Step 6 -> In code block decrement `num`
    finalString += str;
    num--;
  }

  // Step 7 -> Return `finalString` 
  return finalString;
}

// tests
console.log(repeatString('car', 4));
console.log(repeatString('bar', 3));
/* expected output:
'carcarcarcar'
'barbarbar' */