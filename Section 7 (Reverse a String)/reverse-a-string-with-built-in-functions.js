// Reverse a String

// Challenge
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// Examples
// 'car' -> 'rac'
// 'bar' -> 'rab'

// Approach 1 - Using Built in Functions

// Tools
// String.prototype.split()
// http://bit.ly/string-split
// Array.prototype.reverse()
// http://bit.ly/array-reverse-method
// Array.prototype.join()
// http://bit.ly/array-join

// Challenge - Solution
function revString(str) {
  // step 1 -> split string into an array and assign to variable `arrayToString`
  // let arrayToString = str.split('');

  // step 2 -> reverse array and assign to variable `reverseArray`
  // let reverseArray = arrayToString.reverse();

  // step 3 -> join array into string and assign to variable `reverseString`
  // let reverseString = reverseArray.join('');

  // step 4 -> return `reverseString`
  // return reverseString;

  // alternative -> complete all these steps in one line of code
  return str.split('').reverse().join('');
}

// tests
console.log(revString('car'));
console.log(revString('bar'));
/* expected output:
rac
rab */