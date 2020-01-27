// when interacting with the DOM specific interactions occur
/*
First:  Event bubbling
ex. when clicking a button - that click event is triggered up on all the parent elements.
if you have a button inside a section inside a main div inside the window,  the action on the bubble (click) will 
bubble all the way up through to the window to the root.

Target element - element that actually had the action happen to it, the button clicked on. 
this means all the parent elements ancestors of the button element know this happeened.

Event delegation - if we know where event was fired then we can attach an event handler  to parent and wait for it to bubble up
why?
1. when element has lot so childrens
2. when want handler attached to element that is not yet in the DOM  when page is loaded.

*/
// use event delegation 
// use id's in html to connect UI with data model
// how to use parentNode property for DOM traversing. 

// to act upon an element that is higher like upper parent element, this is
// DOM Traversing 
// target returns a DOM node,  event.target.parentNode