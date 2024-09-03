class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return '*'.repeat(this._password.length);
    }

    set password(newPassword) {
        if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Password must be at least 8 characters long, contain at least one number, and one uppercase letter.");
        }
    }
}

// Example usage:
const user = new User("johnDoe", "Password123");
console.log(user.password); // "***********"
user.password = "pass"; // Error message
user.password = "NewPass123";
console.log(user.password); // "*********"
