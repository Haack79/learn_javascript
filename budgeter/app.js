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
    // make private function so people don't have access to mess with the total
    let calculateTotal = function(type) {
        let sum = 0;
        data.allItems[type].forEach(function(currentElement) {
            // sum = sum + currentElement.value; 
            sum += currentElement.value;
        });
        data.totals[type] = sum; 
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
        },
        budget: 0,
        percentage: -1 // -1 is usualy what means doesn't exist. 
    };
    return {
        addItem: function(type, des, val) { 
            let newItem, ID; 
            // get the last id, and then add 1 to it. 
            // below get the array which is either exp or inc, the position of the last element in the array,  
            // then get that last id and add 1 to it. 
            // [exp][length of array].id + 1
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0; 
            }
            
            // figure out if expense or Income and craete new item based on if inc or exp
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val); 
            }
            // add it to the database
            data.allItems[type].push(newItem); 
            // return it to be used
            return newItem; 
        },
        calculateBudget: function() {
            // calc total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            // calc the budget income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            // calc the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1; 
            }
             
        },
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
    }
})();

let UIController = (function() {
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container'

    }
    // public function to get data and return object and assign it to UIController variable.
    return {
        getInput: function() {
            // best way to return 3 or multiple values,  put them in object with properties and values
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp. 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        addListItem: function(obj, type) {
            let html, newHtml;
            // create html string with placeholder text
        if (type === 'inc') {
            element = DOMstrings.incomeContainer;
            html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">$description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div></div>';
        } else if (type === 'exp') {
            element = DOMstrings.expensesContainer;
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }

            // replace placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id); 
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value); 
            // insert html into the DOM.  (this is where grab a html element on the index and insert into it)
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); 
        },
        clearFields: function() {
            let fields; 
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue); // querySelectorAll returns a list.  like an array but without the array methods. 
            // turn into array, have to use Array method and slice it,  call it and put in the above , tricks it into being an array. 
            let fieldsArr = Array.prototype.slice.call(fields); 
            fieldsArr.forEach(function(current, index, array) {
                current.value = ''; // this sets description and input to empty; 
            });
            fieldsArr[0].focus();
        },
        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = 'no % yet';
            }
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
        document.querySelector(DOMs.container).addEventListener('click', ctrlDeleteItem);
    };
    // function to add item // remember each function must do a specific task. 
    let updateBudget = function() {
        // calculate the budget
        budgetCtrl.calculateBudget();
        // return the budget
        let budget = budgetCtrl.getBudget();
        // display budget on the UI
        UICtrl.displayBudget(budget); 
    };
    let ctrlAddItem = function() {
        // when clicked, get field input data
        let input = UICtrl.getInput(); // this comes from the object returned by getInput() function 
        //check if input
        if (input.description !== "" && isNaN(input.value) && input.value > 0) {
            // add item to the budget controller 
            // this  newItem has the object we are  going to add listItems to above. 
            let newItem = budgetCtrl.addItem(input.type, input.description, input.value);  // pass in the inputs from the UICtrl above that's getting it from the getInput function
            // add the item to the UI 
            UICtrl.addListItem(newItem, input.type);
            // clear the fields 
            UICtrl.clearFields(); 
            // calculate and update budget
            updateBudget();
        } 
    };
    let ctrlDeleteItem = function(event) {
        // console.log(event.target.parentNode.parentNode.parentNode.parentNode.id); // this will get the id at 4 parents up
        let itemId = event.target.parentNode.parentNode.parentNode.parentNode.id; 
        if (itemId) {
            // inc-1  // when using method, js auto wraps it, and converts it to object to perform the method  
            let splitId = itemId.split('-');
            type = splitId[0];
            ID = splitId[1];
            // 1. delete the item from the data structure

            // 2. delete the time from the UI

            // 3. update and show the new budget
        }
    }
    // create public initialization function 
    return {
        init:  function() {
            console.log('app has started');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }
    controller.init(); 
})(budgetController, UIController);

// have to set up function constructors and data structure that the app needs. 
// how to avoid data conflicts in structure
// how and why to pass data from one structure to another.

// add big chunks of html, replace parts of strings
// dom manipulation   using insertAdjacentHTML method...

// clear html fields, use queryseletor all, convert list to an array, loop arrays. 

// how to convert field inputs to numbers parseFloat (change number to have decimals), how to prevent false inputs 

