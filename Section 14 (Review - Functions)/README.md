# Functions Basics Part 1 Lab
## practice
```
function goodMorningNeighbor() {
	return 'Good morning, neighbor!';
}

goodMorningNeighbor();  // 'Good morning, neighbor!'
```

## practice
```
function goodEveningNeighbor() {
	return 'Good evening, neighbor, thanks for everything!';
}

goodEveningNeighbor();  // 'Good evening, neighbor, thanks for everything!'
```

# challenge
## rewrite both functions including a parameter and argument for name in both
## in the second function replace 'everything' with a parameter and argument naming a task
```
function goodMorningNeighbor() {
	return 'Good morning, neighbor!';
}

function goodEveningNeighbor() {
	return 'Good evening, neighbor, thanks for everything!';
}
```

# possible solution
```
function goodMorningNeighbor(name) {
	return 'Good morning, ' + name + '!';
}

goodMorningNeighbor('Joe'); // 'Good morning, Joe!'

function goodEveningNeighbor(name, task) {
	return 'Good evening, ' + name + ', thanks for ' + task + '!';
}

goodEveningNeighbor('Hank', 'taking the trash to the curb');    // 'Good evening, Hank, thanks for taking the trash to the curb!'
```



# Functions Basics Part 2 Lab
## practice
```
function knockKnock() {
	return 'Who\'s there?';
}
```

# challenge
## call the knockKnock function

# possible solution
```
knockKnock();   // 'Who's there?'
```

# challenge
## turn knockKnock into an anonymous function within a function expressions
## call the function

# solution
```
var knockKnock = function() {
	return 'Who\'s there?';
}

knockKnock;
```

// Console
```
function() {
	return 'Who\'s there?';
}

knockKnock();   // 'Who's there?'
```

## Immediately Invoked Function Expressions

## practice
```
function dogWalker(person, dog) {
	return person + ' is taking ' + dog + ' for a walk.';
}

dogWalker('Paul', 'Charlie');   // 'Paul is taking Charlie for a walk.'
```

# challenge
## create an immediately invoked function expression
## store the IIFE within a variable and call it

# solution
```
(function(person, dog) {
	return person + ' is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));

'Paul is taking Charlie for a walk.'    // Console

var dogWalker = (function(person, dog) {
	return person + ' is taking ' + dog + ' for a walk.';
}('Paul', 'Charlie'));

dogWalker;  // 'Paul is taking Charlie for a walk.'
```



# Functions Basics Part 3 Lab
## practice
```
function roadTrip() {
	var gallons = 12;
	var mpg = 34;
	return gallons * mpg;
}

roadTrip(); // 408
```

# challenge
## scope chain
## local scope => parent scope => grandparent scope => great grandparent scope => etc... => global scope => error

# possible solutions
## bad practice => best practice

```
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
```

## 'use strict' example in the console with an IIFE
```
(function() {
    'use strict';
    food = 'pizza';
    }());

// error
```

# challenge
## build a nested function
## child scope => parent scope => global scope
## run the results of the child scope

# possible solution
```
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
```