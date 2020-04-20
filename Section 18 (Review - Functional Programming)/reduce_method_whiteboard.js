// Functional programming with reduce()

/* reduce()
- List Transformation
Applies a function against an accumulator and each value from the array (from left to right) to reduce it to a single value. */

// reduce()
array.reduce(function (accumulator, currentValue, currentIndex, arr) initialValue)

/* accumulator -> - Required
               - Result of reduction so far

currentValue -> - Required
                - Current value of index
                
currentIndex, arr, initialValue -> - Optional */

// reduce() method on arrays
var numbers = [1, 2, 3, 4];

numbers.reduce(function (acc, curr, idx, arr) {
  return acc + curr;
}, 5);

// 6 (first call)
// 8 (second call)
// 11 (third call)
// 15 (fourth call)

// reduce() method on arrays
var multArr = [
  [0, 1],
  [2, 3],
  [4, 5]
];

multArr.reduce(function (acc, curr, idx, arr) {
  return acc.concat(curr);
}, [-2, -1]);

// [-2, -1, 0, 1] (first call)
// [-2, -1, 0, 1, 2, 3] (second call)
// [-2, -1, 0, 1, 2, 3, 4, 5] (third call)