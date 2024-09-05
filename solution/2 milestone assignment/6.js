function countVowels(name) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of name) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`Number of vowels: ${count}`);
}

countVowels("Jonathan");
