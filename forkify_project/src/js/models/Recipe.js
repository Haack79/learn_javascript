import axios from 'axios';
import { key, proxy } from '../config';
export default class Recipe {
    constructor(id) {
        this.id = id; 
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}apilink?key=${key}&q=${this.query}&Id=${this.id}`);
            // console.log(res); 
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.image_url;
            this.url = res.data.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('Something went wrong: (');
        }
    }
    calcTime() {
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }
    calcServings() {
        this.servings = 4; 
    }
    parseIngredients() {
        // put different units in to arrays for short and long form. 
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsShort, 'kg', 'g'];
        // assign into newIngredients by mapping it 
        const newIngredients = this.ingredients.map(el => {
            // Uniform units to lowercase. 
            let ingredient = el.toLowerCase(); 
            // convert each longUnit in array to be replaced by shortform 
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            })
            // remove parens using regular expression with space
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');  
            // parse ingredients into count and ingredient
            const arrIngrd = ingredient.split(' '); 
            const unitIndex = arrIngrd.findIndex(element2 => units.include(element2));
            let objIngrd; 
            if (unitIndex > -1) {
                // there is a unit
                const arrCount = arrIngrd.slice(0, unitIndex);  // 4 1/2 cups, arrCount is [4, 1/2]; or 4 cups is [4] 
                let count; 
                if (arrCount.length === 1) {
                    count = arrIngrd[0].replace('-', '+'); 
                } else {
                    // ACTUALLY NEVER USE EVAL !!!!!!!!!!!!! IT CAN BE HACKED ! 
                    count = eval(arrIngrd.slice(0, unitIndex).join('+')); 
                }
                objIngrd = {
                    count,
                    unit: arrIngrd[unitIndex],
                    ingredient: arrIngrd.slice(unitIndex + 1).join(' ')
                };
            } else if (parseInt(arrIngrd[0], 10)) { // tries to coerce into number if number be true else false
                // there is no unit, but 1st element is number
                objIngrd = {
                    count: parseInt(arrIngrd[0], 10),
                    unit: '',
                    ingredient: arrIngrd.slice(1).join(' ')
                }
            }  else if (unitIndex === -1) {
                // there is no unit or number in 1st position
                objIngrd = {
                    count: 1,
                    unit: '',
                    ingredient // this is like ingredient: ingredient 
                }
            }
            return objIngrd;  // must return something on each iteration that will be saved in current position  of new array
        });
        this.ingredients = newIngredients; 
    }
    updateServings(type) {
        // Servings
        const newServings = type === 'dec' ? this.servings -1 : this.servings + 1;
        //Ingredients
        this.ingredients.forEach(ing => {
            ingrd.count *= (newServings / this.servings); 
        })
        this.servings = newServings;
    }
}