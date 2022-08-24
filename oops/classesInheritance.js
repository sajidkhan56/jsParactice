class BankAccount {
    title;
    account_number;
    balance;

    constructor(title, balance = 0) {
        this.title = title;
        this.account_number = Date.now();
        this.balance = balance;
    }

    deposit (amount) {
        this.balance += amount;
    }

    withdraw (amount) {
        this.balance -= amount;
    }
}

class CurrentAccount extends BankAccount {
    
    limit = 40000;

    constructor(title, balance) {
        super(title, balance);
    }

}

obj = new CurrentAccount('sajid khan', 1000);
obj.deposit(2000);
obj.withdraw(500);
console.log(obj);