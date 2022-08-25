class First {
    a = 5;
    b = 6;
}

class Second extends First {

    Sum () {
        return this.a + this.b;
    }
}

class Third extends Second {

    Multiple () {
        return this.a * this.b;
    }
}

class Four extends Third {

}

obj = new Four;
console.log(obj.Sum());
console.log(obj.Multiple());