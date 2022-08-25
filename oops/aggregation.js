function Book (title, author) {
    this.title = title;
    this.author = author;
}

obj1 = new Book('Itroduction to Computing', 'D.S Malik');
obj2 = new Book('Theory of automata', 'automata');

const publication = {
    'publication_name': "publication .inc",
    'Books': []
}


publication.Books.push(obj1);
publication.Books.push(obj2);

console.log(publication.Books);