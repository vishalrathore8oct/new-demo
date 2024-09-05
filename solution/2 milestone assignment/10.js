function correctCartBug(cart) {
    return cart.map(quantity => quantity * 2);
}

console.log(correctCartBug([1, 2, 3, 4]));
