// Reverse a String

// Challenge
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// Examples
// 'car' -> 'rac'
// 'bar' -> 'rab'

// Approach 1 - Using For Loop

// Tools
// for loops
// http://bit.ly/for-loop-javascript

// practice
// for loop
let numbersArray = [1, 2, 3, 4];

for (let i = numbersArray.length - 1; i >= 0; i--) {
  console.log(numbersArray[i]);
}

// expected output: 4
// expected output: 3
// expected output: 2
// expected output: 1

// Challenge - Solution
function revString(str) {
  // step 1 -> create a `reverseString` variable as an empty string.
  let reverseString = '';

  // step 2 -> create a for loop starting with last character and ending with
  // first character of the string
  for (let i = str.length - 1; i >= 0; i--) {
    // in the code block add the current letter being looped through to the reverseString variable
    reverseString += str[i];
  }

  // step 3 -> return `reverseString` variable
  return reverseString;
}

// tests
console.log(revString('car'));
console.log(revString('bar'));
/* expected output:
rac
rab */