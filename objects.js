// objects used to group key value pairs,    objects have properties. 

// create with object literal 
let john = {
    firstName: 'John',
    lastName: 'Smith',
    birthyear: 1985,
    family: ['jane', 'mark', 'bob'],
    job: 'teacher',
    isMarried: false
};
// use dot notation 
console.log(john.firstName) // John
// use key name
console.log(john['firstName']); // John
// use a variable to grab it. 
let x = 'birthyear';
console.log(john[x]); // 1985 
// Mutate object
john.job = 'artist';  // john.job now equals artist. 
john['isMarried'] = true; // isMarried: true  is now the object key and property

let jane = new Object();
jane.name = "Jane";
jane.birthyear = 1980;
jane['lastName'] = 'Smith';

// ************ METHODS ************
let johnn = {
    firstName: 'John',
    lastName: 'Smith',
    birthyear: 1985,
    family: ['jane', 'mark', 'bob'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthyear) {
        return 2019 - birthyear; 
    },
    bmi: function(height, weight) {
        return weight / (height * height); 
    },
    // or create the weight and height in the object and use this to use
    weight: 210,
    height: 65,
    // calcBMI: function() {
    //     this.bmi = this.weight / (this.height * this.height); 
    // }
    declare: function() {
        console.log(`hi i am ${this.firstName} and my bmi is ${this.bmi} and i'm ${this.calcAge()}`)
    }
};
console.log(johnn.calcAge(1990)); 
// only objects have methods like this,   arrays have functions to change arryas
// every  object in javascript comes with a 'this' keyword.  so don't have to pass in birth year,  can do object like
john.calcAge = function() {
    return 2019 - this.birthyear; 
    // above, the this is referring to the john object. 
};
john.age = calcAge(1991); 
// could do 
// in the object this.age = 2019 - this.birthyear; 
