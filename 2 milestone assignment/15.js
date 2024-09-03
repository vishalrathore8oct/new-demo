const calculateDiscount = (originalPrice, discountedPrice) => 
    ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(2);

console.log(calculateDiscount(1000, 800));
