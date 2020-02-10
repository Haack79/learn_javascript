// // global app controller
// // import x from './test'; // this will be the exported value of 24 from test.js;
// // console.log(`I imported ${x} from another module!`);

// // this works with bundler.
// // could do 
// // import * as searchView from './views/searchView';
// // then searchView.add(2,3); 
// import str from "./models/Search";  // cause the export was default it gets data from that file and can name it what you want
// import { add as a, multiply, ID } from './views/searchView'; // here cause named exports, have to use exact name. 
// console.log(`I am a ${str} and I will add ${a(ID, 27)} also multiply 3,5 is ${multiply(3, 5)}`);
// // can rename as seen with add above. 


// // using AXIOS 
// import axios from 'axios';  // specify axios -this name here matches whats in package.json
// async function getResults(query) {
//     const proxy = 'https://cors-anywhere.herokuapp.com/'; // if get cors error 
//     const key = '23462362362362?key';
//     try {
//         const res = await axios(`apilink?key=${key}&q=${query}`);
//         const recipes = res.data.recipes;
//     } catch (e) {
//         alert(e); 
//     }
// // opinion axios is better than fetch,  better error handling and more intuitive. 



// }
// getResults('pizza');
// *** Global State of the APP yeeeee 
// search object with search query 
// current recipe.
// light recipes. 
import Search from './models/Search';
import * as SearchView from './views/searchView';
import { elements } from './views/base';

const state = {};
const controlSearch = async () => { // cause doing an await inside need to make this async. 
    //1 get the query;
    const query = searchView.getInput(); 
    console.log(query); 
    //2create new search object
    if (query) {
        // new search object and add to state
        state.search = new Search(query); 

        //3 prepare UI for results
        searchView.clearInput(); 
        searchView.clearResults();
        // 4 Search for recipes. 
        await state.search.getResults(); // this returns a promise cause it's an async function 
        // 5 render results on UI
        console.log(state.search.result); 
        searchView.renderResults(state.search.result);
    }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault(); 
});

const search = new Search('pizza'); // this argument is the query for the object in search.js
console.log(search); 


// application state and controllers. 
// STATE  - What is the state of our app at any given time. it's basically all of the data for the app at a single moment
// state is almost alway skept in an object. .  // one is redux that is used with react. 
// with search, searchview and index above
/*
we have result stored in state element we also have imporetd function from searchview to get the data
we then create a new search object that has the query in it and get results from api call,
wait for that to finish and then render results to user interface.
*/
