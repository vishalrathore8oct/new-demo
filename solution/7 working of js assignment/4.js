{
    try {
        console.log(varVariable); // Undefined due to hoisting
        console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
        console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
    } catch (error) {
        console.error(error);
    }

    var varVariable = 'I am var';
    let letVariable = 'I am let';
    const constVariable = 'I am const';

    console.log(varVariable); // Outputs 'I am var'
    console.log(letVariable); // Outputs 'I am let'
    console.log(constVariable); // Outputs 'I am const'
}
