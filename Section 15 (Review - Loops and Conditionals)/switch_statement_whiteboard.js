// switch statements
// syntax
switch(expression) {
    case x:
        code block;
        break;
    case y:
        code block;
        break;
    default:
        code block;
}

// example
var gradeRemark = 'B';

switch(gradeRemark) {
    case 'A':
        alert('Great job!');
        break;
    case 'B':
        alert('Good job.');
        break;
    case 'C':
        alert('Good try!');
        break;
    default:
        alert('You are grounded');
}

'Good job.' // console

/* to review / recap
1. The switch expression is evaluated once.
2. The value of the expression is compared with the values of each case.
3. If there is a match, the associated block of code is executed. */