let firstName = 'henry';
let lastName = 'haack';
const yearOfBirth = 1979;
function calculateAge(year) {
    return 2020 - year;

}
// putting string  together in es5
console.log('hello ' + firstName + 'yearOfBirth is ' yearOfBirth); 
// with es6 has template literals use back ticks
console.log(`Hello ${firstName} you are ${calculateAge(year)}`) // you can put it all on th same line
// without adding them together 
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('h')); // distinguishes between cap and lower case
console.log(n.endsWith('ck')); // true
console.log(n.includes('enry')); // true
console.log(firstName.repeat(3)); // henryhenryhenry
console.log(`${firstName} `.repeat(2)); // henry henry

