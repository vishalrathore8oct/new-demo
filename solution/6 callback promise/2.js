function manipulateString(str) {
    const upperStr = str.toUpperCase();

    function logString() {
        console.log(`The manipulated string is: ${upperStr}`);
    }

    return logString;
}

// Example usage:
const log = manipulateString("hello world");
log(); // "The manipulated string is: HELLO WORLD"
