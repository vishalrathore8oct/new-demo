const calculateTotalCost = cart => cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);

console.log(calculateTotalCost([{ unitPrice: 100, quantity: 2 }, { unitPrice: 150, quantity: 3 }]));
