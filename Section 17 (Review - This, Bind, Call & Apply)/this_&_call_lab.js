// call method review
// calls a function with a given "this" value and arguments provided individually
// call - individual arguments
// apply - array argument
// C(all) - arguments separated by commas
// A(pply) - argument of an array
// Syntax

function.call(thisContextObject, arg1, arg2, ...);

// practice
var myLanguages = function(lang1, lang2, lang3) {
	console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
};

myLanguages();
// My name is  and I know undefined, undefined, and undefined

// challenge
// create two people objects with a name property and value
// use the call method on our function
// pass person object as the first argument followed by arguments for lang1, lang2 and lang3

// possible solution
var person1 = {
	name: 'Tim'
};

myLanguages.call(person1, 'JavaScript', 'Ruby', 'Python');
// My name is Tim and I know JavaScript, Ruby, and Python

// possible solution
var person2 = {
	name: 'Sarah'
};

var languages = ['English', 'Spanish', 'German'];

myLanguages.call(person2, languages[0], languages[1], languages[2]);
// My name is Sarah and I know English, Spanish, and German