/* primitive data types
string, number, boolean, null, undefined, symbol */

var name = 'Joe';
var name = "Joe";

/* Best Practices
- choose one approach and be consistent
- team styleguide */

// error '"
var name = 'Joe";

// Data Types
typeof 24;  // 'number'
typeof true;    // 'boolean'
typeof undefined;   // 'undefined'

// String Type
typeof '24';    // 'string'
typeof 'true';  // 'string'
typeof 'undefined'; // 'string'

/* - Quotes within strings
- Special Characters
- Length property
- Sample string method */

// Quotes
var greeting = 'It's great to see you!';    // error
var response = "Billy said, "I am sick"";   // error

var greeting = "It's great to see you!";
var response = 'Billy said, "I am sick"';

// Escape character
var greeting = 'It\'s great to see you!';
var response = "Billy said, \"I am sick\"";

/* Use cases
\0 the NULL character
\\ backslash
\n new line
\r carriage return
\v vertical tab
\t tab
\b backspace
\f form feed */

// Length property
var greeting = "It's good to meet you!";
greeting.length;    // 22

// String methods
toUpperCase()

var greeting = 'Good to see you!';
greeting;   // 'Good to see you!'

var shoutGreeting = greeting.toUpperCase();
shoutGreeting;  // 'GOOD TO SEE YOU!'