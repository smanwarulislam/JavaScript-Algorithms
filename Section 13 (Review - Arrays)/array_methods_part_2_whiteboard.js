// concat()
// reverse()
// sort()
// slice()

// concat()
var bigDog = ['golden retriever', 'St. bernard', 'german shepherd', 'bernese mountain dog'];

var littleDog = ['terrier', 'weiner dog', 'corgie', 'pomeranian'];

var allDogs = bigDog.concat(littleDog);

allDogs;    // ['golden retriever', 'St. bernard', 'german shepherd', 'bernese mountain dog', 'terrier', 'weiner dog', 'corgie', 'pomeranian']

var cats = ['alley cat', 'fraidy cat', 'scaredy cat'];

var enemies = bigDog.concat(littleDog, cats);

enemies;    // ['golden retriever', 'St. bernard', 'german shepherd', 'bernese mountain dog', 'terrier', 'weiner dog', 'corgie', 'pomeranian', 'alley cat', 'fraidy cat', 'scaredy cat']

// reverse()
var smallestFirst = allDogs.reverse();

smallestFirst;  // ['terrier', 'weiner dog', 'corgie', 'pomeranian', 'golden retriever', 'St. bernard', 'german shepherd', 'bernese mountain dog']

// sort()
var alphaOrder = allDogs.sort();

alphaOrder; // ['bernese mountain dog', 'corgie', 'german shepherd', ...]

// slice()
allDogs;    // ['golden retriever', 'St. bernard', 'german shepherd', 'bernese mountain dog', 'terrier', 'weiner dog', 'corgie', 'pomeranian']

var sliceOfDogs = allDogs.slice(1, 4);

sliceOfDogs;    // ['St. bernard', 'german shepherd', 'bernese mountain dog']

var sliceOfDogs = allDogs.slice(-3, -1);

sliceOfDogs;    // ['weiner dog', 'corgie']

var sliceOfDogs = allDogs.slice(3);

sliceOfDogs;    // ['bernese mountain dog', 'terrier', 'weiner dog', 'corgie', 'pomeranian']