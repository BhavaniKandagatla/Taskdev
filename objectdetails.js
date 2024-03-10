// Create a person object with properties
var person = {
    name: "John",
    age: 30,
    country: "USA"
};

// Function to print all properties of the object
function printPersonProperties(personObj) {
    for (var key in personObj) {
        if (personObj.hasOwnProperty(key)) {
            console.log(key + ": " + personObj[key]);
        }
    }
}

// Call the function to print properties of the person object
printPersonProperties(person);
