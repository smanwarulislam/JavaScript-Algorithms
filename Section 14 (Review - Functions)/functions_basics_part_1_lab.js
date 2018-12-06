// function() {}
// keyword function
// function name or anonymous
// code block
// called or invoked
// parameters and arguments

// practice
function goodMorningNeighbor() {
	return 'Good morning, neighbor!';
}

goodMorningNeighbor();  // 'Good morning, neighbor!'

// practice
function goodEveningNeighbor() {
	return 'Good evening, neighbor, thanks for everything!';
}

goodEveningNeighbor();  // 'Good evening, neighbor, thanks for everything!'

// challenge
// rewrite both functions including a parameter and argument for name in both
// in the second function replace 'everything' with a parameter and argument naming a task
function goodMorningNeighbor() {
	return 'Good morning, neighbor!';
}

function goodEveningNeighbor() {
	return 'Good evening, neighbor, thanks for everything!';
}

// possible solution
function goodMorningNeighbor(name) {
	return 'Good morning, ' + name + '!';
}

goodMorningNeighbor('Joe'); // 'Good morning, Joe!'

function goodEveningNeighbor(name, task) {
	return 'Good evening, ' + name + ', thanks for ' + task + '!';
}

goodEveningNeighbor('Hank', 'taking the trash to the curb');    // 'Good evening, Hank, thanks for taking the trash to the curb!'