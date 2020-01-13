// functions are just a way to not repeat yourself keep it DRY
function getAge(birthYear) {
    return  2019 - birthYear;
}

function getYearsTillRetirement(year,  firstName) 
{
    var age = getAge(year); 
    let yearsToRetirement = 65 - age; 
    let yearOfRetirement = 2019 + yearsToRetirement; 
    if (yearsToRetirement > 0) {
        console.log(firstName + ' you have got ' + yearsToRetirement + 'the year will be ' + yearOfRetirement);
    } else {
        console.log('enjoy your retirement'); 
    }
     
}
getYearsTillRetirement(1979, 'Brian'); 
// ****** function declaration
function whatYouDo(job, name) {

}
// statements perform actions // they do things without immediate results like if/else statements or even function 
// declaration. 
// statements often produce undefined.  

// so function expressions produce immedate result (Value) vs function declarations that do not. 

// ******* function expression // 
// Expressions always produce a Value /  always results in a single value 

let job = function(job, name) {
    // do stuff
    switch(job){
        case 'teacher':
            return name + job; 
        case 'driver':
            return name + job;
        default:
            return name + 'dont work';
    }
};

let jayjay = {
    fullName: 'jayjay abrams',
    bills: [124, 230, 222, 310],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        // order of operation this. is object,  resolves to .bills. to the length from left to right
        for (let i = 0; i < this.bills.length; i++) {
            let percentage; 
            let bill = this.bills[i]
            if (bill < 50) {
                percentage = .2;
            } else if ( bill > 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1; 
            }
            this.tips[i] = bill * percentage; 
            this.finalValue[i] = bill + bill * percentage; 
        }
    }
}

// execution context,  the function has it's own when called onto the stack
var name = 'john'; // in the window object
function first() { 
    var a = 'hello!';
    second();
    var x = a + name;
}
function second() {
    var b = 'Hi';
    third();
    var z = b + name;
}
function third() {
    var c = 'Hey';
    var z = c + name;
}
first();   // this is now called  // call stack is first in last out
// global execution context < execution context first() < execution context second() < execution context third()
// gets broken into variable object (VO) 
// scope chains 
// this variable 
// when function is called
// create phase - creation of variable object (vo), scope chain, determine this variable
// 2. execution phase - code of the that generated exectuion context ran line by line
/*
argument object is created containing all arguemtns passed into f¨nction
code is scanned for function declarations , for each function a property is created in 
variable object pointing to the function - all functions in Variable Object before codes run
code is scanned for variable declarations
This means functions and variables are HOISTED - lifted up and available b4 execution phase

functions defined right away, 
variables are undefined until execution phase. 
EXECUTION PHASE JUST AFTER CREATION PHASE.

 FIRST CLASS FUNCTIONS s functions -   remember Functions are also objects. 
 function is an instance of of the object type 
 A FUNCTION BEHAVES LIKE any other object
 we can store functions in variables 
 we can pass a function as an argument to another function 
 we can return a function from a function 
 */
let years = [1999, 2001, 2000, 2002, 2020];
function calcArray(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function calcAge(element) {
    return 2020 - element;
};
function isFullAge(element) {
    return element >= 21; 
}
function maxHeartRate(element) {
    if ( element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1; 
    }
     
}
let ages = calcArray(years, calcAge); // dont want to run the function on the spot but later when it's called as call back function by the calcArray function
let fullAges = calcArray(ages, isFullAge); 
console.log(fullAges);  // true false false false false

// Functions that return functions 

function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + 'please explain what ux design is');
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log('what do you teach', + name); 
        }
    } else {
       return function(name) {
           console.log('hello', + name + ' what do you do?');
        }
    }
};
// can return a function because javascript functions are always first class functions in javascript 
// since they are effectively objects. 
// when you return a function,  really you are returning an object that has function capabilities. 
let teacherQuestion = interviewQuestion('teacher'); 
let designerQuestion = interviewQuestion('designer'); 
interviewQuestion('henry');
designerQuestion('susan');

interviewQuestion('teacher')('cody');  // since evaluated left to right,  interviewQuestion is evaluated first,  it comes back with 
// the answer, and then evaulate the anonymous function inside it with the second parameter called cody 
// interviewQuetion(teacher) -> anonymous function(cody);

// Immediately invoked function Expressions (IIFE);
// Normal way to do it. 
function game() {
    let scores = Math.random() * 10;
    console.log(scores >= 5);
};
// if want a private variable to hide it,  use iife
// below is iife, it's tricking the parser into thinking this is an expression and not a function 
// since what is in parenthesis cannot be a statement and that it should be an expression. not a declaration
// This is a way to create data privacy,  you can't access score from outside the function 
// you can extend function by passing parameters into it. 
// you can only use it once cause never assigned to anything. so not reusable code, just for data privacy. to make variables no one can access or see.

(function () {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();
// adding parameter to make it more dynamic.
(function (goodLuck) {
    let score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); // will return true  
console.log(score) // will not work, undefined. 
// 