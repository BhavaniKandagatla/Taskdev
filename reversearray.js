function reverseArray(array) {
    // Initialize pointers for the start and end of the array
    var start = 0;
    var end = array.length - 1;
    
    // Swap elements from start to end until the pointers meet
    while (start < end) {
        // Swap elements at start and end indices
        var temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        
        // Move pointers towards the center of the array
        start++;
        end--;
    }
    
    return array;
}

// Example usage:
var originalArray = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(originalArray);
console.log("Original array:", originalArray);
console.log("Reversed array:", reversedArray);
