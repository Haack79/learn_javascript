// global app controller
// import x from './test'; // this will be the exported value of 24 from test.js;
// console.log(`I imported ${x} from another module!`);

// this works with bundler.
// could do 
// import * as searchView from './views/searchView';
// then searchView.add(2,3); 
import str from "./models/Search";  // cause the export was default it gets data from that file and can name it what you want
import { add as a, multiply, ID } from './views/searchView'; // here cause named exports, have to use exact name. 
console.log(`I am a ${str} and I will add ${a(ID, 27)} also multiply 3,5 is ${multiply(3, 5)}`);
// can rename as seen with add above. 
