// function overriding
class Polymorphism {
    name = 'sajid khan';

    showName() {
        return this.name;
    }
}

class Polymorphism1 extends Polymorphism {

     showName() {
         return "Updated Name";
     }
}

obj = new Polymorphism1;
console.log(obj.showName());

 
