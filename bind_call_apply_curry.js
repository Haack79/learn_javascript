
let henry = {
    name: 'Henry',
    age: 40,
    job: 'beAPuppy',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlement. I\'m ' +
            this.name + 'I am a ' + this.job + 'and am ' + this.age + 'years old');
        } else if (style === 'friendly') { 
            console.log('Hey! what\'s up! how are you this' + timeOfDay);
        }
    }
}

let emily = {
    name: 'emily',
    age: 37,
    job: 'ux'
};

// now if i want to use the presentation method from henry on emily, how do i do that?  
// I use the call method
// the call method reassigns the 'this' value to what you pass into call
henry.presentation.call(emily, 'friendly', 'afternoon');
// the above will give access to emily to be able to use the presentation function from henry
// similar is apply but accepts arguments as an array.
henry.presentation.apply(emily, ['friendly', afternoon]);  // but this means you have to change
// presentation to accept and put out an array. 


// BIND ********************
// it is like call ,  allowing you to set the 'this' explicitly to another object.
// but it doesnt' immediatly call the function, but instead generates a copy of the function
// so that we can store it somewhere.
// lets us create a function with preset variables.
let friendlyHenry = henry.presentation.bind(henry, 'friendly'); 
// now friendlyHenry has the presentation function stored within it with that first argument of friendly passed in
// this means we can call friendlyHenry with the second argument;
friendlyHenry('morning'); 
friendlyHenry('night'); 
// CURRYING *************
// This is called Currying where you preset some arguments, it is a technique in which we
// create a function based on another function but with some preset parameters

let formalEmily = henry.presentation.bind(emily, 'formal');
formalEmily('afternoon'); 

let years = [1980, 1979, 1982, 1950];

function arrCalc(arr, fn) {
    let arrRes = [];
    for (let i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes; 
}

function calculateAge(el) {
    return 2020 - el;
}
function isFullAge(limit, el) {
    return el >= limit; 
}

let ages = arrCalc(years, calculateAge);
// problem with fullAge function is that it accepts 2 arguments
// but arrCalc function here can only use it with one argument
// the fn in arrCalc is only allowed one element of the array. arr[i] 
// solution is to pass in isFullAge with limit already set, so we should use
// BIND - cause allows us to pass a copy of the function with one argument already set
// so below set it for Japan
let fullJapan = arrCalc(ages, isFullAge.bind(this, 20)); // we are presetting the limit for isFullAge

