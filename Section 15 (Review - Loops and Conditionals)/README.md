# Loops and Conditionals Lab
# challenge
## change the code to the following expressions to make them true
```
(5 > 7);
false   // console

(7 === '7');
false   // console

(7 === 'seven');
false   // console

(false);
false   // console
```

# possible solutions
```
(5 < 7);
true    // console

// or
(9 > 7);
true    // console

(7 == '7');
true    // console

(7 != 'seven');
true    // console

// or
(7 !== 'seven');
true    // console

(true);
true    // console
```

# challenge
## use logical operators && and || to show four different code examples for each

# possible solutions
// &&
```
((5 > 3) && (10 > 2));
true    // console

((5 < 3) && (10 > 2));
false   // console

((5 > 3) && (10 < 2));
false   // console

((5 < 3) && (10 < 2));
false   // console
```

// ||
```
((5 > 3) || (10 > 2));
true    // console

((5 < 3) || (10 > 2));
true    // console

((5 > 3) || (10 < 2));
true    // console

((5 < 3) || (10 < 2));
false   // console
```

# challenge
## create an if, else, else if statement
## use at least one if, three else if and one else statement
## use at least one logical operator
## suggestion weather

# possible solutions
```
var temp = 74;
var rainy = true;

if(temp > 90) {
	console.log('I am going swimming');
} else if(temp > 80) {
	console.log('Time for a tan');
} else if((temp > 70) && (!rainy)) {
	console.log('I am going for a walk');
} else if((temp > 70) && (rainy)) {
	console.log('I am going to grab my umbrella');
} else {
	console.log('I am staying home!');
}

'I am going to grab my umbrella'    // console
```



# Switch Statement Lab
# challenge
## create switch statement with evaluation value between 1 - 6
## have code block for each possible match to run
## end with default code block
## expression (1-6) can be hard coded by you or you can create method for random number

# possible solutions
```
var dice = 6;

switch(dice) {
    case 1:
		alert('Terrible roll!');
		break;
    case 2:
		alert('Bad roll');
		break;
    case 3:
		alert('Could do better');
		break;
	case 4:
		alert('Nice toss');
		break;
	case 5:
		alert('Good roll');
		break;
	case 6:
		alert('Great roll');
		break;
    default:
		alert('Did you forget to roll?');
}

'Great roll'    // console
```

# Bonus Question
```
Math.floor()    // This will take any JavaScript number value and round it down to the nearest integer

Math.floor(4.15);
4   // console

Math.floor(9.98);
9   // console

Math.random(); // This will create a random number including 0 up to but not including 1

0.9828036266949376  // console

Math.random();
0.63184454381450386 // console

Math.random();
0.1581195180585966  // console
```

# challenge
# possible solution
```
Math.floor(Math.random() * 7);
0   // console

Math.floor(Math.random() * 7);
5   // console

Math.floor(Math.random() * 7);
1   // console

Math.floor(Math.random() * 7);
2   // console

Math.floor(Math.random() * 7);
0   // console
```

# challenge
// now we can just assign this value to dice

# possible solution
```
switch(Math.floor(Math.random() * 7);) {
    case 1:
		alert('Terrible roll!');
		break;
    case 2:
		alert('Bad roll');
		break;
    case 3:
		alert('Could do better');
		break;
	case 4:
		alert('Nice toss');
		break;
	case 5:
		alert('Good roll');
		break;
	case 6:
		alert('Great roll');
		break;
    default:
		alert('Did you forget to roll?');
}


// console
/* when we run switch statement we can see that random number creator is working every time we run switch statement. The random number is finding a case match and returning the appropriate block of code alarming us with a message. */
```



# Loops Part 2 - For, While, Do-While Loops Lab
# challenge
## run a while loop 5x's
## counter, while keyword, (expression), {code block}, update value

# possible solutions
```
var i = 0;

while(i < 5) {
	console.log('This counter has run ' + (i + 1) + ' times.');
	i++;
}

// 'This counter has run 1 times.'
// 'This counter has run 2 times.'
// 'This counter has run 3 times.'
// 'This counter has run 4 times.'
// 'This counter has run 5 times.'
```

# challenge do/while
## create an example that runs once with a false expression

# possible solutions
```
var counter = 5;

do {
	console.log('loop ran even with false expression.');
	counter++;
} while(counter < 5);

// 'loop ran even with false expression.'
```

## for loop
## three statements
## initialization of value
## test value
## update value

# challenge
## create an array number values
## loop through that array with a for loop
## run each element of the array through an if, else, else if clause like in last lab with at least two else if options

# possible solutions
```
var battingAverage = [333, 327, 267, 294, 303, 310, 255, 242, 217];

for(i = 0; i < battingAverage.length; i++) {
	if(battingAverage[i] > 300) {
		console.log('Here is a million dollar bonus');
	} else if(battingAverage[i] > 280) {
		console.log('Here is a half million dollar bonus');
	} else if(battingAverage[i] > 250) {
		console.log('Try harder');
	} else {
		console.log('You\'re cut');
	}
}

// 'Here is a million dollar bonus' -> two times
// 'Try harder'
// 'Here is a half million dollar bonus'
// 'Here is a million dollar bonus' / two times
// 'Try harder'
// 'You're cut' -> two times
```