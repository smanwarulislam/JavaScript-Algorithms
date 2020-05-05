// es6

// let

// let statement
/* The let statement allows for block scope to declare a local variable. This differs from the var keyword, which declares a variable globally or locally to the scope of a function. */

// var
var greeting = 'Hello';
greeting; // 'Hello'

greeting = 'Nice to meet you';
greeting; // 'Nice to meet you'

var greeting = 'Hi';
greeting; // 'Hi'

// let
let name = 'Joe';
name; // 'Joe'

name = 'Sarah';
name; // 'Sarah'

let name = 'Phil';
name; // 'Phil'

// function scope
var firstName = 'Joe'; // variable firstName is declared globally

function surname() {
  var lastName = 'Smith'; // variable lastName isn't in the global scope
}

surname();
console.log(firstName + ' ' + lastName); // error

// function scope
var count = 4;

if (true) {
  var more = 1; // more -> global variable. Because the var keyword is not declared in a function, both more and count have a global scope
}

console.log(count + more);
// 5

// block scope
let count = 4;

if (true) {
  let more = 1; // let statement is blocked scoped
}

console.log(count + more); // count -> global scope visible. more -> block scope not visible.
// more is not defined