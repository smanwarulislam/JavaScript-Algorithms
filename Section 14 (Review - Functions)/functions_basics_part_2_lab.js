// review
// function expressions
// anonymous functions
// IIFEs

// practice
function knockKnock() {
	return 'Who\'s there?';
}

// challenge
// call the knockKnock function

// possible solution
knockKnock();   // 'Who's there?'

// challenge
// turn knockKnock into an anonymous function within a function expressions
// call the function

// solution
var knockKnock = function() {
	return 'Who\'s there?';
}

knockKnock;

// Console
function() {
	return 'Who\'s there?';
}

knockKnock();   // 'Who's there?'

// Immediately Invoked Function Expressions

// practice
function dogWalker(person, dog) {
	return person + ' is taking ' + dog + ' for a walk.';
}

dogWalker('Paul', 'Charlie');   // 'Paul is taking Charlie for a walk.'

// challenge
// create an immediately invoked function expression
// store the IIFE within a variable and call it

// solution
(function(person, dog) {
	return person + ' is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));

'Paul is taking Charlie for a walk.'    // Console

var dogWalker = (function(person, dog) {
	return person + ' is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));

dogWalker;  // 'Paul is taking Charlie for a walk.'