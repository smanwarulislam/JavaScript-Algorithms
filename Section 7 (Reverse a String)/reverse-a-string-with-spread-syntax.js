// Reverse a String

// Challenge
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// Examples
// 'car' -> 'rac'
// 'bar' -> 'rab'

// Tools
// Spread Operator
// http://bit.ly/spread-operator

// practice
// Spread Operator
let string = 'Hello';
[...string];
// expected output: ["H", "e", "l", "l", "o"]

// Challenge - Solution
function revString(str) {
  // step 1 -> use spread operator and in one line of code reverse string
  return [...str].reverse().join('');
}

// tests
console.log(revString('car'));
console.log(revString('bar'));
/* expected output:
rac
rab */