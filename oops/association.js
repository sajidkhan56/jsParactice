function Book (title, author) {
   this.title = title;
   this.author = author;
   
}

obj1 = new Book('English Grammer', 'Verin Martan');
obj2 = new Book('Introduction to Computing', 'D.S Malik');
obj3 = new Book('Theory of automata', 'automata');

obj2.multiplicity = obj1;
obj2.multiplicity = obj3;

console.log(obj2);