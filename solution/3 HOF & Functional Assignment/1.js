function reverseString(input) {
    setTimeout(() => {
        const reversed = input.split('').reverse().join('');
        console.log(reversed);
    }, 2000);
}

reverseString("Hello, World!");
