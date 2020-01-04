//scoping and scope chain 
// Scoping is about where can we access a certain variable
// in many other languages scopes are crated by if , for , while blocks, not in js
// Each function creates it's own scope
// in the scope is where it's accessible 
// Lexical scoping - where it's written in the code. 
// means when a function is within another function it gets access to the scope of the outer function that it
// is written in. 
// so inner function gets access to the outer function scope 
var a = 'hello';  // global scope VO global // does not have access to first and second scope unless
// they return their values 
first(); 
function first() { // first scope has access to global scope 
    var b = 'hi';
    second();
    function second() { // second scope,  has access to first and global 
        var c = 'hey';
        console.log(a + b + c); 
        third();  // this can get called because of scope chain,  - declaration call.
    }
}
function third() {
    let d = 'brian';
    console.log(c); // does not have access to c 
}
// scope chain, all the variable objects that a execution context has accesss too. 
// because VO Variable object is what stores all the defined variables and functions 
// Execution stack is the order in which functions are called, but 
// scope chain is the order in which functions are written in the code. 
// scope determined by where they are written 
