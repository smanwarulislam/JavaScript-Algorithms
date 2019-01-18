# This & Bind Lab
# practice
```
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
```

# challenge
## use bind method twice to give 'this' the context of person1 and person2

# possible solution
```
namer.bind(person1)();  // "Alex"
namer.bind(person2)();  // "Alexis"
```

# practice
```
let number = {
	x: 24,
	y: 22
};

let count = function() {
	console.log(this.x + this.y);
}
```

# sotution
```
count();    // NaN
```

# possible solution
```
let boundFunc = count.bind(number);
boundFunc();    // 46
```



# This & Call Lab
# practice
```
var myLanguages = function(lang1, lang2, lang3) {
	console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3);
};

myLanguages();
// My name is  and I know undefined, undefined, and undefined
```

# challenge
## create two people objects with a name property and value
## use the call method on our function
## pass person object as the first argument followed by arguments for lang1, lang2 and lang3

# possible solution
```
var person1 = {
	name: 'Tim'
};

myLanguages.call(person1, 'JavaScript', 'Ruby', 'Python');
// My name is Tim and I know JavaScript, Ruby, and Python
```

# possible solution
```
var person2 = {
	name: 'Sarah'
};

var languages = ['English', 'Spanish', 'German'];

myLanguages.call(person2, languages[0], languages[1], languages[2]);
// My name is Sarah and I know English, Spanish, and German
```