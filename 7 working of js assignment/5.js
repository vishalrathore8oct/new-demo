{
    try {
        console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    } catch (error) {
        console.error(error);
    }

    let letVariable = 'I am let';
    console.log(letVariable); // Outputs 'I am let'
}
