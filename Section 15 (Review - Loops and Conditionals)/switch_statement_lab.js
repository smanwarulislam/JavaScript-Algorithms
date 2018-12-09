// review switch statement
// expression, case, run code for match
// break
// default

// syntax

switch(expression) {
    case a:
		code block;
		break;
    case b:
		code block;
		break;
    case c:
		code block;
		break;
    default:
		code block;
}

// challenge
// create switch statement with evaluation value between 1 - 6
// have code block for each possible match to run
// end with default code block
// expression (1-6) can be hard coded by you or you can create method for random number

// possible solutions
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

// Bonus Question

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

// challenge
// possible solution
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

// challenge
// now we can just assign this value to dice

// possible solution
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