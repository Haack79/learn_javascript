//ES5
var Person5 = function(firstName, lastName, yearOfBirth) {
    this.firstName  = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
}
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age); 
}
var henry5 = new Person5('henry','haack', 1990);

// ES6 Class is synthetic sugar, easier to write and read
// it does the same thing as in ES5 but just easier to do
// tis is class declaration not function 
// one criticism is that they hide the object oriented nature of inheritance in javascxript

class Person6 {
    // declare initial properties for class with constructor
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    // instead of doing prototype just add funtions and etc here. 
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    // static won't be inherited by instances
    static greeting() {
        console.log('hello'); 
    }
}
const henry6 = new Person6('henry', 1979, 'puppy');
Perons6.greeting(); // hello
// Class definitions are not hoisted *******************************
// so need to implement a class and only later start using it. 
// can only add method to classes and not properties-but inheriting properties through object instances is not good practice
// 
// can add STATIC METHODS - METHODS ATTACHED TO THE CLASS BUT! NOT INHERITED BY THE CLASS 
// INSTANCES
// ************************  inheritance between classes and subclasses ***************
/*
Person -> Athlete is subclass of person, so inherits from Person;
*/
var Person5 = function(firstName, lastName, yearOfBirth) {
    this.firstName  = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
}
Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age); 
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

/*
 why call this as a keyword in call function
 first need to remember how operator works which is used to create a new instance
 when creating a new athlete object above, the keyword 'new' creates a new empty object
 calls the athlete function constructor and sets the this keyword to the new created empty objects
 ---
all the properties  will be set in the new athlete object that's crated by the new operator, 
that's why we call it above with Person5.call(this,properties);  now these and the inherited properties from above are set to this new object
*/
// now going to use Object.create cause it allows us to manually set the prototype of an object. 
// and want  the  prototype of the athlete to be the prototype of the person, so that they become connected
Athlete5.prototype = Object.create(Person5.prototype); 
// this order is important, can only attach methods to subclass prototype after Object.create.
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals); 
}
var johnAthlete5 = new Athlete5('john', 1980, 'swimmer', 4, 10); 
// no has access to Person5 methods and properties
johnAthlete5.calculateAge(); //36  
// works cause instances of Person5 and Athlete5 can get 
// can set methods on Athlete5 sublcass
johnAthlete5.wonMedal

// ******************** CLASS ES6 ******************************
class Person6 {
    // declare initial properties for class with constructor
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    // instead of doing prototype just add funtions and etc here. 
    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    // static won't be inherited by instances
    static greeting() {
        console.log('hello'); 
    }
}
// MAKE SUBCLASS
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    } 
    wondMedal() {
        this.medals++;
        console.log(this.medals); 
    }
}
const johnAthlete6 = new Athlete6('john', 1980, 'swimmer', 3, 10);
