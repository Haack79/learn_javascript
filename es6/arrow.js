// fat arrow functions
const years = [1900, 1930, 1979, 1950, 1889];

//es5 // with map have access to cur element, cur indx, and array
var ages5 = years.map(function(el) {
    return 2020 - el; 
});
console.log(ages5);

// es6
let ages6 = years.map(el => 2020 - el);
// arrow with 1 argument, return is implicit, automatic
console.log(ages6); 
// if 2 arguements add params
ages6 = years.map((el, index) => `Age element ${index + 1} ${2020 - el}.`);
console.log(ages6); 
// when more than one line of code, return is not implicit and have to put in curly brackets
// then have to declare the return 
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1} ${age}`; 
});

console.log(ages6); 

