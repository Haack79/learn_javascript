// rest parameters allow you to pass in an arbitrary number of arguments into a function 
// and to use these arguments in that function
// rest paramaters take single values and transforms them into an array
// this is opposite spread which takes array of values and puts them into an array
//**************** rest param */
//ES5
function isFullAge() {
    console.log(arguments); // special variable have access to in all functions. 
}

isFullAge(2,3,1); // [2, 3, 1]; 

function isFullAges5() {
    var argsArr = Array.prototype.slice.call(arguments); 
    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= 18); 
    });
}
isFullAges5(1990, 2001, 2003); 

function isFullAge6(...years) {
    console.log(years);
}
isFullAge6(1900,2001, 1999,2008); // prints avlues out as an array [1990, 2001, etc]

isFullAge67(...years) {
    years.forEach(cur => console.log((2020 - cur) >= 18)); 
}
// ************* now call with a limit parameter. ************************
// ES5 --------------------
function isFullAges5Limit(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1); // cause of slice it starts copying the array at 1.// meaning we exclude the first argument
    argsArr.forEach(function(cur) {
        console.log((2020 - cur) >= limit); 
    });
}
isFullAges5Limit(21, 1990, 2001, 2003); 
// ES6 ******* ------------

function isFullAge67Limit(limit, ...years) {
    years.forEach(cur => console.log((2020 - cur) >= limit)); 
}
isFullAge67Limit(100, 1900,2001, 1999,2008);

// ********************* DEFAULT PARAMETERS ***************************
// when you want a parameter to be preset 
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith': lastName = lastName; 
    nationality === undefined ? nationality === 'america' : nationality = nationality;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality
};
var john = new SmithPerson('John', 1990);// this leaves the other params undefined

//   ES6  -----------------------
// you can declare the defaults where you put the parameters, pretty nice. 

function SmittyPerson(firstName, yearOfBirth, lastName = 'Smitty', nationality = 'america') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality
};