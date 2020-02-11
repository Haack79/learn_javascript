import axios from 'axios';
import { key, proxy } from '../config';
// export default 'I am exported yessssss';
// Build Data MOdel  
export default class Search {
    constructor(query) {
        this.query = query;
    }
    getResults(query) { // dont need this here cause going to get the query from the object itself so use this.query; 
        try {
            const res = await axios(`${proxy}apilink?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result); 
        } catch (e) {
            alert(e); 
        }
    // opinion axios is better than fetch,  better error handling and more intuitive. 
    
    }
}