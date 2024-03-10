function callAfterThreeSeconds(callback) {
    setTimeout(callback, 3000); // 3000 milliseconds = 3 seconds
}

// Example callback function
function myCallback() {
    console.log("Callback function called after 3 seconds.");
}

// Call the function with the callback
callAfterThreeSeconds(myCallback);
