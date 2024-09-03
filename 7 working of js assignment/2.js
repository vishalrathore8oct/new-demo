try {
    console.log(multiplyNumbers(2, 3)); // This will throw an error because function expressions are not hoisted
} catch (error) {
    console.error(error); // ReferenceError: Cannot access 'multiplyNumbers' before initialization
}

const multiplyNumbers = function(a, b) {
    return a * b;
};
