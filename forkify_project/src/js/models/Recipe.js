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
        }
    }
}