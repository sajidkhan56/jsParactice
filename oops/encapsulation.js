 class BankAccount {
    title;
    account_number;
    #balance;

    constructor(title, balance = 0) {
        this.title = title;
        this.account_number = Date.now();
        this.#balance = balance;
    }

    set balance(balance) {
        this.#balance = balance;
    }

    get balance() {
       return this.#balance;
    }
 }

 class CurrentAccount extends BankAccount {

    limit = 40000;

    constructor(title, balance = 0) {
        super(title, balance);
    }
 }
 obj = new CurrentAccount('sajid khan', 1000);
 obj.balance = 5000;
 console.log(obj.balance);