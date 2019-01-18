// call method

// The call() method calls a function with a given "this" value and arguments provided individually.

// call invokes the function and allows you to pass in arguments one by one.

// syntax
fun.call(object, arg1, arg2, ...);

// example
var obj = {
    num: 2
};

var addToThis = function(a, b, c) {
    return this.num + a + b + c;    // at this point our this.num does not have a context
};

addToThis.call(obj, 1, 2, 3);   /* in this case 'this' will now have the context of 'obj'. So this.num is pointing to obj.num. (obj -> this.num context) */
// 8

// another example
var person1 = {
    firstName: 'John',
    lastName: 'Doe'
};

var person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
};

function hello(greeting) {
    console.log(greeting + '' + this.firstName + '' + this.lastName);   /* our this.firstName and this.lastName at this point have no context */
}

hello();    // undefined undefined undefined

hello.call(person1, 'Hello');   // this.firstName -> person1, this.lastName -> person1, greeting -> 'Hello'
// 'Hello John Doe'

hello.call(person2, 'Hello');   // this.firstName -> person2, this.lastName -> person2, greeting -> 'Hello'
// 'Hello Jane Doe'