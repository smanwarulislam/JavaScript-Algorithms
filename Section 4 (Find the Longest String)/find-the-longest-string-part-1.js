// Find the Longest String Part 1

// Supercalifragilisticexpialidocious

// Challenge
// Given a string of words return the length of the longest word(s)

// Examples
// 'Hi, where is the airport?' -> 7
// 'Thanks for stopping by!' -> 8

// Approach 1 - Using Built in Functions & Regular Expressions & Replace Method

// Tools
// split() method - splits a string into an array
// http://bit.ly/string-split
// String.prototype.replace()
// http://bit.ly/string-replace-method
// Online Regex Tool
// http://bit.ly/regular-expressions-javascript
// https://regex101.com/

// practice
// String.prototype.replace()
let fullName = "Rob Merrill";

fullName.replace("Rob", "Bill");
// expected output: "Bill Merrill"

// practice
// Online Regex Tool
let fullName = "Rob, Merrill!";

let regEx = /\W/g;

fullName.replace(regEx, " ");
// expected output: "Rob  Merrill "

// Challenge - Solution
function longestWordLength(str) {
  // Step 1 -> Use regular expressions to remove all non-word characters
  // e.g. '!' with replace function
  let stringWithoutSpecialCharacters = str.replace(/\W/g, " ");

  // Step 2 -> Declare a variable `longestWord` and set it equal to an
  // empty string.
  // let longestWord = '';
  let longestWord = 0;

  // Step 3 -> Declare a variable `wordArray` and use split method to
  // create an array of words.
  let wordArray = stringWithoutSpecialCharacters.split(" ");

  // Step 4 -> Create a for loop to loop through `wordArray`
  for (let i = 0; i < wordArray.length; i++) {
    // Step 5 -> Create a conditional to ask if the length of current
    // item in the array is `>` than `longestWord.length`.
    if (wordArray[i].length > longestWord) {
      // if (wordArray[i].length > longestWord.length)
      // Step 6 -> In the code block set `longestWord` to the
      // current item being looped over in the array.
      // longestWord = wordArray[i];
      longestWord = wordArray[i].length;
    }
  }

  // Step 7 -> Return the length of the longest word
  // return longestWord.length;
  return longestWord;
}

console.log(longestWordLength("Hi, where is the airport?"));
console.log(longestWordLength("Thanks for stopping by!"));
/* expected output:
7
8 */
