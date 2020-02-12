import uniqid from 'uniqid';
export default class List {
    constructor() {
        this.items = []; 
    }
    addItem (count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item); 
        return item; 
    }
    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id); 
        // splice mutates original array, start index and how many positions want to take out 
        // [2,4,8].splice(1,1) returns [2,8]; [2,4,8].splice(1,2) returns 4,8 and original array is now 2 
        // [2,4,8].slice => returns 4 but original array unaffected. 
        this.items.splice(index, 1); // this will delete the single element with the id
    }
    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount; // find will loop through to find it. 
    }
}