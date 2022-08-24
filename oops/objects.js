// objects
const Book = {
    author: 'sajid khan',
    year: 2022,
    company: 'Taj limited'
}

// function constructor

function User(username, email, qualification) {
    this.username = username;
    this.email = email;
    this.qualification = qualification;
}

User.prototype.updateGmail = function (email) {
    this.email = email;
}

obj = new User('sajid khan', 'sajid.web56@gmail.com', 'BSCS');
obj.updateGmail('sajidkhan@gmail.com');

// classes

class Vehicle {
    name;
    type;
    model;

    constructor(name, type, model) {
        this.name = name;
        this.type = type;
        this.model = model;
    }

    getData () {
        return this.name+" "+this.type+" "+this.model;
    }
}

vehicle = new Vehicle('Corolla X', 'Car', '2004');
//console.log(vehicle.getData());

//Inheritance

// function constructor 
function Picture (title, price = 0) {
    this.title = title;
    this.price = price;
}

Picture.prototype.updatePrice = function (price = 0) {
    this.price = price;
}

function Photograph() {
    Picture.call(this)
    this.photographer;
    this.camera;
    this.speed;
}

Photograph.prototype.details = function (title, photographer, camera, speed) {
    this.title = title;
    this.photographer = photographer;
    this.camera = camera;
    this.speed = speed;
}
//Photograph.prototype = Object.create(Picture.prototype);
photographer = new Photograph;
//photographer.updatePrice(100);
photographer.details('Adventure', 'sajid khan', 'sony', '10ms');
console.log(photographer);


