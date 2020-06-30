// Determine if a string is a Palindrome

// Challenge
// A palindrome is a text that is spelled the same front to back.

// Examples
// 'Eva, Can I Stab Bats In A Cave?' -> true
// 'Was It A Rat I Saw?' -> true
// 'A nut for a jar of tuna?' -> true

// Note
// Ignore capitalization and spaces or any other special characters.

// Tools
// String.prototype.replace()
// http://bit.ly/string-replace-method
// Online Regex Tool
// http://bit.ly/regular-expressions-javascript
// https://regex101.com/
// String.prototype.toLowerCase()
// http://bit.ly/lowercase-string

// practice
// String.prototype.replace()
let fullName = 'Rob Merrill';

fullName.replace('Rob', 'Bill');
// expected output: "Bill Merrill"

// practice
// Online Regex Tool
// Regular expressions
let fullName = 'Rob, Merrill!';

let regEx = /\W/g;

fullName.replace(regEx, ' ');
// expected output: "Rob  Merrill "

'HI'.toLowerCase(); // 'hi'

'hi'.toUpperCase(); // 'HI'

// Challenge - Solution
function isPalindrome(str) {
  // Step 1 -> Use regular expressions to remove all non-word characters
  // e.g. "," with replace method
  let stringWithoutSpecialCharacters = str.replace(/\W/g, '');

  // Step 2 -> Turn the string into lower case assuming that our palindrome is
  // case insensitive
  let caseInsensitiveString = stringWithoutSpecialCharacters.toLowerCase();

  // Step 3 -> Reverse string with built in functions/for loop/for of loop and assign
  // to new variable `reverseString`

  // Reverse string with built in functions and assign to new variable `reverseString`
  // let reverseString = caseInsensitiveString.split('').reverse().join('');

  // Reverse string with for loop and assign to new variable `reverseString`
  // create a `reverseString` variable as an empty string.
  // let reverseString = '';

  // create a for loop starting with last character and ending with first character of the string
  /* for (let i = caseInsensitiveString.length - 1; i >= 0; i--) {
    // in the code block add the current letter being looped through to the reverseString variable
    reverseString += caseInsensitiveString[i];
  } */

  // Reverse string with for of loop and assign to new variable `reverseString`
  // create a `reverseString` variable with an empty placeholder string.
  let reverseString = '';

  // use for of loop to loop through string
  for (const letter of caseInsensitiveString) {
    // in the code block add the current letter being looped through to the front of the `reverseString` variable
    reverseString = letter + reverseString;
  }

  // Step 4 -> Return boolean as to whether our original string without special
  // characters and case insensitive is equal to our reversed string
  return caseInsensitiveString === reverseString;
}

console.log(isPalindrome('Eva, Can I Stab Bats In A Cave?'));
console.log(isPalindrome('Was It A Rat I Saw?'));
console.log(isPalindrome('A nut for a jar of tuna?'));
/* expected output:
true
true
true */