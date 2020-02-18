// review
// functional programming
// pillar of JavaScript
// functions are values and can be passed other functions as arguments
// higher order functions, pure functions

// Object Oriented Programming Dilemma

// you want a banana
// you ask for a banana
// you get the banana
// you also get the gorilla that was holding the banana
// you also get the jungle that the gorilla was living in

// practice

var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
var goOutside = [];

for (var i = 0; i < weather.length; i++) {
  if (weather[i] > 70) {
    goOutside.push(weather[i]);
  }
}

goOutside; // [72, 84, 92, 85, 72]

// practice
// filter method
// pass a function to filter method and retrun an array of all elements that return a value of true

// solution

var niceWeather = function (temp) {
  return temp > 70;
}

var goOutside = weather.filter(niceWeather);

goOutside; // [72, 84, 92, 85, 72]

var goOutside = weather.filter(function (temp) {
  return temp > 70;
})

goOutside; // [72, 84, 92, 85, 72]

// practice

// for loop
var forecast = [{
    day: 'Monday',
    sun: true
  },
  {
    day: 'Tuesday',
    sun: false
  },
  {
    day: 'Wednesday',
    sun: false
  },
  {
    day: 'Thursday',
    sun: true
  },
  {
    day: 'Friday',
    sun: false
  },
  {
    day: 'Saturday',
    sun: true
  },
  {
    day: 'Sunday',
    sun: false
  }
];

var sunnyDays = [];

for (var i = 0; i < forecast.length; i++) {
  if (forecast[i].sun) {
    sunnyDays.push(forecast[i]);
  }
}

sunnyDays;
/* {day: "Monday", sun: true}
          {day: "Thursday", sun: true}
          {day: "Saturday", sun: true} */

// Functional programming with filter():
var forecast = [{
    day: 'Monday',
    sun: true
  },
  {
    day: 'Tuesday',
    sun: false
  },
  {
    day: 'Wednesday',
    sun: false
  },
  {
    day: 'Thursday',
    sun: true
  },
  {
    day: 'Friday',
    sun: false
  },
  {
    day: 'Saturday',
    sun: true
  },
  {
    day: 'Sunday',
    sun: false
  }
];

var sunnyDays = forecast.filter(function (weather) {
  return weather.sun;
})

sunnyDays;
/* {day: "Monday", sun: true}
          {day: "Thursday", sun: true}
          {day: "Saturday", sun: true} */