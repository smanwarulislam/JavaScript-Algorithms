// review
// map
// higher order function - can receive another function as an argument
// does not delete but transforms each element in a new array

// practice
var numbers = [2, 4, 6, 8, 10, 12];

var double = numbers.map(function (mult) {
  return mult * 2;
}).map(function (mult) {
  return mult + 1;
});

double; // [5, 9, 13, 17, 21, 25]

// challenge
// change an array of greetings to all upper case words
// save the first word in the array to a variable

// possible solution
var greeting = ['hi', 'hello', 'hey', 'thanks'];

var shout = greeting.map(function (salutation) {
  return salutation.toUpperCase();
});

shout; // ["HI", "HELLO", "HEY", "THANKS"]

var greetingLowerCase = shout.map(function (salutation) {
  return salutation.toLowerCase();
});

greetingLowerCase; // ["hi", "hello", "hey", "thanks"]

shout; // ["HI", "HELLO", "HEY", "THANKS"]

var hiShout = shout.shift();

hiShout; // "HI"