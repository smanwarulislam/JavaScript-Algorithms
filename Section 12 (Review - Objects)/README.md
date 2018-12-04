# Objects Intro Lab
# challenge
## build a person with object literal notation
## use three property values consisting of a string, number and boolean

# possible solution
```
var humanBeing = {
	hungry: true,
	age: 25,
	height: '5\'10'
};

humanBeing; // Console
```

# challenge
## build an object with object literal notation
## use dot natation to add four proterties and values

# possible solution
```
var pizza = {};
```

// object.property = value;

```
pizza.crust = 'wheat';
pizza.sauce = 'marinara';
pizza.cheese = 'mozzarella';
pizza.toppings = 'cheese, pepperoni, olives, mushrooms';

pizza;  // Console
```

# challenge
## add properties and values to an object with bracket notation
## use a boolean, string and number

# possible solution
```
var cup = {};
```

// object['property'] = value;

```
cup['insulated'] = true;
cup['liquid'] = 'water';
cup['oz'] = 16;

cup;    // Console
```



# Objects Dot and Bracket Notation Lab
## practice
```
var snowman = {
	isSnow: true,
	color: 'white',
	madeOfSnowballs: 3,
	'first name': 'Frosty'
};
```

# challenge
## access all the properties of object snowman. Start with dot natation
```
var snowman = {
	isSnow: true,
	color: 'white',
	madeOfSnowballs: 3,
	'first name': 'Frosty'
};
```

# possible solutions
```
snowman.isSnow;
snowman.color;
snowman.madeOfSnowballs;
```

## change property values
```
snowman.isSnow = 'yes';
snowman.color = 'orange';
snowman.madeOfSnowballs = 8;

snowman;    // Console
```

// bracket notation
```
snowman['first name'] = 'Jack Frost';

snowman;    // Console
```

# challenge
## build a house object
## add 4 property values with dot notation with at least one value type of string, number and boolean
## add 3 property values with bracket notation with 3 property names that can only be added with bracket notation rather than dot notation

# possible solutions
```
house = {};
house.doors = 4;
house.bedrooms = 3;
house.address = 'Mirpur, Dhaka 1207';
house.office = false;

house;  // Console
```

```
house['swimming pool'] = false;
house['1stOwner'] = 'John Doe';
house['typeof'] = 'apartment';

house;  // Console
```