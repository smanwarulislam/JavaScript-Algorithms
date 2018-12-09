// Loops
// Condition

// Expression -> true / false

// true and false condition
// true
('8' == 8);
(5 > 4);

// false
('8' === 8);
(4 > 6);

// Boolean -> Truthy | Falsey

// Falsey
(false);
(0);
("");
(null);
(undefined);
(NaN);

// Truthy - everything else except Falsey values

// Logical Operators
// and &&
// or ||

// and &&
((5 > 4) && (8 > 3));   // true
((5 > 4) && (8 > 10));   // false
((3 > 4) && (8 > 3));   // false
((3 > 4) && (8 > 10));   // false

// or ||
((5 > 4) || (8 > 3));   // true
((5 > 4) || (8 > 10));   // true
((5 > 6) || (8 > 3));   // true
((5 > 9) || (8 > 10));   // false

// if
// else
// else if

// if
if(5 > 4) {
    // if true, run code here
    console.log('true condition');

    // if false, do not run this code block
}

// 'true condition'

if(5 > 6) {
    // if true, run code here
    console.log('true condition');

    // if false, do not run this code block
}

// no code ran

// else
var testScore = 88;

if(testScore > 90) {
    console.log('Congratulations, you got an A!');
} else {
    console.log('You failed, better study more next time');
}

// 'You failed, better study more next time'

// else if
var testScore = 88;

if(testScore > 90) {
    console.log('Congratulations, you got an A!');
} else if(testScore > 80) {
    console.log('Great job, you got a B!');
} else if(testScore > 70) {
    console.log('Not bad, a C!');
} else {
    console.log('You failed, better study more next time');
}

// 'Great job, you got a B!'