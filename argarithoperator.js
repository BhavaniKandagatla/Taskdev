function calculateOperations(num1, num2) {
    var sum = num1 + num2;
    var difference = num1 - num2;
    var product = num1 * num2;
    var quotient = num1 / num2;
    
    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient
    };
}

// Example usage:
var result = calculateOperations(10, 5);
console.log("Sum:", result.sum);
console.log("Difference:", result.difference);
console.log("Product:", result.product);
console.log("Quotient:", result.quotient);
