// Reverse a String

// Challenge
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// Examples
// 'car' -> 'rac'
// 'bar' -> 'rab'

// Approach 1 - Using For Of Loop

// Tools
// for of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// practice
// for of loop
// for loop
const greeting = 'Hello';

for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i]);
}

// expected output: H
// expected output: e
// expected output: l
// expected output: l
// expected output: o

// for of loop
const greeting = 'Hello';

for (const letter of greeting) {
  console.log(letter);
}

// expected output: H
// expected output: e
// expected output: l
// expected output: l
// expected output: o

// Challenge - Solution
function revString(str) {
  // step 1 -> create a `reverseString` variable with an empty placeholder string.
  let reverseString = '';

  // step 2 -> use for of loop to loop through string
  for (const letter of str) {
    // in the code block add the current letter being looped through to the front of the `reverseString` variable
    reverseString = letter + reverseString;
    // 'c'
    // 'ac'
    // 'rac'
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