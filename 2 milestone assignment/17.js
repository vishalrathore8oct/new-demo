let customer = {
    name: "John Doe",
    balance: 5000,
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        this.balance -= amount;
    }
};

customer.deposit(1000);
customer.withdraw(500);
console.log(customer.balance);
