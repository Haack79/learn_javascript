// all functions in Variable Object before codes run
// code is scanned for variable declarations
// This means functions and variables are HOISTED - lifted up and available b4 execution phase

// functions defined right away, 
// variables are undefined until execution phase. 
// EXECUTION PHASE JUST AFTER CREATION PHASE.

// so below will work cause it's a function declaration 
calculateAge(1990);
function calculateAge(year) {
    console.log(2019 - year); 
}

// but below won't work cause it's function expression 
// assigning function to a variable. 
retirement(1979); 
let retirement = function(year) {
    console.log(65 - (2019 - year)); 
}

// cause hoisting only works with function declarations not function expressions

// yes
// *** variables. 
console.log(age) // undefined - cause variables w/out assigned value = undefined,
let age = 25;  // this age defined in global aspect 
console.log(age) // 25

function foo() {
    console.log(age); // undefined 
    let age = 100; // age defined in funciton context 
    console.log(age); // 100
}
foo();
console.log(age); // 25 - cause did not have access to function scope, but window scope

// BIGGEST TAKE AWAY,   you can use function declarations before even declaring them in the code. 
