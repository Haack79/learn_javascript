/*
how to polyfill to use most feauteres with transpiling and polyfiling(converting to es5);
es6/ ecma2015 bigget changes
let, const, blocks iifes, strings, arrow functions, destructuring, arrays, spread operator, rest and default params
Maps, classes and subclasses. 
Promises, native modules. 
*/

// Variable declarations
// let and const
// es5 way - It is FUNCTION SCOPED 
var name5 = 'Henry dog';
var age5 = 40;
name5 = 'Henry Haack';
console.log(name5); // Henry Haack

//es6 - BLOCK SCOPED
const name6 = 'Henry doggie';
let age = 40;
name6 = 'Henry Haack';
console.log(name6); // error can't assignment to constatn variable 

// es5 way function
function driversLicense5(passedTest) {
    if(passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1999;
        console.log(firstName + ' allowed to drive' + yearOfBirth);
    }
};
driversLicense5(true); 

// es6 way 
function driversLicense6(passedTest) {
    if(passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1999;
        console.log(firstName + ' allowed to drive' + yearOfBirth);
    }
};
driversLicense6(true); 

// difference is with function scope, the variables are able to be accessed through the whole function
// so you can move the console.log with the variables inside the brackets and it still works. the brackets are the block scope
function driversLicense5(passedTest) {
    if(passedTest) {
        console.log(firstName); // this comes out undefined; 
        var firstName = 'John';
        var yearOfBirth = 1999;
    }
    console.log(firstName + ' allowed to drive' + yearOfBirth);
};

// but with es6 this will not work
function driversLicense6(passedTest) {
    if(passedTest) {
        // u can see here the 2 variables are miscolored cause they are not again seen to be used cause use is outside the block {} brackets. 
        let firstName = 'John';
        const yearOfBirth = 1999;
    }
    console.log(firstName + ' allowed to drive' + yearOfBirth); // this will result in a reference error : firstname is not defined or year of birth.

};
// if you want to be able to use it outside of the block have to declare it outside the block if it's a let,  if it's a const 
// you have to assign it outside like so. 
function driversLicense(passedTest) {
    console.log(firstName); // gives reference error first name is not defined; cause temporal dead zone, can only use variable after declared and defined it.
    let firstName;
    const yearOfBirth = 1979;
    if (passedTest) {
        firstName = 'Henry good job';
    }
    console.log(firstName + ' oh you can drive now!' + ' cause you were born in ' + yearOfBirth); 
}

let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2,3,4   unaffected by the i set outside of the for block
};
console.log(i); // 23 // this is the i on the window.

// but es5
var i = 20;
for (var i = 0; i < 5; i++) {
    console.log(i); // prints out 0, 1, 2, 3, 4
}
console.log(i); // 5      since i is not block scoped it over writes the i variable from the window. 
// also looks like the i++ ran one more time after 4 to make it 5 and then it was pushed out of the for loop
