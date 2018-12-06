// function() {}

// DRY - Don't Repeat Yourself

// Function Declaration
function morningGreeting() {
    return 'Good morning, it is time to get up';
}

morningGreeting();  // 'Good morning, it is time to get up'

/* Parameters
Arguments */
function greetPresident(firstName, lastName)    // Parameters - Function Declaration
{
    return 'Hello,' + firstName + ' ' + lastName + '!';
}

greetPresident('Abraham', 'Lincoln');   // Arguments - Calling the Function / Function Invocation (called or invoked)   // 'Hello, Abraham Lincoln!'
greetPresident('George', 'Washington'); 'Hello, George Washington!'
greetPresident('Thomas', 'Jefferson'); 'Hello, Thomas Jefferson!'
greetPresident('Barak', 'Obama'); 'Hello, Barak Obama!'