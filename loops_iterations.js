// a way to do repetetive things and go through data    

// count from 0 - 9
for (let i = 0; i < 10; i++) {
    console.log(i); 
};
let btown = ['brian', 'food', 40, 2020, 'bro']
for (let i = 0; i < btown.length; i++) {
    console.log(btown[i]); 
};

// while loop 
let i = 0;
while ( i < btown.length) {
    console.log(btown[i]);
    i++; 
}

// continue or break
let btown = ['brian', 'food', 40, 2020, 'bro']

for (let i = 0; i < btown.length; i++) {
    console.log(i) 
    if (typeof btown[i] !== 'string') continue; console.log('hello');// this will continue with the next part.  and skip console.log
    console.log('im da nezt line'); 
    console.log(i); 
    console.log(btown[i]); 
};  