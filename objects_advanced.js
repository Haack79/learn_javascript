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
let score = 0; 
let Question = function(question, answersArr, answer) {
    this.question = question,
    this.answersArr = answersArr, 
    this.answer = answer,
    console.log(question); 
    for (let i = 0; i < answersArr.length; i++) {
        console.log(i + ':' + answersArr[i]); 
    }
    let userAnswer = prompt('what is your answer?')
    if (userAnswer.toLowerCase() === 'exit') return; 
    if (userAnswer === answer) {
        console.log('correct!');
        score += 1; 
        console.log('your score is now ' + score);
    } else {
        let newAnswer = prompt('sorry try again'); 
        if (newAnswer === answer) {
            console.log('great job!'); 
        } else {
            console.log('sorry you have failed');  
            window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript", '_self'); 
            // setTimeout(() => {window.close()}, 1000);
        }
    }
};
let funLevel = new Question('how fun is javascript?', ['Super Fun', 'some fun', 'meh'], '0'); 
let whoIsTheCoolest = new Question('who is the coolest?', ['brian', 'Brian', 'Haack'], '1');
let howManyTeeth = new Question('how many teeth you got?', ['3', '2', '5'], '2');
let questionsArr = [funLevel, whoIsTheCoolest, howManyTeeth];
// make this private; 

(function chooseQuestion() {
    let arrIndx = Math.floor(Math.random() * Math.floor(3));
    return questionsArr[arrIndx];
})();

// **************************** 
// do it with prototype - put it in a function so itwon't interfere with other code. 
// this will protect this from being interact with. 
(function() {
    function Questionator(questions, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    // write into questions prototype to add to it, this will give access to the other instances to this protoype chain
    Questionator.prototype.displayQuestion() = function() {
        console.log(this.question); 
        for (let i = 0; i < answers.length; i++) {
            console.log(i + ': ' + this.answers[i]); 
        }
    }
    Questionator.prototype.checkAnswer() = function(userAnswer, scoreCallback) {
        let sc; 
        if (userAnswer === this.correct) {
            console.log('Correct!!');
            sc = scoreCallback(true);
        } else {
            console.log('sorry, wrong answer, try again'); 
            sc = scoreCallback(false); 
        }
        this.displayScore(sc);
    }
    Questionator.prototype.displayScore() = function(score) {
        console.log('your current score ' + score);
        console.log('--------*************-----------');
    }
    
    // remember this new operator creates a new empty object and sets the "this" variable of this function
    // to the new empty object that was just created. 
    let q1 = new Questionator('Is Javascript the coolest language?', ['yes', 'no'], 0);
    let q2 = new Questionator('What is the name of this course\'s teacher?', ['phil', 'adam', 'brian'], 2); 
    let q3 = new Questionator('what best describes coding?', ['hard', 'fun', 'challenging', 'all the above'], 2);
    let  questions = [q1, q2, q3];
    // create score function to keep score
    function score() {
        // set score to start at 0
        let sc = 0; 
        // return the value of the function
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc; 
        }
    }
    // with scope and closures,  assign the score function to a variable, even when it's done running will still
    // have access to the variable in the score() function. 
    let keepScore = score();
    // since javascxript has first class functions ( meaning they can be treated like variables), 
    // can pass them around into other functions etc. 
    function nextQuestion() {
        let num = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        let answer = parseInt(prompt('Please select the answer.'));
        if (answer !== 'exit') {
            questions[num].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    };
    nextQuestion();

})();



