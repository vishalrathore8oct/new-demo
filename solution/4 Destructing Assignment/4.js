function extractElements(array) {
    const [first, second, , , last] = array;
    return [first, second, last];
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
console.log(extractElements(arr)); // Output: [1, 2, 5]
