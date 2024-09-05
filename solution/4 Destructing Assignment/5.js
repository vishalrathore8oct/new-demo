function minMaxValues(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return { max, min };
}

// Example usage:
const numbers = [5, 2, 7, 1, 9];
console.log(minMaxValues(numbers)); // Output: { max: 9, min: 1 }
