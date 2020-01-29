// block scope is alot like data privacy  like an IIFE

{
    // below a and b only accessible in the block
    let a = 1;
    const b = 3; 
    var c = 5;
}
console.log(c); // 5  var's not block scoped. 
console.log(a, b);  // a and b not defined

// es5 iife ,  this is the way to get data  privacy with es5
(function() {
    var c = 2; 
})(); 
console.log(c); // undefined


