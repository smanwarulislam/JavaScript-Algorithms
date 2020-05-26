# es6

# let statement

# challenge
## create identical set of code and show how 'var' does not take advantage of block scope but 'let' does

# possible solution
```
var a = 4;

if (true) {
  var b = 5;
}

console.log(a * b); // 20

var a = 4;

if (true) {
  let b = 5;
}

console.log(a * b); // error
// b is not defined
```

# challenge
## var vs. let
## talk line by line
## type out yourself

# possible solution
```
function varTest() {
  var x = 1;

  if (true) {
    var x = 2; // the temporal dead zone does not apply to var statements
    console.log(x);
  }
  console.log(x);
}

varTest();
// 2
// 2

function letTest() {
  let x = 1;

  if (true) {
    let x = 2; // It's local scope is the block statement. It is declared with in. This is why the temporal dead zone does an apply. It has a different scope.
    console.log(x);
  }
  console.log(x);
}

letTest();
// 2
// 1
```



# const statement

# lab
```
var API_KEY = 'abcdefghijk';
var API_KEY = 'qrstuvwxyz';

const API_KEY = 'abcdefghijk';
API_KEY = 'lmnopqrstuv'; // Uncaught TypeError: Assignment to constant variable.

// temporal dead zone -> const

let a = 2;
let a = 3;

const b = 1;
b = 2; // Uncaught TypeError: Assignment to constant variable.
```



# Template Literals in ES6

# challenge
## create multiline string
## create a multiline string using single or double quotes es5
## create multiline string using template literal es6

# possible solution
```
var string = '"I\'m sick",\n John said.';

string; //
"I'm sick",
John said.
```

## refresh browser

```
let string = `"I'm sick",
John said.`;

string; //
"I'm sick",
John said.

var drink = 'coffee';
var food = 'doughnut';
var time = 'morning';
```

# challenge
## expression interpolation
## embed given variable expressions within a normal string with es5
## embed given expressions with es6 template literals
## use a single and a double quote within both implementations and punctuation
## contraction and quotes

```
var drink = 'coffee';
var food = 'doughnut';
var time = 'morning';
```

# possible solution
```
var mashUp = 'John said, ' + '"Good ' + time + '" as he drank his ' + drink + ' ate his ' + food + '.';

mashUp; //
'John said, "Good morning" as he drank his coffee ate his doughnut.'
```

## refresh browser

```
var drink = 'coffee';
var food = 'doughnut';
var time = 'morning';
```

# possible es6 solution
```
let mashup = `John said, "Good ${time}", as he drank his ${drink} and ate his ${food}.`;

mashup; //
'John said, "Good morning", as he drank his coffee and ate his doughnut.'
```



# Arrow Functions in ES6

# challenge
## rewrite func1 in ES6 arrow function syntax
## concise body
## block body

# possible solution
```
let func2 = () => 'Hi';

func2(); // 'Hi'

let func3 = () => {
  return 'Hi';
}

func3(); // 'Hi'
```

# challenge
## create two arrow functions
## no parameters and two or more parameters
## choose either concise or block body

# possible solutions
```
let es6name = () => 'John';

es6name(); // 'John'

let es6mult = (x, y) => x * y;

var x = 5;
var y = 6;

es6mult(x, y); // 30
```

# significant challenge
## the map function syntax in ES5 and convert it to ES6

# possible solutions
## the ES5 implementation
```
var numbers = [2, 4, 6, 8];

var es5squared = numbers.map(function (n) {
  return n * n
});

es5squared; // [4, 16, 36, 64]
```

## convert to ES6 format
```
var es6squared = numbers.map(n => n * n);

es6squared; // [4, 16, 36, 64]
```



# The Spread Operator ...

# practice
```
let names = ['Tim', 'Sarah', 'Alex'];

console.log(names); // ['Tim', 'Sarah', 'Alex']

// spread operator
console.log(...names); // Tim Sarah Alex

console.log('Tim', 'Sarah', 'Alex'); // Tim Sarah Alex
```

# challenge
## create two arrays
## add them together using ES5 approach
## add them together using ES6 approach

# possible solution
## using ES5 implementation
```
var es5rain = ['red', 'orange', 'yellow'];
var es5bow = ['green', 'blue', 'indigo', 'violet'];

var es5rainbow = es5rain.concat(es5bow);

es5rainbow; // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
```

## refresh browser

## An ES6 approach
```
let es6bow = ['green', 'blue', 'indigo', 'violet'];
let es6rainbow = ['red', 'orange', 'yellow', ...es6bow];

es6rainbow; // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
```

# challenge
## create a function that will take 3 parameters
## pass to the function an array with 3 elements using the spread operator
## pass those arguments to a template string and return the template string

# possible solution
```
let array = ['ran', 'bathroom', 'quickly'];

function madLib(verb, noun, adjective) {
  return `I ${verb} to the ${noun} and ${adjective} sat down.`;
}

madLib(...array); // 'I ran to the bathroom and quickly sat down.'
```