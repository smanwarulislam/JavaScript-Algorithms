// arrow function review
// shorter syntax
// anonymous functions
// no function keyword
// parenthesis required for 0 or 2 or more parameters
// parenthesis optional for 1 parameter
// concise body or block body

var func1 = function () {
  return 'Hi';
}

func1(); // 'Hi'

// challenge
// rewrite func1 in ES6 arrow function syntax
// concise body
// block body

// possible solution
let func2 = () => 'Hi';

func2(); // 'Hi'

let func3 = () => {
  return 'Hi';
}

func3(); // 'Hi'

// challenge
// create two arrow functions
// no parameters and two or more parameters
// choose either concise or block body

// possible solutions
let es6name = () => 'John';

es6name(); // 'John'

let es6mult = (x, y) => x * y;

var x = 5;
var y = 6;

es6mult(x, y); // 30

// significant challenge
// the map function syntax in ES5 and convert it to ES6

// possible solutions
// the ES5 implementation
var numbers = [2, 4, 6, 8];

var es5squared = numbers.map(function (n) {
  return n * n
});

es5squared; // [4, 16, 36, 64]

// convert to ES6 format
var es6squared = numbers.map(n => n * n);

es6squared; // [4, 16, 36, 64]