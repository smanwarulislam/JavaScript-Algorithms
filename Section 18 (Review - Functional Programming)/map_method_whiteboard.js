// Functional programming with map()

/* Pure Function:
A function is only pure if, given the same input, it will always produce the same output. */

// Impure Function
Math.random()
/* Math.random() produces a new random number between 0 and 1 every time you run it. This is an example of a function that given the same input does not return the same output. */

Math.random(); // 0.8572785833643801
Math.random(); // 0.3319855077082374
Math.random(); // 0.23637153552052226
Math.random(); // 0.8348045135424842
Math.random(); // 0.6853222661247647

// Higher order function
map()
// Creates a new array with the results of calling a provided function on every element of an array.
/* filter() through away some of the items of an array. map() transforms all of the items and returns them in a new array. */

var forecast = [{
    day: 'Monday',
    sun: true,
    humidity: 10
  },
  {
    day: 'Tuesday',
    sun: false,
    humidity: 100
  },
  {
    day: 'Wednesday',
    sun: false,
    humidity: 100
  },
  {
    day: 'Thursday',
    sun: true,
    humidity: 25
  },
  {
    day: 'Friday',
    sun: false,
    humidity: 100
  },
  {
    day: 'Saturday',
    sun: true,
    humidity: 15
  },
  {
    day: 'Sunday',
    sun: false,
    humidity: 100
  }
];

// for loop
var humid = [];

for (var i = 0; i < forecast.length; i++) {
  humid.push(forecast[i].humidity);
}

humid; // [10, 100, 100, 25, 100, 15, 100]

// Higher order function map()
var humid = forecast.map(function (wetness) {
  return wetness.humidity;
});

humid; // [10, 100, 100, 25, 100, 15, 100]

var numbers = [5, 10, 15, 20, 25];

var triples = numbers.map(function (num) {
  return num * 3;
});

triples; // [15, 30, 45, 60, 75]