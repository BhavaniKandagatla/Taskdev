function createGreetingFunction() {
    return function(name) {
        console.log("Hello, " + name + "!");
    };
}

// Example usage:
var greet = createGreetingFunction();
greet("Bhavani");
