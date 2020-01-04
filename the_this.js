// this is this in this  - LAST STEP OF CREATION PHASE
// creation phase, and execution phase
// object variable creation as scope chain creation 

// this is variable that every execution context gets. 
// it is stored in the execution context object. 
// in a regular function call it (this) points at the global object -the window object in the browser
// In Method Call it points to the object that is calling it. 
// this not assigned a value until fuction where it is defined is actually called 
// so this only gets assigned in execution context once the function is invoked/called
console.log(this);  // this gets back the object it's in if you do this in console it will be window.
calculateAge(age);
function calculateAge(year) {
    console.log(2019 - year); 
    console.log(this); // this refers to window object since not  a method but a regular function code
}

// the object this function is attached to is the window object. so attached to window
let dood = { 
    name: 'jon',
    yearOfBirth: 1985,
    calcAge: function() {
        console.log(this); // this will refer to jon object , the object that called the method
        console.log(2019 - this.yearOfBirth); 
    function innerFunction() {
        console.log(this); // this is back to being the window.   cause not a method on dood object
        // because when a regular function call happens, then the default object is the window object
        // even though its created and called in the dood object. 
    }
    innerFunction(); 
}
}
dood.calcAge(); 

let yo = {
    name: 'yello',
    yearOfBirth: 1980
};

// METHOD BORROWING
yo.calcAge = dood.calcAge; // this will set the calc age of dood.
yo.calcAge(); // age of yo.  cause all the calcAge of dood is now called on the yo object
// this also shows that the this value is only assigned when object calls the method 

