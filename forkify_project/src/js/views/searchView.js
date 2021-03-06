// export const add = (a, b) => a + b;
// export const multiply = (a, b) => a * b;
// export const ID = 7; 
import { elements } from './base';

export const getInput = () => elements.searchInput.value; 
export const clearInput = () => {
    elements.searchInput.value = '';
}; 
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = ' '; 
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active')
    })
    document.querySelector(`results__link[href="#${id}"]`).classList.add('results__link--active');  //make sure put className and not selector with .results
};

/*'past with tomato and spinach'
acc: 0 / acc  cur.length = 5 / new Title = ["pasta", "with"]
acc: 5 / acc  cur.length = 9 / new Title = ["pasta", "with", "tomato"]
acc: 9 / acc  cur.length = 15 / new Title = ["pasta", "with", "tomato"]
acc: 15 / acc  cur.length = 18 / new Title = ["pasta","with", "tomato"] -> cause limit is over 17 not pushin gnew word into array
acc: 15/ acc  cur.length = 24 / new Title = ["pasta","with", "tomato"]
*/
export const limitRecipeTitle = (recipe, limit = 17) => {
    const newTitle = []; 
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur); 
            }
            return acc + cur.length; 
        }, 0);
    return `${newTitle.join(' ')}...`;
    }
    return title;
}
const renderRecipe = recipe => {
    const markup = `
    <li>
        <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup); 
};
// type can be prev or next 
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type} data-goto=${type === 'prev' ? page - 1 : page + 1}">
        <svg class="search__icon">
            <use href="${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
        <span>${type === 'prev' ? page - 1 : page + 1}</span>
    </button>
`;

const renderButton = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage); 
    let button;
    if (page === 1) {
        // only button to go to next page
       button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
       `
    } else if (page < pages) {
        // show both buttons
        button = createButton(page, )
    } else if (pages === pages && pages > 1) {
        // only button to go to previous page
        button = createButton(page, 'prev'); 
    }
    elements.searchResPages.insertAdjacentHTML('afterbegin', button); // where and what we want to insert. 
}

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render results of current page
    const start = (page -1) * resPerPage;
    const end = page * resPerPage;
    // this receives an array of recipes
    recipes.slice(start, end).forEach(renderRecipe);
    // render pagination buttons
    renderButton(page, recipes.length, resPerPage); 
};

// slice method returns shallow copy  of portion of an array into new array.
// it extracts up to but not including the end.