// lecture array
const boxes = document.querySelectorAll('.box'); // this returns node list
// transform into array es5 way
var boxesArr5 = Array.prototype.slice.call(boxes); // this is sort of a hack
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});

// es6 way 
const boxesArr6 = Array.from(boxes); 
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue'); 

// issue with forEach or Map is that you cannot break from them and you cannot use continue statement
// this means having to write more code just for a simple for(loop); 

for (var i = 0; i < boxesArr6.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue'; 
}

// ES6 way have a "for of" loop, can use continue, break in this 
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// es5 
var ages = [12, 15, 13, 11, 17, 21, 555];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6  instead you can use findIndex method and pass callback and it returns true
ages.findIndex(cur => cur >= 18);  // this returns the index of where the expression returns true
console.log(ages.find(cur => cur >= 18)); // this will find and return the value at the index

