/* Primitives
Strings, booleans, null, numbers, undefined, and in ECMA2015  symbol
Primitives, when assigned to a variable, the variable holds that value inside of itself. 
(pass by reference vs pass by value )
Objects and arrays hold a reference to the place in memory. 
*/

// Primitives pbv
let a = 23;
let b = a;
a = 40;

console.log(a); // 40
console.log(b); // 23


// dynamic objects
let obj1 = {
    name: 'henry',
    age: 40
};
let obj2 = obj1;
obj1.age = 41;
console.log(obj1); // 41
console.log(obj2); // 41

// functions 
let age = 100;
let obj3 = {
    name: 'woohoo',
    city: 'anchorage'
}
function changes(a, b) {
    a = 50;
    b.name = 'phillip'; // this poitns to the above obj still = creates weird bugs 
}
changes(age, obj3);
console.log(age); // 100
console.log(obj3); // phillip
