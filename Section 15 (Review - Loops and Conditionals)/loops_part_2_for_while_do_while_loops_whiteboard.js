// loops
// while, do / while, for

// while
while() {
    // statement to execute
}

// let's look at some code
var score = 0;

while(score < 5) {
    console.log(score);
    score++;
}

// 0
// 1
// 2
// 3
// 4

// do / while
do {
    // code block;
} while(expression);

// let's look at an example
var value = 5;

do {
    console.log(value);
    value++;
} while(value < 3); // value = 6

// 5

// for
for(initialization; condition; update) {
    // code block to be ran;
}

// let's look at some code
for(var i = 0; i < 10; i++) {   // var i = 0; -> Something to note as a this is not like scope. This is not a local variable. It is global
    console.log('My favorite number is ' + i + '!');
}

// 'My favorite number is 0!'
// 'My favorite number is 1!'
// 'My favorite number is 2!'
// ...
// 'My favorite number is 9!'

// for, while (Both of this approaches are equally valid)
// for
for(var i = 0; i < 10; i++) {
    console.log('My favorite number is ' + i + '!');
}

// while
var i = 0;

while(i < 10) {
    console.log('My favorite number is ' + i + '!');
    i++;
}

// looping through an array
// arrays
var zooNames = ['lion', 'tiger', 'bear'];
var arrayLength = zooNames.length;  // 3

for(i = 0; i < arrayLength; i++) {
    console.log('My favorite zoo animal is the ' + i + '!');
}

// 'My favorite zoo animal is the lion!'
// 'My favorite zoo animal is the tiger!'
// 'My favorite zoo animal is the bear!'