// review template literals
// created with 'back ticks' not ' ' or " "
// interpolate variables with ${placeholder}
// interpolate any kind of expression
// multi-line
// doesn't interpret backslashes

// challenge
// create multiline string
// create a multiline string using single or double quotes es5
// create multiline string using template literal es6

// possible solution
var string = '"I\'m sick",\n John said.';

string; //
"I'm sick",
John said.

// refresh browser

let string = `"I'm sick",
John said.`;

string; //
"I'm sick",
John said.

var drink = 'coffee';
var food = 'doughnut';
var time = 'morning';

// challenge
// expression interpolation
// embed given variable expressions within a normal string with es5
// embed given expressions with es6 template literals
// use a single and a double quote within both implementations and punctuation
// contraction and quotes

var drink = 'coffee';
var food = 'doughnut';
var time = 'morning';

// possible solution
var mashUp = 'John said, ' + '"Good ' + time + '" as he drank his ' + drink + ' ate his ' + food + '.';

mashUp; //
'John said, "Good morning" as he drank his coffee ate his doughnut.'

// refresh browser

var drink = 'coffee';
var food = 'doughnut';
var time = 'morning';

// possible es6 solution
let mashup = `John said, "Good ${time}", as he drank his ${drink} and ate his ${food}.`;

mashup; //
'John said, "Good morning", as he drank his coffee and ate his doughnut.'