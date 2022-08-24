class Book {
    author;
    numberOfPages;
    genre;

    constructor(author, numberOfPages, genre) {
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.genre = genre;

    }
    previewContent() {
        return this.author+" "+this.numberOfPages+" "+this.genre;
    }
}

class Item extends Book {
    name;
    description;
    price;
    cart = [];
    constructor(name, description, price, author, numberOfPages, genre) {
        
        super(author, numberOfPages, genre);
        this.name = name;
        this.description = description;
        this.price = price;
    }
    viewFullDescription() {
        return this.description;
    }

    addToShoppingBasket() {
        this.cart.push(this.name);
        return this.cart;

    }

    removeFromShoppingBasket() {

    }
}

obj = new Item('Book', 'Story book', '100', 'allam iqbal', '200', 'Blod');
obj1 = new Item('Book1', 'Story book1', '1001', 'allam iqbal1', '2001', 'Blod1');
obj1.addToShoppingBasket();
//console.log(obj.previewContent(), obj.viewFullDescription());
console.log(obj1.cart);