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
import Recipe from './models/Recipe';
import List from './models/List'; 
import * as SearchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';
// The State of the app 
const state = {};
// window.state = state; // only for when testing items in the browser.
// search controller 
const controlSearch = async () => { // cause doing an await inside need to make this async. 
    //1 get the query;
    const query = SearchView.getInput(); 
    console.log(query); 
    //2create new search object
    if (query) {
        // new search object and add to state
        state.search = new Search(query); 

        //3 prepare UI for results
        SearchView.clearInput(); 
        SearchView.clearResults();
        renderLoader(elements.searchRes); 
        try {
            // 4 Search for recipes. 
            await state.search.getResults(); // this returns a promise cause it's an async function 
            // 5 render results on UI
            clearLoader(); 
            console.log(state.search.result); 
            SearchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something go bad with the search...');
            clearLoader(); 
        }
    }
}
elements.searchForm.addEventListener('submit', event => {
    event.preventDefault(); 
    controlSearch();
});
// if you want to test,  window.addEventListener('load'); 
elements.searchResPages.addEventListener('click', event => {
    // console.log(event.target); 
    // use closest cause all the little click things it returns closes ancester
    const btn = event.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10); // access way to data from ui
        SearchView.clearResults(); 
        SearchView.renderResults(state.search.result, goToPage);
    }
})
// Recipe Controller *****
const controlRecipe = async () => {
    // get id from url 
    const id = window.location.hash.replace('#', ''); // get rid of the hash , replace it with empty space
    // console.log(id); 
    if (id) {
        //prepare UI for changes
        recipeView.clearRecipe(); 
        renderLoader(elements.recipe); 
        // Highlight selected search item
        if (state.search) SearchView.highlightSelected(id); 
        // create new recipe object
        state.recipe = new Recipe(id);
        // test window.r = state.recipe;
        try {
            // prepare ui
            // Get recipe data
            await state.recipe.getRecipe();
            console.log(state.recipe.ingredients); 
            state.recipe.parseIngredients(); 
            // Calculate serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();
            // Render recipe
            console.log(state.recipe);
            clearLoader(); 
            recipeView.renderRecipe(state.recipe); 
        } catch (err) {
            alert('-----------Error processing recipe-----------------'); 
        }
    }
};
// * instead of doing this below and assigning multiple events to a single event. 
// window.addEventListener('hashchange', controlRecipe); 
// window.addEventListener('load', controlRecipe);
// * Can make an array with events and loop through it and pass into eventlistener the evnt.

// make list controller
const controlList = () => {
    // Create a new list if there is none yet; 
    if (state.list) state.list = new List(); 
    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient); 
    listView.renderItem(item); 
    });
}
// handle delete and update list item events
elements.shopping.addEventListener('click', event => {
    const id = event.target.closest('.shopping__item').dataset.itemid;
    // handle the delete button
    if (event.target.matches('.shopping__delete, .shopping__delete *')) {
        // delete from state
        state.list.deleteItem(id);
        // delete from ui
        listView.deleteItem(id); 
        // handle count update. 
    } else if (event.target.matches('.shopping__count-value')) {
        const val = parseFloat(event.target.value, 10);
        state.list.updateCount(id, val);
    }
});

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
// need event delegation cause elements not there as page is loaded.
// handling recipe button clicks
elements.recipe.addEventListener('click', event => {
    if (event.target.matches('.btn-decrease, .btn-decrease *')) /* this * is any child of that selector */ {
        // Decrease button clicked
        if (state.recipe.servings > 1) {
        state.recipe.updateServings('dec'); 
        recipeView.updateServingsAndIngredients(state.recipe);
        }
    } else if (event.target.matches('.btn-increase, .btn-increase *')) {
        // button increase clicked. 
        state.recipe.updateServings('inc');
        recipeView.updateServingsAndIngredients(state.recipe);
    } else if (event.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList(); 
    }
});
window.l = new List(); 
// const r = new Recipe(234234); //pass in id. 
// r.getRecipe(); 
// console.log(r);  this is where you will see the object from Recipe.js
// const search = new Search('pizza'); // this argument is the query for the object in search.js
// console.log(search); 


// application state and controllers. 
// STATE  - What is the state of our app at any given time. it's basically all of the data for the app at a single moment
// state is almost alway skept in an object. .  // one is redux that is used with react. 
// with search, searchview and index above
/*
we have result stored in state element we also have imporetd function from searchview to get the data
we then create a new search object that has the query in it and get results from api call,
wait for that to finish and then render results to user interface.
*/
