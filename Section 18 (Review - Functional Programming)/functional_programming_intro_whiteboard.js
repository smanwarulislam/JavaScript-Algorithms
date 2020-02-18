// Functional Programming

/* JavaScript can handle higher-order functions. A higher-order function is a function that can take another function as an argument, or that returns a function as a result. */

/* Eric Elliott explains functional programming this way when he says that:
"Functional programming glossaries contain a large number of large words, but at its core, the essence of FP is really very simple; programs are built mostly with a handful of very small, very reusable, very predictable pure functions." */

/* Pure Function
A pure function is a function in which:
- Given the same input, will always return the same output.
- Produce no side effects.
- Relies on no external state. */

// map/filter/reduce in a tweet:

map(['corn', 'cow', 'chicken'], cook) => ['popcorn', 'hamburger', 'egg']

filter(['popcorn', 'hamburger', 'egg'], isVegetarian) => ['popcorn', 'egg']

reduce(['popcorn', 'egg'], eat) => goes to a human or domestic animal body

// Functional programming announces with filter():

// filter() is a method a.k.a of function on arrays.

array.filter(function (currentValue) {
  return true;
})

// returns array of true values

/* function -> Function Argument
            Callback function */

// currentValue -> Element in array

var testScores = [92, 87, 54, 63, 75, 59];
var passingTest = function (test) {
  return test > 60;
}

var graduation = testScores.filter(passingTest);

var graduation = testScores.filter(function (test) {
  return test > 60;
})

graduation; // [92, 87, 63, 75]

// for loop

var testScores = [92, 87, 54, 63, 75, 59];
var graduation = [];

for (var i = 0; i < testScores.length; i++) {
  if (testScores[i] > 60) {
    graduation.push(testScores[i]);
  }
}

// Functional programming with filter():

var graduation = testScores.filter(function (test) {
  return test > 60;
})