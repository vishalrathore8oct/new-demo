class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

// Example usage:
const employee = new Employee("Alice", "Developer", 50000);
console.log(employee.getSalary()); // 50000
