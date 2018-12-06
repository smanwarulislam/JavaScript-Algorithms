// function scope
function scope() {
    var scope = 'You are here';
}

var scope = 'public';   // scope -> Global

function checkScope() {
    var scope = 'private';  // scope -> Local
    return scope;
}

scope;  // 'public'

function checkScope() {
    var scope = 'private';  // scope -> Local
    return scope;
}

scope;  // error

var scope = 'public';   // scope -> Global

function checkScope() {
    var scope = 'private';  // scope -> Local
    return scope;
}

scope;  // 'public'
checkScope();   // 'private'

var scope = 'public';
var newScope = 'global variable';

function checkScope() {
    var scope = 'private';
    return [scope, newScope];
}

newScope;  // 'global variable'
checkScope();   // 'private', 'global variable'

/* scope chain
child scope -> parent scope -> global scope */

// var keyword
dog = 'Oscar';
var dog = 'Oscar';

var scope = 'public';

function checkScope() {
    scope = 'private';
    return scope;
}

scope;  // 'public'
checkScope();   // 'private'
scope;  // 'private'

// strict mode
// 'use strict'
dog = 'Oscar';  // error
x = 3.14;   // error

/* 'use strict' mode
Unfortunately, you can't use in your console like you can your text editor */