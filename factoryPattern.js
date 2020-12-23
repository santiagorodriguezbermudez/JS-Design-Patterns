function Car(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
}

function Truck( options ) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

// This is the factory:

function VehicleFactory() {}

// Define the protoypes and utilities for this factory

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function ( options ) {
    switch(options.vehicleType){
        case "car":
            this.vehicleClass = Car;
            break;
        case "truck":
            this.vehicleClass = Truck;
            break;
    }

    return new this.vehicleClass( options );
};

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
    vehicleType: 'car'
    color: 'yellow',
    doors: 6,
});

// Outputs: Car object of color 'yellow', doors: 6 in a 'brand new'/
console.log( car );

// We can also create a truck with the same factory. 
var movingTruck = carFactory.createVehicle ({
    vehicleType: "truck",
    state: "like new",
    color: "red",
    wheelSize: "small"
})

// Outputs: true.
console.log( movingTruck instanceof Truck );