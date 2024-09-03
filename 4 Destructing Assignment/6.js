function extractPersonDetails(person) {
    const { name, address: { street } } = person;
    return { name, street };
}

// Example usage:
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};
console.log(extractPersonDetails(person)); // Output: { name: "John Doe", street: "123 Main St" }
