function billSplitter(costs, numPeople) {
    const totalBill = costs.reduce((acc, cost) => acc + cost, 0);
    return {
        totalBill,
        perPerson: totalBill / numPeople
    };
}

console.log(billSplitter([200, 150, 300], 3));
