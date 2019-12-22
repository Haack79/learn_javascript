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

*/