// this & bind

/* In most cases, the value of "this" is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind method to set the value of a function's "this" regardless of how it's called. Bind creates a new function that will have "this" set to the first parameter passed to bind(). */

let cat = {};

cat = {
    sound: 'meow',
    speak: function() {
        console.log(this.sound);
    }
};

cat.speak();    // 'meow'

let speakFunction = cat.speak;  // Assigned value is function not method. "this" has lost it's context.
speakFunction();    // undefined

// let's look with a JavaScript interpreters sees when we assign cat.speak to the variable speakFunction.
let speakFunction = function() {
    console.log(this.sound);    // When we look at this.sound (this) we don't see an object to connect with it. It is context less.
}

speakFunction();    // undefined

let speakFunction = cat.speak;

let speakFunctionBind = speakFunction.bind(cat);    // speakFunction -> context less. bind(cat) -> context of cat.
speakFunctionBind();    // 'meow'