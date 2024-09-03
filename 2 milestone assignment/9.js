function checkDivisibility(numbers) {
    for (let number of numbers) {
        if (number % 3 === 0 && number % 2 !== 0) {
            console.log(number);
        }
    }
}

checkDivisibility([1, 3, 6, 9, 12, 15]);
