// [].methods()
// pop()
// push()
// shift()
// unshift()

// Properties
array.length    // missing()

// Methods
array.pop()
array.push()
array.shift()
array.unshift()

// pop()
var testScores = [72, 84, 68, 92];

testScores.pop();
testScores; // [72, 84, 68]

// Variables - Data containers
var lastTestScore = testScores.pop();

lastTestScore;  //  [68]

testScores; // [72, 84]

// push()
testScores.push(74);    // 74 -> argument

testScores; // [72, 84, 74]

testScores.push(32, 96, 84);

testScores; // [72, 84, 74, 32, 96, 84]

// shift()
testScores; // [72, 84, 74, 32, 96, 84]

testScores.shift();

testScores; // [84, 74, 32, 96, 84]

// Variables - Data containers
var firstTest = testScores.shift();

firstTest;  // [84]

testScores; // [74, 32, 96, 84]

// unshift()
testScores; // [74, 32, 96, 84]

testScores.unshift(77, 83);

testScores; // [77, 83, 74, 32, 96, 84]

/* Stacks
Last In First Out (LIFO)    // pop(), push() */

/* Queues
First In First Out (FIFO)   // shift(), unshift() */