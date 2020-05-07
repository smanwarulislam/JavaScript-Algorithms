// es6

// const

// const statement
/* Declaring const will create a value that is a read-only reference. It can be either global or local to the function or block in which it is declared. It's value must be declared when it is initialized as you can't change the reference or literal that is assigned to it. */

// Let's quickly compare const with let and var:
/* - Both const and let are block scoped. While var is function scoped.
- Both const and let are subject the temporal dead zone. While var is not.
- const does differ from let and var in which values can be reassigned. const is read only by design. */

// lab
var API_KEY = 'abcdefghijk';
var API_KEY = 'qrstuvwxyz';

const API_KEY = 'abcdefghijk';
API_KEY = 'lmnopqrstuv'; // Uncaught TypeError: Assignment to constant variable.

// temporal dead zone -> const

let a = 2;
let a = 3;

const b = 1;
b = 2; // Uncaught TypeError: Assignment to constant variable.