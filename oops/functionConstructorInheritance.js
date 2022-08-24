function BankAccount (title, balance = 0) {
    this.title = title;
    this.account_number = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}

function CurrentAccount (title, balance = 0) {
    BankAccount.call(this, title, balance)
    this.daily_withdraw_limit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);

obj = new CurrentAccount('sajid khan', 2000);
obj.deposit(4000);
console.log(obj);