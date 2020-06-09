// Find the Longest String Part 2

// Supercalifragilisticexpialidocious

// Challenge
// Given a string of words return the length of the longest word(s)

// Examples
// 'Hi, where is the airport?' -> 7
// 'Thanks for stopping by!' -> 8

// Approach 2 - For Of Loop

// Tools
// split() method - splits a string into an array
// http://bit.ly/string-split
// for of loop
// http://bit.ly/for-of-loop
// String.prototype.replace()
// http://bit.ly/string-replace-method
// Online Regex Tool
// http://bit.ly/regular-expressions-javascript
// https://regex101.com/
// https://regex101.com/r/c19vza/1

// practice
// for of loop
// for loop
let numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4

// for of loop
let numbers = [1, 2, 3, 4];

for (let number of numbers) {
  console.log(number);
}

// expected output: 1
// expected output: 2
// expected output: 3
// expected output: 4

// practice
// String.prototype.replace()
let fullName = 'Rob Merrill';

fullName.replace('Rob', 'Bill');
// expected output: "Bill Merrill"

// practice
// Online Regex Tool
let fullName = 'Rob, Merrill!';

let regEx = /\W/g;

fullName.replace(regEx, ' ');
// expected output: "Rob  Merrill "

// Challenge - Solution
function longestWordLength(str) {
  // Step 1 -> Use regular expressions to remove all non-word characters
  // e.g. '!' with replace function
  let stringWithoutSpecialCharacters = str.replace(/\W/g, ' ');

  // Step 2 -> Declare a variable `longestWord` and set it equal to an
  // empty string.
  let longestWord = '';

  // Step 3 -> Declare a variable `wordArray` and use split method to
  // create an array of words.
  let wordArray = stringWithoutSpecialCharacters.split(' ');

  // Step 4 -> Use for of loop to iterate through `wordArray`
  for (let count of wordArray) {
    // Step 5 -> Create a conditional to ask if the length of current
    // item in the array is `>` than `longestWord.length`.
    if (count.length > longestWord.length) {
      // Step 6 -> In the code block set `longestWord` to the
      // current item being looped over in the array.
      longestWord = count;
    }
  }

  // Step 7 -> Return the length of the longest word
  return longestWord.length;
}

console.log(longestWordLength('Hi, where is the airport?'));
console.log(longestWordLength('Thanks for stopping by!'));
/* expected output:
7
8 */