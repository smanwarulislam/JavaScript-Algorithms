// Name Swap - Built in Functions

// Name Swap

// Challenge
// Reverse the order of two provided strings.

// Examples
// "Abraham Lincoln" -> "Lincoln Abraham"
// "Hank Aaron" -> "Aaron Hank"  

// Approach 1 - // Using Built in Functions  

// Tools
// String.prototype.split()
// http://bit.ly/string-split
// Array.prototype.reverse()
// http://bit.ly/array-reverse-method
// Array.prototype.join()
// http://bit.ly/array-join

// practice
// String.prototype.split()
const car = "Honda Civic";
car.split('');
// expected output: ["H", "o", "n", "d", "a", " ", "C", "i", "v", "i", "c"]

car.split(' ');
// expected output: ["Honda", "Civic"]

// practice
// Array.prototype.reverse()
const reverseArray = ["Honda", "Civic"];
reverseArray.reverse();
// expected output: ["Civic", "Honda"]

// practice
// Array.prototype.join()
const reverseString = ["Civic", "Honda"];
reverseString.join(' ');
// expected output: "Civic Honda"

// Challenge - Solution
function nameSwap(str) {
  // step 1 -> split string into an array
  const stringToArray = str.split(' ');
  // step 2 -> reverse array
  const reverseArray = stringToArray.reverse();
  // step 3 -> join array into string
  const reverseString = reverseArray.join(' ');
  // step 4 -> return string
  return reverseString;
}

console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aaron'));
/* expected output:
Lincoln Abraham
Aaron Hank */

function nameSwap(str) {
  // alternative -> complete all these steps in one line of code
  return str.split(' ').reverse().join(' ');
}

console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aaron'));
/* expected output:
Lincoln Abraham
Aaron Hank */