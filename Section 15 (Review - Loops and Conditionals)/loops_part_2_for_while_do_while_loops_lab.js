// review loops
// while
// do/while
// for (most popular) - initialize, test, update

// challenge
// run a while loop 5x's
// counter, while keyword, (expression), {code block}, update value

// possible solutions
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

// challenge do/while
// create an example that runs once with a false expression

// possible solutions
var counter = 5;

do {
	console.log('loop ran even with false expression.');
	counter++;
} while(counter < 5);

// 'loop ran even with false expression.'

// for loop
// three statements
// initialization of value
// test value
// update value

// challenge
// create an array number values
// loop through that array with a for loop
// run each element of the array through an if, else, else if clause like in last lab with at least two else if options

// possible solutions
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