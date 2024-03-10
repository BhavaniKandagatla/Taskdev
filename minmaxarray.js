function findMaxAndMin(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return "The array is empty.";
    }
    
    var max = Math.max(...array);
    var min = Math.min(...array);
    
    return {
        max: max,
        min: min
    };
}

// Example usage:
var numbers = [4, 2, 8, 1, 6, 9, 3];
var result = findMaxAndMin(numbers);
console.log("Maximum element:", result.max);
console.log("Minimum element:", result.min);
