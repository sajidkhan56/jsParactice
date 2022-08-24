class BankAccount {
    title;
    account_number;
    balance;

    constructor(title, balance = 0) 
    {
        this.title = title;
        this.account_number = Date.now();
        this.balance = balance;
    }

    deposit (amount)
    {
        this.balance += amount;
    }

    withdraw (amount)
    {
        this.balance -= amount;
    }
}

obj = new BankAccount('sajid khan', 1000);
obj.deposit(3000);
console.log(obj);
