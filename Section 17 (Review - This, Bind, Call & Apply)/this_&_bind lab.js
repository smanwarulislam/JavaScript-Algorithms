// review this & bind
// 'this' is defined by creation context
// in objects 'this' is set to the object method is called on
// bind
// helps 'this' find context
// pass object as argument to bind method to find desired context

// practice
let person1 = {
	name: 'Alex'
};

let person2 = {
	name: 'Alexis'
};

function namer() {
	return this.name;
}

namer();    // ""

// challenge
// use bind method twice to give 'this' the context of person1 and person2

// possible solution
namer.bind(person1)();  // "Alex"
namer.bind(person2)();  // "Alexis"

// practice
let number = {
	x: 24,
	y: 22
};

let count = function() {
	console.log(this.x + this.y);
}

// sotution
count();    // NaN

// possible solution
let boundFunc = count.bind(number);
boundFunc();    // 46