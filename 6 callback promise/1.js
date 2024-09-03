function doubleArray(arr, callback) {
    const doubledArray = arr.map(num => callback(num));
    return doubledArray;
}

function double(num) {
    return num * 2;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(doubleArray(numbers, double)); // [2, 4, 6, 8, 10]
