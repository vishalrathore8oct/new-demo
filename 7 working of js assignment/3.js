function sumNumbers(a, b) {
    console.log(result); // Undefined due to hoisting
    var result = a + b;
    return result;
}

console.log(sumNumbers(2, 3)); // Outputs 5
