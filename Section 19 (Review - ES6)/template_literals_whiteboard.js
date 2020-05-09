// Template Literals in ES6

// Template Literal
/* Template Literals are enclosed by the backtick. They replace the single or double quotes typically used in strings. They may contain placeholders. Placeholders are indicated by the dollar sign and curly braces. The expressions in the placeholders including text contained between them are passed to a function. The parts are concatenated by the default function into a single string. */

// New lines ES5
var sentence = 'My name is Rob 
and I like to run.
';

sentence; // 'My name is Rob and I like to run.'

var sentence = 'My name is Rob\n and I like to run.';

sentence; //
'My name is Rob
and I like to run.
'

// New lines ES6
let sentence = `My name is Rob
and I like to run.`;

sentence; //
'My name is Rob 
and I like to run.
'

// ES5
var topping1 = 'pepperoni';
var topping2 = 'mushrooms';

var pizzaToppings = 'My favorite pizza has ' + topping1 + ' and ' + topping2 + '!';

pizzaToppings; //
'My favorite pizza has pepperoni and mushrooms!'

// ES6
let topping1 = 'pepperoni';
let topping2 = 'mushrooms';

let pizzaToppings = `My favorite pizza has ${topping1} and ${topping2}!`; // syntax -> ${variable}

pizzaToppings; //
'My favorite pizza has pepperoni and mushrooms!'

// ES5
var pizza = {
  topping1: 'pepperoni',
  topping2: 'mushrooms',
  favoritePizza: function () {
    return 'My favorite pizza has ' + this.topping1 + ' and ' + this.topping2 + '!'; // this -> pizza
  }
};

pizza.favoritePizza(); //
'My favorite pizza has pepperoni and mushrooms!'

// ES6
var pizza = {
  topping1: 'pepperoni',
  topping2: 'mushrooms',
  favoritePizza: function () {
    return `My favorite pizza has ${topping1} and ${topping2}!`;
  }
};

pizza.favoritePizza(); //
'My favorite pizza has pepperoni and mushrooms!'