// Arrays are a list of elements
// zero based,  means first item is 0 indexed

// Initialize New Array
let names = ['brian', 'dood', 'susie'];
// or 
let years = new Array(1990, 1985, 2001); 

// access Array data
console.log(names[0]) // brian
console.log(names.length) // 3
// array[index] // this is different than the length.  1 behind since its zero indexed. 
// MUTATE ARRAY
names[1] = 'james'; // dood is now james
names[names.length] = 'mia'; // ['brian', 'james', 'susie', 'mia']; 
// Methods 
names.push('adam'); // this puts adam at the end of the array 0(1); 
names.unshift('cody'); // adds to beginning of the array 0(n); because has to re-index each element
names.pop();  // removes last element 0(1);
names.shift(); // removes first element in array 0(n); 
names.indexOf('susie');  // returns index where susie is in the array.  possibly 0(n) 
// If Element is not in the Array then it will return -1 

// make a tipc calculator 
function tipper(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1; 
    }
    return percentage * bill;  
}

let bills = [15, 51, 201];
let tips = [tipper(bills[0]), tipper(bills[1]), tipper(bills[2])]
let finalValue = bills[0] + tips[0]; 
