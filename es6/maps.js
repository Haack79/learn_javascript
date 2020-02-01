/* 
hash maps,  when you map string keys to arbitrary values.
a key value data structure
can use anything for the key, any primitive value as well as keys
*/
const question  = new Map(); // creates new empty map
question.set('question', 'what is official name of latest major js version?'); //set key as question and value as the question
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'es2015');
question.set(4, '2002');
question.set('correct', 3); 
question.set(true, 'Correct Answer');
question.set(false, 'wrong please try again');
question.get(key);
question.get('question'); // returns the value
question.size;  // 8
// remove speicfic one
question.delete(4); 
// check
if (question.has(4)) {
    question.delete(4);
};
question.clear(); // clears     out the whole map
// can iterate maps really easily
question.forEach((value, key) => console.log(`this is ${key}, and ${value}`));

for (let [key, values] of question.entries()) {
    console.log(`this is ${key}, and ${value}`;
}
