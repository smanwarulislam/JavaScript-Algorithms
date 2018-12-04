var car = {
    make: 'Honda',
    color: 'red',
    mpg: 34,
    gallons: 12,
    engine: 1,
    'origin year': 1984,
    'function': 'drive'
};

// Bracket Notation
car['origin year'] = 1984;
car['function'] = 'drive';

// Dot Notation
var car = {
    make: 'Honda',
    color: 'red',
    mpg: 34,
    gallons: 12,
    engine: 1,
    'origin year': 1984,
    'function': 'drive'
};

// Accessing Property - object.property;
car.color;  // 'red'
car.make;   // 'Honda'

car.color = 'green';
car.make = 'Toyota';

// Bracket Notation
var car = {
    make: 'Honda',
    color: 'red',
    mpg: 34,
    gallons: 12,
    engine: 1,
    'origin year': 1984,
    'function': 'drive'
};

// Accessing Property - object['property'];
car['color'];  // 'red'
car['make'];   // 'Honda'
car['origin year']; // 1984
car['function'];    // 'drive'

Dot vs. Bracket Notation
car.color;  // 'red'
car['color'];  // 'red'

var football = {
    color: 'brown',
    laces: true,
    material: 'leather',
    'made in': 'Japan',
    'length&width': '6" x 12"'
};

football.color; // 'brown'
football['color']; // 'brown'

football.laces; // true
football['laces'];  // true

football.material;  // 'leather'
football['material'];   // 'leather'

football['made in'];    // 'Japan'

football['length&width'];   // '6" x 12"'