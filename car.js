// Define the car object
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    drive: function() {
        console.log("The " + this.year + " " + this.brand + " " + this.model + " is being driven.");
    }
};

// Call the drive method on the car object
car.drive();
