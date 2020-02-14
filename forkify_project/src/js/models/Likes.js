export default class Likes {
    constructor() {
        this.likes = []; 
    }
    addLike(id, title, author, img) {
        const like = {id, title, author, img };
        this.likes.push(like); 
        // persist data in localstorage
        this.persistData();
        return like; 
    }
    deleteLIke(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
        // persist data in local storage
        this.persistData(); 
    }
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1 // if found equals true if not found = -1 not true
    }
    getNumLikes() {
        return this.likes.length; 
    }
    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }
    readStorage() {
        const storage = JSON.parse(localStorage.getItem('likes'));
        // below restoring likes from local storage. 
        if (storage) this.likes = storage; 
    }
}