function sumArray(numbers) {
    var sum = 0;
    // Loop through the array and add each number to the sum
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Example usage:
var inputArray = [1, 2, 3, 4, 5];
var result = sumArray(inputArray);
console.log("Sum of the numbers in the array:", result);
