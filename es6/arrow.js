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

// arrow functions share the this key word, they don't have a this, they just use the this of
// the function they are in. 

//es5 
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() { // this is a method and has access to the this of the object
        document.querySelector('.green').addEventListener('click', function() {// this eventhandler and callback is a regular function call and so points to the window object. 
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str); 
        });
    }
}
// box5.clickMe(); // This is box number undefined and it is undefined. 
// the reason is cause the 'this' keyword is pointing to the global object - in the case of the
// browser it is the window object and not the box5 object. 
// only in a method call the this keyword will point to the object but not in a function call
