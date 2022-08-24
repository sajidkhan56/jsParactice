function BankAccount (title, balance = 0)
{
    this.title = title;
    this.account_number = Date.now();
    this.balance = balance;
}

//to solve memory repeation problem
BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

obj = new BankAccount ('sajid khan', 1000);
obj.deposit(2000);
console.log(obj);
