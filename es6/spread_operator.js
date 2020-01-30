// expand element of an array. 

// ES5
function addFourAges (a, b, c, d) {
    return a + b + c + d; 
}

var sum1 = addFourAges(18,38,12,21); // 81
// if values were in an array

// es5
var ages5 = [18,20,12,21];
// remember bind, call and apply methods for arrays, 
// here use apply method receives an array and then calls the function that the apply method
// is connected to by using the elments in the array as arguments for the function
var sum2 = addFourAges.apply(null, ages5); // calls addFourAges and uses the elements in the array as arguments
// also the null is the 'this' that you have to define but since we don't need it here just make it null
const sum3 = addFourAges(...ages); // 81
// what spread does is just spread out the array elements as arguments. 
// looks like addFourAges(18, 38, 12, 21); // 81
const familyJ = ['John', 'Jane', 'Jetson'];
const familyM = ['Mark', 'Manny', 'Mitson'];
// join them using spread
const joinedFamily = [...familyJ, familyM]; 
console.log(joinedFamily); // ['John', 'Jane', 'Jeston', 'Mark', 'Manny', 'Mitson'];
// can still add within this, just add it betwe , 

// Spread can be used on other elements such as node list
const n = document.querySelector('h1');
const boxes = document.querySelector('.box');
const allItems = [h, ...boxes]; // expand node list 
Array.from(allItems).forEach(cur => cur.style.color = 'purple');
