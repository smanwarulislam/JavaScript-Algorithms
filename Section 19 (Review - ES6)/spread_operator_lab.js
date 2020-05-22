// spread operator review
// ...
// multiple elements in arrays
// multiple arguments in functions

// practice
let names = ['Tim', 'Sarah', 'Alex'];

console.log(names); // ['Tim', 'Sarah', 'Alex']

// spread operator
console.log(...names); // Tim Sarah Alex

console.log('Tim', 'Sarah', 'Alex'); // Tim Sarah Alex

// challenge
// create two arrays
// add them together using ES5 approach
// add them together using ES6 approach

// possible solution
// using ES5 implementation
var es5rain = ['red', 'orange', 'yellow'];
var es5bow = ['green', 'blue', 'indigo', 'violet'];

var es5rainbow = es5rain.concat(es5bow);

es5rainbow; // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// refresh browser

// An ES6 approach
let es6bow = ['green', 'blue', 'indigo', 'violet'];
let es6rainbow = ['red', 'orange', 'yellow', ...es6bow];

es6rainbow; // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// challenge
// create a function that will take 3 parameters
// pass to the function an array with 3 elements using the spread operator
// pass those arguments to a template string and return the template string

// possible solution
let array = ['ran', 'bathroom', 'quickly'];

function madLib(verb, noun, adjective) {
  return `I ${verb} to the ${noun} and ${adjective} sat down.`;
}

madLib(...array); // 'I ran to the bathroom and quickly sat down.'