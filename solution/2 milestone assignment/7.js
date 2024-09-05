function removeDuplicates(cart) {
    return [...new Set(cart)];
}

console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange', 'banana']));
