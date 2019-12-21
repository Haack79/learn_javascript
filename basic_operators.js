let year, yearJohn, yearMark;
year = 2020;
yearJohn = year - 28;
yearMark = year - 33; 

// *   and /  take priority over addition
// <   , >   comparisons return boolean
// logical operator
let isJohnOlder = yearJohn > yearMark;
console.log(isJohnOlder); // true
console.log(typeof yearJohn); // number
let x;
console.log(x); // undefined 
// ***************  operator precedence 
let isFullAge = year - yearJohn >= isFullAge; // returns true 
// msdn precedence 
// ( ) parens have one  of highest precednece 
// jMultiple assignments 
let x , y; 
x = y = (3 + 5) * 2 / (2+1)
// addition goes from left to right // same with multiplication
// assignment works from right to the left, so above, y gets assigned first and then x.
// x = x + 2 is same as x += 2
// PRACTICE 
// store the bmi and compare two peoples bmi and compare them and print if true if johns bmi is more
let johnsWeight = 200;
let johnsHeight = 6;
let marksWeight = 150;
let marksHeight = 7;

function mass(weight, height) {
    let mass = (weight/ (height * height));
    console.log(mass); 
    return mass
};

let johnsMass = mass(johnsWeight, johnsHeight); 
let marksMass = mass(marksWeight, marksHeight);

let isJohnsMassMore = (johnsMass > marksMass); 
console.log('is Johns Mass More?', isJohnsMassMore); 
///jk ***88*********88********888
// if / else 
// Boolean
// &&  all must be true to be true  ||  or  one or the other must be true to be true   ! opposite

// TERNARY OPERATOR AND  SWITCH
// ternary cause 3 parts
let age = 20
age >= 21 ? console.log('can drink') : console.log('cannot drink'); 
let drink = age > 20 ? 'beer' : 'juice'; 
console.log(drink) // juice

// SWITCH 
let profession = 'teacher';
switch(profession) {
    case 'teacher':
        console.log('this' + profession + 'teaches kids');
        break;
    case 'driver':
        console.log('this' + profession + 'drives'); 
        break; 
    default:
        console.log(profession + "is not one we know of");
}

switch(true) {

}

// truthy and falsy values 
// falsy = 0, '', NaN, undefined, null
// truthy,  all values that are not falsy

let height = 0
if ( height || height === 0)  // existence check
// == does type coercion
