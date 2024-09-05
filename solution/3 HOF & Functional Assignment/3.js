const storeInventory = {
    "item1": 50,
    "item2": 30,
    "item3": 20,
    "item4": 100
};

const exchangeRate = 80;  // 1 USD = 80 INR

const convertedInventory = Object.fromEntries(
    Object.entries(storeInventory).map(([item, price]) => [item, price * exchangeRate])
);

console.log(convertedInventory);
