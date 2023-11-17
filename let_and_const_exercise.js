// Q:

// es5 global constants
// var pi = 3.14
// PI = 42; // stop me from doing this!

// A:

// es2015 global constants 
// const PI = 3.14
// PI = 42; // (error, can't reassign)

// quiz


// Q: What is the difference between var and let?

// A: you can reassign and redeclare with var, but you can not redeclare using the let keyword. 
// you can access a hoisted variable with var. let creates block scope.

// Q: What is the difference between var and const?

// A: you can reassign and redeclare with var, but you can not redeclare or reassign using const.
// you can access a hoisted variable with var. const creates block scope.

// Q: What is the difference between let and const?

// A: you can reassign with let, but you can't redeclare or reassign with const.

// Q: What is hoisting?

// A: it’s the way to explain how the JS compiler works. 
// variables are raised to the top of the scope they are declared in. 
// when using var, you can access the variable name and it’s undefined value before it is used later on.

// function declarations are also hoisted and can be invoked “before” they are defined in a codebase.