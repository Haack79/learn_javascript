// structure the code in modules - keeps code unique and clean, easier to read and re-use. 
// allows encapsulate and keep some data private. 
// allows to break up code into logical parts. 
// think through the functionalities that you need   
// event handler to respond to user input or action (event) on the DOM
// get input values , add them to the data structure, add new item to the ui, calc budget, update the UI
// UI Module   and DATA Module 
/* UI Module - get input values, add new item to ui, update the ui
DATA Modules -  add new item to data structure, calc budget
Controller Module - add event handler;  controls the app, links between the other 2 modules.

how to use the pattern of modules,  public vs private data encapsulation
separation of concerns 

Use modules to keep pieces of code together, 

DATA Encapsulation - can hide implementation details  of a specific module  from the outside scope
so that we only expose a public interface which is sometimes called with an API 

powerful to use, must understand Closures and IIFE's
set up Immediately Invoked Function Expression - It is simply an anonymous function wrapped in parenthesis

*/


//set up Immediately Invoked Function Expression - It is simply an anonymous function wrapped in parenthesis
// set up the IIFE - immediately invoked function,  a function wrapped in parens
// it allows privacy because it creates a new scope not visible to outside scope -data privacy

// if you want to give access to other functions to what's inside,  it returns an obect containing all the functions
//  if youhave any variables you want to be accessed from outside it, must return it in a function 
let budgetController = (function() {

})(); 
budgetController.a // undefined
budgetController.add(); // add not a function
budgetController.publicTest(2); // 42

// Reminder on CLOSURES - inner function always has access to the outer function variables even if the outer function has returned 

// IIFE to control UI - getting data from the html DOM  
let UIController = (function() {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    // public function to get data and return object and assign it to UIController variable.
    return {
        getInput: function() {
            // best way to return 3 or multiple values,  put them in object with properties and values
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp. 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDomStrings: function() {
            return DOMstrings; 
        }
    };
})();

// separation of concerns, each part of app do their own thing independently,  they have no awareness of the other parts.

// IIFE app controller - where we tell other modules what to do. 
let controller = (function(budgetCtrl, UICtrl) {
    let DOMs = UICtrl.getDomStrings();
    let ctrlAddItem = function() {
        // when clicked, get field input data
        let input = UICtrl.getInput();
        // add item to the budget controller

        // add the item to the UI 

        // calculate the budget

        // display budget on the UI
    }
    // don't need to call ctrlAddItem here cause it's call back so addEventListener will call it when event is activated.
    document.querySelector(DOMs.inputBtn).addEventListener('click', ctrlAddItem); 
// for when return is hit, any key press on the document ,  this can receive an argument an event
// you can name it anything but naming it event here.  it will be an object with what happened on DOM or keyboard
// key code is the key that was pressed. for return, it is 13. 
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();  
        } 
    });

})(budgetController, UIController);