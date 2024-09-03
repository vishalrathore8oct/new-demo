function convertToNumber(str) {
    try {
        let num = Number(str);
        if (isNaN(num)) {
            throw new Error("Invalid number");
        }
        return num;
    } catch (error) {
        return error.message;
    }
}

// Example usage:
console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // "Invalid number"
