// review array methods
// concat method - join two or more arrrays
// reverse method - reverse order of elements
// sort method - sort alpha numeric
// slice method - returns but does not delete a section

// practice
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// challenge
// build another array and add the two together

// possible solution
var colors2 = ['black', 'white', 'brown', 'purple'];
var allColors = colors.concat(colors2);

allColors;  // Console

// challenge
// add another array and use the concat method in two ways to add them together

// possible solution
var colors3 = ['red', 'white', 'blue'];
var moreAllColors = colors.concat(colors2, colors3);

moreAllColors;  // Console

// challenge
// reverse all the elements in the allColors array
// sort all the elements in the allColors array by alphabetical order

// possible solution
var reverseColors = allColors.reverse();

reverseColors;  // Console

var alphabetColors = allColors.sort();

alphabetColors; // Console

// practice
var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];

// challenge
// create var winter and fill with winter values
// create var summer and fill with summer values

// possible solution
var winter = weather.slice(0, 5);

winter; // Console

var summer = weather.slice(5);

summer; // Console

// challenge
// create same variables using negative numbers

// possible solution
var winter = weather.slice(-8, -3);

winter; // Console

var summer = weather.slice(-3);

summer; // Console