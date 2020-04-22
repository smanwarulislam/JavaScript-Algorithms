// review reduce
// higher order function
// two arguments
// high customization

// practice
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

// challenge
// create an array of 5 elements
// find the sum, product, and largest value

// possible solution
// sum
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

// product
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

// practice
numbers = [10, 5, 20, 25, 15];
// find largest number in array

// possible solution
numbers.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
});

// expected output: 25

// practice
// use map method on all elements of an array
// use reduce method to return single value of new array
// CHALLENGE!
// chain method

// possible solution
var numbers = [1, 2, 3, 4];

var triples = numbers.map(function (number) {
  return number * 3;
}).reduce(function (a, b) {
  return a + b;
}, 0);

console.log(triples);
// expected output: 30