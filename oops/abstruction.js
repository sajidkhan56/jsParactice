class Book {
    #title;
    #author;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
    }

    getTitle() {
        return this.#title;
    }

    getSummary()
    {
        return this.#title+" Written by "+this.#author;
    }

}

obj = new Book('Introduction to Computing', 'D.S Malik');
console.log(obj.getTitle());
console.log(obj.getSummary());