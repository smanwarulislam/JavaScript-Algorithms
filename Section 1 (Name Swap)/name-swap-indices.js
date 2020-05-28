// Name Swap - an array indices/indexes

// Name Swap

// Challenge
// Reverse the order of two provided strings.

// Examples
// "Abraham Lincoln" -> "Lincoln Abraham"
// "Hank Aaron" -> "Aaron Hank"  

// Approach 1 - Add array indices/indexes

// Tools
// String.prototype.split()
// http://bit.ly/string-split
// Accessing array elements
// http://bit.ly/arrays-bracket-notation

// practice
// String.prototype.split()
const car = "Honda Civic";
car.split('');
// expected output: ["H", "o", "n", "d", "a", " ", "C", "i", "v", "i", "c"]

car.split(' ');
// expected output: ["Honda", "Civic"]

// practice
// Accessing array elements
let fruits = ['Apple', 'Banana']

fruits[1];
// Banana

fruits[0];
// Apple

fruits[1];
// Banana

fruits[1] + ' ' + fruits[0];
// Banana Apple

// Challenge - Solution
function nameSwap(str) {
  // step 1 -> turn string into an array of words
  let arr = str.split(' ');
  // step 2 -> return the array at index 1 followed by a space then the array at index 0
  return arr[1] + ' ' + arr[0];
}

console.log(nameSwap('Abraham Lincoln'));
console.log(nameSwap('Hank Aaron'));
/* expected output:
Lincoln Abraham
Aaron Hank */