// let statement review
// let is an alternative to var
// utilizes block scope while var only utilizes function scope
// temporal dead zone
// using the let statement should help our code make more sense and our code less buggy

// challenge
// create identical set of code and show how 'var' does not take advantage of block scope but 'let' does

// possible solution
var a = 4;

if (true) {
  var b = 5;
}

console.log(a * b); // 20

var a = 4;

if (true) {
  let b = 5;
}

console.log(a * b); // error
// b is not defined

// challenge
// var vs. let
// talk line by line
// type out yourself

// possible solution
function varTest() {
  var x = 1;

  if (true) {
    var x = 2; // the temporal dead zone does not apply to var statements
    console.log(x);
  }
  console.log(x);
}

varTest();
// 2
// 2

function letTest() {
  let x = 1;

  if (true) {
    let x = 2; // It's local scope is the block statement. It is declared with in. This is why the temporal dead zone does an apply. It has a different scope.
    console.log(x);
  }
  console.log(x);
}

letTest();
// 2
// 1