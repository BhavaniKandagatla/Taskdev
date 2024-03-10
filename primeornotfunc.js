function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    
    // Check for divisibility by numbers from 2 to the square root of the number
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Example usage:
var userInput = parseInt(prompt("Enter a number to check if it's prime:"));
var primeCheckResult = isPrime(userInput);

if (primeCheckResult) {
    console.log(userInput + " is a prime number.");
} else {
    console.log(userInput + " is not a prime number.");
}
