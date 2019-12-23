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
let age = 25; 
console.log(age) // 25

function foo() {
    let age = 100;
    console.log(age); // 100
}
foo();
console.log(age); // 25
