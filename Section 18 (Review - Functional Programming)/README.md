# Functional Programming

# Functional programming with filter()

# practice
```
var weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
var goOutside = [];

for (var i = 0; i < weather.length; i++) {
  if (weather[i] > 70) {
    goOutside.push(weather[i]);
  }
}

goOutside; // [72, 84, 92, 85, 72]
```

# practice
## filter method
## pass a function to filter method and return an array of all elements that return a value of true

# solution
```
var niceWeather = function(temp) {
  return temp > 70;
};

var goOutside = weather.filter(niceWeather);

goOutside; // [72, 84, 92, 85, 72]

var goOutside = weather.filter(function(temp) {
  return temp > 70;
});

goOutside; // [72, 84, 92, 85, 72]
```

# practice
## for loop
```
var forecast = [
  {
    day: "Monday",
    sun: true
  },
  {
    day: "Tuesday",
    sun: false
  },
  {
    day: "Wednesday",
    sun: false
  },
  {
    day: "Thursday",
    sun: true
  },
  {
    day: "Friday",
    sun: false
  },
  {
    day: "Saturday",
    sun: true
  },
  {
    day: "Sunday",
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
```

# Functional programming with filter():
```
var forecast = [
  {
    day: "Monday",
    sun: true
  },
  {
    day: "Tuesday",
    sun: false
  },
  {
    day: "Wednesday",
    sun: false
  },
  {
    day: "Thursday",
    sun: true
  },
  {
    day: "Friday",
    sun: false
  },
  {
    day: "Saturday",
    sun: true
  },
  {
    day: "Sunday",
    sun: false
  }
];

var sunnyDays = forecast.filter(function(weather) {
  return weather.sun;
});

sunnyDays;
/* {day: "Monday", sun: true}
          {day: "Thursday", sun: true}
          {day: "Saturday", sun: true} */
```



# Functional programming with map()

# practice
```
var numbers = [2, 4, 6, 8, 10, 12];

var double = numbers.map(function (mult) {
  return mult * 2;
}).map(function (mult) {
  return mult + 1;
});

double; // [5, 9, 13, 17, 21, 25]
```

# challenge
## change an array of greetings to all upper case words
## save the first word in the array to a variable

# possible solution
```
var greeting = ['hi', 'hello', 'hey', 'thanks'];

var shout = greeting.map(function (salutation) {
  return salutation.toUpperCase();
});

shout; // ["HI", "HELLO", "HEY", "THANKS"]

var greetingLowerCase = shout.map(function (salutation) {
  return salutation.toLowerCase();
});

greetingLowerCase; // ["hi", "hello", "hey", "thanks"]

shout; // ["HI", "HELLO", "HEY", "THANKS"]

var hiShout = shout.shift();

hiShout; // "HI"
```



# Functional programming with reduce()

# practice
```
var homeruns = [{
  batter: 12
}, {
  batter: 21
}, {
  batter: 28
}, {
  batter: 42
}, {
  batter: 31
}, {
  batter: 22
}, {
  batter: 17
}, {
  batter: 16
}, {
  batter: 5
}, ];

var totalHomers = homeruns.reduce(function (a, b) {
  console.log('accumulative ', a, 'current ', b);
  return a + b.batter;
}, 0);

/* expected output:
accumulative 0 current {
  batter: 12
}
accumulative 12 current {
  batter: 21
}
accumulative 33 current {
  batter: 28
}
accumulative 61 current {
  batter: 42
}
accumulative 103 current {
  batter: 31
}
accumulative 134 current {
  batter: 22
}
accumulative 156 current {
  batter: 17
}
accumulative 173 current {
  batter: 16
}
accumulative 189 current {
  batter: 5
} */

console.log(totalHomers);
// expected output: 194
```

# challenge
## create an array of 5 elements
## find the sum, product, and largest value

# possible solution
## sum
```
var numbers = [5, 10, 15, 20, 25];

numbers.reduce(function (x, y) {
  console.log(x, y);
  return x + y;
});

/* expected output:
5 10
15 15
30 20
50 25
75 */
```

## product
```
var numbers = [5, 10, 15, 20, 25];

numbers.reduce(function (x, y) {
  console.log(x, y);
  return x * y;
});

/* expected output:
5 10
50 15
750 20
15000 25
375000 */
```

# practice
```
numbers = [10, 5, 20, 25, 15];
```
## find largest number in array

# possible solution
```
numbers.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});

// expected output: 25
```

# practice
## use map method on all elements of an array
## use reduce method to return single value of new array
## CHALLENGE!
## chain method

# possible solution
```
var numbers = [1, 2, 3, 4];

var triples = numbers.map(function (number) {
  return number * 3;
}).reduce(function (a, b) {
  return a + b;
}, 0);

console.log(triples);
// expected output: 30
```