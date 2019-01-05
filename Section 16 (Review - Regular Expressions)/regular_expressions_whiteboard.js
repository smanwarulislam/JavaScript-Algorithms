// REGEX
// Regular Expressions

/* In JavaScript Regular Expressions are Objects. Object that describes a pattern of characters. Used to match a character combination in strings. Performs matching and search and replace functions on Text. */

/* Several examples of real-life use of Regular Expressions relate to email and phone number validation along with domain names or passwords. */

// Syntax
// "REGEX"
/pattern/modifiers;

var alphabet = /ou/i;

regular expression => /ou/i
pattern => ou
modifier => i (case insensitive)

// simple pattern /ou/
// Simple patterns are constructed of characters for which you want to find a direct match.

var question = 'What about it?';
var math = 'I can count to three';
var time = "I can't go until five.";    // there is no match in the string

// match()

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var repeat 'abc abc abc abc';

var regEx = /abc/i;

var regExAlphabet = alphabet.match(regEx).length;
regExAlphabet;  // 1

var regExRepeat = repeat.match(regEx).length;
regExRepeat;    // 1

// global modifier - looks for all matching incidences

var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var regEx = /abc/ig;

// multiple

var guess1 = 'Steve';
var guess2 = 'Joe';
var guess3 = 'Mike';
var guess4 = 'Rob';
var guess5 = 'Merrill';

var regExAnswer = /Rob|Merrill/i;

guess1.match(regExAnswer);  // not been a match
guess2.match(regExAnswer);  // not been a match
guess3.match(regExAnswer);  // not been a match  
guess4.match(regExAnswer);  // match
guess5.match(regExAnswer);  // match

// search()

// success = index of first match
// fail = -1

var trip = 'We should take the car';

var regEx1 = /car/;
var regEx2 = /plane/;

var tripCar = trip.search(regEx1);  // 19
var tripPlane = trip.search(regEx2);    // -1

// /[brackets]/

var sport1 = 'baseball';
var sport2 = 'football';
var sport3 = 'soccer';

var regEx = /[rstlne]/g;

sport1.match(regEx);    // ['s', 'e', 'l', 'l']
sport2.match(regEx);    // ['t', 'l', 'l']
sport3.match(regEx);    // ['s', 'e', 'r']

var regEx = /[^rstlne]/g;

sport1.match(regEx);    // ['b', 'a', 'b', 'a']
sport2.match(regEx);    // ['f', 'o', 'o', 'b', 'a']
sport3.match(regEx);    // ['o', 'c', 'c']