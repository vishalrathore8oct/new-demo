function calculateRentalCost(days, carType) {
    const rates = {
        Economy: 4000,
        Midsize: 10000,
        Luxury: 20000
    };
    return days * rates[carType];
}

console.log(calculateRentalCost(3, 'Midsize'));
