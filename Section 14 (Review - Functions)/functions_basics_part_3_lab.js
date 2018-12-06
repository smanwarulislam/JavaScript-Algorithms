// review function scope
// scope determined by where variable is defined
// global and local
// scope chain
// 'use strict' mode

// practice
function roadTrip() {
	var gallons = 12;
	var mpg = 34;
	return gallons * mpg;
}

roadTrip(); // 408

// challenge
// scope chain
// local scope => parent scope => grandparent scope => great grandparent scope => etc... => global scope => error

// possible solutions
// bad practice => best practice

function roadTrip() {
	gallons = 12;
	mpg = 34;
	return gallons * mpg;
}

var gallons = 12;
var mpg = 34;

function roadTrip() {
	return gallons * mpg;
}

gallons;    // 12
mpg;    // 34
roadTrip(); // 408

// 'use strict' example in the console with an IIFE
(function() {
    'use strict';
    food = 'pizza';
    }());

// error

// challenge
// build a nested function
// child scope => parent scope => global scope
// run the results of the child scope

// possible solution
// have the innermost child function grab a value from the parent and grandparent scope

// global scope
var height = 10;

function volume() {
	// parent scope
	var width = 10;
	var length = 10;

	var volumeOfObject = function() {
		// child or local scope
		return length * width * height;
	}

	// return value of function expression volumeOfObject
	return volumeOfObject();
}

volume();   // 1000