// Function Expressions
// Anonymous Functions
// IIFE

// Function Expression
// Function Declaration

// Function Declaration
function greeting() // Function Declarations are always named
{
    return 'Good morning, neighbor!';
}

greeting(); // 'Good morning, neighbor!'

// Function Expression
var morningGreeting = function() {  // access to function -> morningGreeting    | anonymous function -> function()
    return 'Good morning, neighbor!';
}

morningGreeting();  // 'Good morning, neighbor!'

// Regular Function
function greetFullName(firstName, lastName) {
    return 'Hello, ' + firstName + ' ' + lastName + '!';
}

greetFullName('Rob', 'Merrill');

// 'Hello, Rob Merrill!'

// Interpreter Hoists function to the top making it immediately available to be called
greetFullName('Rob', 'Merrill');

function greetFullName(firstName, lastName) {
    return 'Hello, ' + firstName + ' ' + lastName + '!';
}

// 'Hello, Rob Merrill!'

// Function Expression
var greetFullName = function(firstName, lastName) {
    return 'Hello, ' + firstName + ' ' + lastName + '!';
}

greetFullName('Rob', 'Merrill');

// 'Hello, Rob Merrill!'

// Interpreter Hoists variable to top giving it the value of undefined
greetFullName('Rob', 'Merrill');

var greetFullName = function(firstName, lastName) {
    return 'Hello, ' + firstName + ' ' + lastName + '!';
}

// error greetFullName undefined

// IIFE - Immediately Invoked Function Expressions
var greetFullName = (function(firstName, lastName) {
    return 'Hello, ' + firstName + ' ' + lastName + '!';
}());

/* Extra () - immediately calls the function
May be inside or outside of wrapped function
Place arguments within parenthesis */

// Function Expression
var greeting1 = function() {
    return 'Hello, everyone!';
}

greeting1; = // function code

// IIFE
var greeting2 = (function() {
    return 'Hello, everyone!';
}());

greeting2;  // 'Hello, everyone!'