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
*/
// set up the IIFE - immediately invoked function,  a function wrapped in parens
// it allows privacy because it creates a new scope not visible to outside scope -data privacy

// Reminder on CLOSURES - inner function always has access to the outer function variables even if the outer function has returned 

// IIFE to control UI - getting data from the html DOM  
let budgetController = (function() {
    // going to make a lot of objects so make a constructor to model off of it. 
    // since there will be a lot of expenses, make a constructor so you can easily duplicate it. 
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // instead of putting data into a bunch of different variables, best to aggregate it into one big structure of data.
    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    return {
        addItem: function(type, des, val) { 
            let newItem; 
            // get the last id, and then add 1 to it. 
            // below get the array which is either exp or inc, the position of the last element in the array,  
            // then get that last id and add 1 to it. 
            // [exp][length of array].id + 1
            let ID = data.allItems[type][data.allItems[type].length -1].id + 1; 
            // figure out if expense or Income
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val); 
            }
            // add it to the database
            data.allItems[type].push(newItem); 
            // return it to be used
            return newItem; 
        }
    }
})();

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
    // create initialization functions to get event listeners so don't have random strings everywhere 
    let setupEventListeners = function() {
        let DOMs = UICtrl.getDomStrings();
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
    };
    // function to add item
    let ctrlAddItem = function() {
        // when clicked, get field input data
        let input = UICtrl.getInput();
        // add item to the budget controller

        // add the item to the UI 

        // calculate the budget

        // display budget on the UI
    }
    // create public initialization function 
    return {
        init:  function() {
            console.log('app has started');
            setupEventListeners();
        }
    }
    controller.init(); 
})(budgetController, UIController);

// have to set up function constructors and data structure that the app needs. 
// how to avoid data conflicts in structure
// how and why to pass data from one structure to another.