# Arrays Intro Lab
## practice
```
var baseballTeams = ['Dodgers', 'Giants', 'Mets', 'Yankees', 'Astros'];
```

# challenge
## add a value to the end of the array
## turn 'Giants' into a different team
## access the 'Dodgers' value and save it to variable myFavoriteTeam
## access the length of the array

# possible solution
```
// baseballTeams[6] = 'Cardinals';
baseballTeams[5] = 'Cardinals';
baseballTeams[6] = 'Blue Jays';

baseballTeams;  // Console

baseballTeams[1] = 'Angels';
```

## practice
```
baseballTeams[2] = 'Phillies';

baseballTeams;  // Console

baseballTeams[0];
var myFavoriteTeam = baseballTeams[0];

myFavoriteTeam; // Console

baseballTeams;  // Console
```

## practice
```
var californiaBaseball = baseballTeams[1];

californiaBaseball; // Console

baseballTeams.length;   // Console
```



# Array Methods Part 1 Lab
## practice
```
var shoppingList = ['apples', 'pizza', 'chicken', 'mashrooms', 'oranges', 'beef'];

shoppingList;   // Console
```

# challenge
## insert 'crackers' at the front of the array and 'grapes' at the end of the array

# possible solution
```
shoppingList.unshift('crackers');
shoppingList.push('grapes');

shoppingList;   // Console

shoppingList.length;    // Console

shoppingList.push('siracha', 'popcorn');
shoppingList.unshift('lemonade', 'orange juice');
```

# challenge
## remove an item from the front and the end of the shoppingList array

# possible solution
```
shoppingList.shift();
shoppingList.pop();

shoppingList;   // Console

shoppingList.length;    // Console
```

## practice
// capture shift and pop methods
```
var firstItemSarah = shoppingList.shift();
var lastItemPhil = shoppingList.pop();

firstItemSarah; // Console

lastItemPhil;   // Console

shoppingList;   // Console

shoppingList.length;    // Console
```



# Array Methods Part 2 Lab
## practice
```
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
```

# challenge
## build another array and add the two together

# possible solution
```
var colors2 = ['black', 'white', 'brown', 'purple'];
var allColors = colors.concat(colors2);

allColors;  // Console
```

# challenge
## add another array and use the concat method in two ways to add them together

# possible solution
```
var colors3 = ['red', 'white', 'blue'];
var moreAllColors = colors.concat(colors2, colors3);

moreAllColors;  // Console
```

# challenge
## reverse all the elements in the allColors array
## sort all the elements in the allColors array by alphabetical order

# possible solution
```
var reverseColors = allColors.reverse();

reverseColors;  // Console

var alphabetColors = allColors.sort();

alphabetColors; // Console
```

## practice
```
var weather = ['rainy', 'cold', 'chilly', 'snowy', 'cloudy', 'hot', 'warm', 'humid'];
```

# challenge
## create var winter and fill with winter values
## create var summer and fill with summer values

# possible solution
```
var winter = weather.slice(0, 5);

winter; // Console

var summer = weather.slice(5);

summer; // Console
```

# challenge
## create same variables using negative numbers

# possible solution
```
var winter = weather.slice(-8, -3);

winter; // Console

var summer = weather.slice(-3);

summer; // Console
```