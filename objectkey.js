function countKeys(object) {
    return Object.keys(object).length;
}

// Example usage:
var person = {
    name: "John",
    age: 30,
    country: "USA"
};

var count = countKeys(person);
console.log("Number of keys in the object:", count);
