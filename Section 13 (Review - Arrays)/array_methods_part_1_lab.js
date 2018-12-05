// array methods review
// pop() push() shift() unshift()

// practice
var shoppingList = ['apples', 'pizza', 'chicken', 'mashrooms', 'oranges', 'beef'];

shoppingList;   // Console

// challenge
// insert 'crackers' at the front of the array and 'grapes' at the end of the array

// possible solution
shoppingList.unshift('crackers');
shoppingList.push('grapes');

shoppingList;   // Console

shoppingList.length;    // Console

shoppingList.push('siracha', 'popcorn');
shoppingList.unshift('lemonade', 'orange juice');

// challenge
// remove an item from the front and the end of the shoppingList array

// possible solution
shoppingList.shift();
shoppingList.pop();

shoppingList;   // Console

shoppingList.length;    // Console

// practice
// capture shift and pop methods

var firstItemSarah = shoppingList.shift();
var lastItemPhil = shoppingList.pop();

firstItemSarah; // Console

lastItemPhil;   // Console

shoppingList;   // Console

shoppingList.length;    // Console