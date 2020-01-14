// very crucial and often advanced item, can be difficult 
// write a function that returns a function to calculate retirement 
// means inner function can still use the outer function that has already returned and gone.  
// this means for some reason we still have access to the outer variable in the function that wraps the inner function.

// an inner function always has access to the variables and parameter of its outer function, even after the outer function has returned. 
function retirement(retirementAge) {
    let a = 'years left until retirement.';
    return function(yearOfBirth) {
        let age = 2020 - yearOfBirth; 
        console.log((retirementAge - age) + a); 
    }
};

let retirementUS = retirement(66);
retirementUS(1979);
retirement(66)(1979); 

/*
execution stack - global execution context - execution context (retirement)
Scope chain - global scope- scope (retirement() ) 
so even when function returns and execution context is gone, the variable object is still there. 
The secret to closures is that,even after a function returns,and execution context is gone,the variable object is still there.
It's not gone.It still sits here in memory and it can be accessed,and that's why we still it therein the execution stack on the left side,
and also in the scope chain on the right side,because, and I'm sure that you remember this,the scope chain is in fact a pointer to variable objects,
and in this case, the variable object that we have here on the stack.So let's see this in action.
Let's call the inner function,that we effectively called retirementUS,with the argument of 1990,
which puts, of course, a new execution context on the stack.Let's now look at the scope chain.So since this inner function is written lexically
in the retirement function, it has access to its scope,and you already know and use that.
And now here comes the magic.Since the variable objectof the retirement function is still there,the scope chain stays intact.It keeps working.
And so, we can access the variables that were created in the retirement function long after the function has completed execution,
and after its execution context is, of course, gone.The current execution context has closed inon the outer variable object,so that it can use it,
and that's why it's called a closure.So the scope chain always stays intact.This is the most important thingthat you have to understand and remember.

closures are built in manually.  

*/

let retirementGermany = retirement(65);
let retirementIceLand = retirement(67);
retirementGermany(1979); 

function interviewQuestion(job) {
    let question = ' please explain what you do as a ' + job; 

    return function(name) {
        switch(job) {
            case 'teacher':
                console.log(name + question);
                break;
            case 'designer':
                console.log(name + question);
                break;
            default:
                job = prompt('sorry ' + name + ' what is it that you do?');
                console.log('okay thank you and ' + name + question); 
        }
    }
};
interviewQuestion('teacher')('Henry'); 
