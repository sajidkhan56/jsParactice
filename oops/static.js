class User {
    name;
    email;
    address;

    constructor(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }

    static getData()
    {
        return "hello from the static function";
    }
}

obj = new User('sajid khan', 'sajid.web56@gmail.com', 'islambad');
console.log(User.getData());