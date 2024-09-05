function highestMarks(marks) {
    let highest = marks[0];
    for (let i = 1; i < marks.length; i++) {
        highest = marks[i] > highest ? marks[i] : highest;
    }
    console.log(`Highest marks: ${highest}`);
}

highestMarks([85, 92, 88, 79, 95]);
