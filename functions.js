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