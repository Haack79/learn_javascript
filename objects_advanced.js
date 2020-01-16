// Everything is an object. - unless it's a primitive
/* Primitives 
Numbers, Strings, Booleans, Undefined, null
Everything else is an object, 
Arrays, functions, objects, dates, wrappers for numbers, strings, booleans
This is it's uniqueness. 

OOP  - Object oriented programming
how objects interact with one another,  methods properties, inheritance
used to store data, structure apps into modules and keep code clean. 

in js can make a blue print for other objects to inherit from , it is called a Constructor 
or prototype,  other languages have similar item called Classes
 
INHERITANCE -when one object gets access to another object properties and methods.

js is prototype based language - means inheritance works by using something called prototype
so every js object has a prototype property.
this makes inheritance possible in javascript
PersonObject -> prototype -> calcAge
John inherits prototype of personObj and gets calcAge
so Prototype of an object is where we put methods and properties that we want other objects to inherit
so prototype of peron is not just prototype of person but all intances created from it.
this gets deeper cause personObj is intance of bigger constructor the Object object
Object -> Prototype-ha ownproperty()-isPrototypeof()-constructor()-toString()...valueOf();
every object is an intance of the object constructor-this object of objects has ton of methods
our initial object has these and all intances of it.
when trying to access method in instance, checks, if not, then check constructor
then the object of objects
keeps going up the chain until null the final end to prototype chain

* every js object has a prototype property which makes inheritance possible 
*the prototype property of an object is where we put methods and properties that we want other objects to inherit
(this means you can add prototype to the constructor and the instances will have access to it. )
*constructors prototype property is not the prototype of the constructor itself, its the prototype of ALL instances that are created throughit
*when certain method (or property) is called, search starts in object itself, if not found, search moves on to objects prototype, continues until method found in prototype
chain.

*/
    // Creating object func structures

let henry = {
    name: 'henry',
    yearOfBirth: 1985,
    job: 'professor'
};

// function constructor. 
let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calcAge = function() {
        console.log(2020 - this.yearOfBirth); 
    }
};
// es2015 Class *****************************
// class Person {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//         this.calcAge = function () {
//             console.log(2020 - this.yearOfBirth);
//         };
//     }
//     // can add to it with prototype
//     sayName() {
//         console.log('HI, I AM', this.name);
//     }
// }
////// ***************************** ///////// 
// can add to it with prototype
Person.prototype.sayName = function() {
    console.log('HI, I AM' , this.name); 
} // now all the instances have access to this 
let henry = new Person('Henry', 1980, 'puppy'); // creating new object with constructor function 
// new  - key word that creates a brand new empty object
// first object is created and then the function is called. 
// good to remember that calling a function creates a new execution context that has a this variable -
// the this points to the variables in the new empty object created by operator 
// this means above all of it is assigned to henry
henry.calcAge(); 
// john.__proto__ === Person.prototype // true
console.log(henry.hasOwnProperty('job')); 
// john instanceof Person // true
// arrays are objects
let x = [2,4,5];
console.log(x); // it will have properties like an object would. // can also see all the methods on it as well in console.

// use Object.create method, this uses this method instead of a constructor patter and still gets inheritance
let personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
}

let henry = Object.create(personProto);
henry.name = 'Henry';
henry.job = 'be cute';
henry.yearOfBirth = 1985;

let susie = Object.create(personProto, 
    {
        name: {value: 'Susie'},
        yearOfBirth: {value: 1982 },
        job: { value: 'teacher'}
    });

/* 
Object.create builds an object that inherits directly from the one that we passed into the first argument 
Object.create allows implementing complex inheritance structures in an easier way.  than function constructors, 
It is easier because it allows you to directly specify which object should be a prototype. as in above,  henry is the prototype. 
the function constructor - the new created Object inherits from the constructors prototype property. 
function constructor is still most popular. 
*/
// Challenge ******
let Question = function() {
    console.log('what is the best language we are learning?')
    console.log('0: javascript');
    console.log('1 : some other language');
    let answer = prompt('what is your answer?')
    if (answer === '0') {
        console.log('correct!');
    } else {
        let newAnswer = prompt('sorry try again'); 
        if (newAnswer === '0') {
            console.log('great job!'); 
        } else {
            console.log('sorry you have failed');  
            window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", '_self'); 
            setTimeout(() => {window.close()}, 1000);
        }
    }
};


