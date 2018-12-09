// review
// evaluate conditions
// like a path
// ==, ===
// <, >
// truthy and falsey
// &&, ||
// if, else, else if

// challenge
// change the code to the following expressions to make them true
(5 > 7);
false   // console

(7 === '7');
false   // console

(7 === 'seven');
false   // console

(false);
false   // console

// possible solutions
(5 < 7);
true    // console

// or
(9 > 7);
true    // console

(7 == '7');
true    // console

(7 != 'seven');
true    // console

// or
(7 !== 'seven');
true    // console

(true);
true    // console

// challenge
// use logical operators && and || to show four different code examples for each

// possible solutions
// &&
((5 > 3) && (10 > 2));
true    // console

((5 < 3) && (10 > 2));
false   // console

((5 > 3) && (10 < 2));
false   // console

((5 < 3) && (10 < 2));
false   // console

// ||
((5 > 3) || (10 > 2));
true    // console

((5 < 3) || (10 > 2));
true    // console

((5 > 3) || (10 < 2));
true    // console

((5 < 3) || (10 < 2));
false   // console

// challenge
// create an if, else, else if statement
// use at least one if, three else if and one else statement
// use at least one logical operator
// suggestion weather

// possible solutions
var temp = 74;
var rainy = true;

if(temp > 90) {
	console.log('I am going swimming');
} else if(temp > 80) {
	console.log('Time for a tan');
} else if((temp > 70) && (!rainy)) {
	console.log('I am going for a walk');
} else if((temp > 70) && (rainy)) {
	console.log('I am going to grab my umbrella');
} else {
	console.log('I am staying home!');
}

'I am going to grab my umbrella'    // console