function countOccurrences(text) {
    const words = text.split(' ');
    const wordCount = new Map();

    for (let word of words) {
        word = word.toLowerCase();
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    return wordCount;
}

// Example usage:
const text = "apple orange apple banana orange apple";
console.log(countOccurrences(text));
