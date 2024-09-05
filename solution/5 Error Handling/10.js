function filterByCategory(products) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

// Example usage:
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" }
];

const electronicsFilter = filterByCategory(products);
console.log(electronicsFilter("Electronics"));
// [{ name: "Laptop", category: "Electronics" }, { name: "Phone", category: "Electronics" }]
