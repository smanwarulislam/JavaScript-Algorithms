// Alphabetical Order

// Challenge
// Create a function that takes a string and returns a string with its letters
// in alphabetical order.

// Examples
// "hello" -> "ehllo"
// "goodbye" -> "bdegooy"

// Tools
// Spread Operator
// http://bit.ly/spread-operator
// Array.prototype.sort()
// http://bit.ly/array-sort
// Array.prototype.join()
// http://bit.ly/array-join

// practice
// Spread Operator
let string = 'Hello';
[...string];
// expected output: ["H", "e", "l", "l", "o"]

// practice
// Array.prototype.sort()
let numbers = [2, 1, 5, 4];
numbers.sort();
console.log(numbers);
// expected output: Array [1, 2, 4, 5]

let numbers = [2, 1, 5, 4, 10];
numbers.sort();
console.log(numbers);
// expected output: Array [1, 10, 2, 4, 5]

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

// practice
// Array.prototype.join()
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join(''));
// expected output: "FireAirWater"

// Challenge - Solution
function alphaOrder(str) {
  // step 1 -> split the string into an array with spread operator
  // let strToArray = [...str];

  // step 2 -> sort the letters in the array
  // let revArr = strToArray.sort();

  // step 3 -> join the array back into a string
  // let sortedStr = revArr.join('');

  // step 4 -> return the alphabetized array
  // return sortedStr;

  // all in one step
  return [...str].sort().join('');
}

console.log(alphaOrder("hello"));
console.log(alphaOrder("goodbye"));
/* expected output:
ehllo
bdegooy */