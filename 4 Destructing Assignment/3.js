function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
}

// Example usage:
let x = 5, y = 10;
console.log(swapValues(x, y)); // Output: [10, 5]
